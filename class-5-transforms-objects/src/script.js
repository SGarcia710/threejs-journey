import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);

// // Position
// // mesh.position.x = 0.7;
// // mesh.position.y = -0.6;
// // mesh.position.z = 1;
// mesh.position.set(0.7, -0.6, 1); // Alternative to change three axis together

// // Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
// // You also can use .set() to modify three of them

// // Rotation: This time the rotation will be a Euler and values will be in radians
// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;
// // Because the Eurle order can be problematic, we can go with Quarnernion

// scene.add(mesh);

// //mesh.position.normalize(); // This method is going to transform the position of my object and put it on 1,1,1

/**
 * Objects groups: We are going to work with Object groups, so the lat code is
 * deactivated
 */
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

// Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//camera.lookAt(mesh.position); // This method makes the object calling it to see directly to the center of the given position (in this case, object position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
