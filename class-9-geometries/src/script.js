import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.Geometry();

// Triangle
// const vertex1 = new THREE.Vector3(0, 0, 0);
// geometry.vertices.push(vertex1);

// const vertex2 = new THREE.Vector3(0, 1, 0);
// geometry.vertices.push(vertex2);

// const vertex3 = new THREE.Vector3(0, 0, 1);
// geometry.vertices.push(vertex3);

// const face = new THREE.Face3(0, 1, 2); // These numbers correspond to the index on the vertices array
// geometry.faces.push(face);

// Auto generate random triangles
// for (let i = 0; i < 50; i++) {
//   // 50 triangles
//   for (let j = 0; j < 3; j++) {
//     // With 3 faces
//     geometry.vertices.push(
//       new THREE.Vector3(
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4
//       )
//     );
//   }
//   const verticesIndex = i * 3;
//   geometry.faces.push(
//     new THREE.Face3(verticesIndex + 0, verticesIndex + 1, verticesIndex + 2)
//   );
// }

// Buffer Geometry : Optimized for GPU. Less dev-friendly
// const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 4, 4, 4);

// Buffered Custom Geometry: Triangle
const geometry = new THREE.BufferGeometry();
// const positionsArray = new Float32Array(9);
// // First vertice
// positionsArray[0] = 0;
// positionsArray[1] = 0;
// positionsArray[2] = 0;
// // Second vertice
// positionsArray[3] = 0;
// positionsArray[4] = 1;
// positionsArray[5] = 0;
// // Third vertice
// positionsArray[6] = 1; //X
// positionsArray[7] = 0; //Y
// positionsArray[8] = 0; //Z
// Directly way
// prettier-ignore
// const positionsArray = new Float32Array([
// //  x,y,z
//     0,0,0, // First vertice
//     0,1,0,  // Second vertice
//     1,0,0, // Third vertice
// ]);
// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3); // The three is because we are using 3 values for each position, in the case of UV Coordinates we use 2.
// geometry.setAttribute('position', positionsAttribute);
// // Doing Buffer Custom Geometry doesnt need to set faces

// Create 50 Buffered Triangles (with Custom BufferGeometry)
const count = 5000;
const positionsArray = new Float32Array(count * 3 * 3); // We are going to create 50 triangles, each tirangle will be compose of 3 vertices and each vertice will be compose of 3 values
for (let i = 0; i < positionsArray.length; i++) {
  positionsArray[i] = (Math.random() - 0.5) * 4;
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
geometry.setAttribute('position', positionsAttribute);

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
