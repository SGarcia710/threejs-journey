import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Time
// let time = Date.now();

// Clock
// const clock = new THREE.Clock();

// GSAP
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

// Animations
const tick = () => {
  // We need to know ho much time its been since the last tick

  // Time
  // //   const currentTime = Date.now(); // When the tick occurs
  //   const deltaTime = currentTime - time;
  //   time = currentTime;
  //   console.log(deltaTime);

  // Clock
  //   const elapsedTime = clock.getElapsedTime();
  // Update objects
  //   mesh.rotation.y += 0.001 * deltaTime;
  //   mesh.rotation.y = elapsedTime * Math.PI * 2; // One revolution per second
  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
tick();
