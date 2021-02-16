/* To access to Threejs, we can do it through THREE variable after we import it */

/* First Scene
  We will need 4 elements to get started:
    - A scene that will contain objects
    - Some objects
    - A camera
    - A renderer
*/

// Scene: Its like a container, where we put objects, lights and cameras. At some point we ask Threejs to render that scene
const scene = new THREE.Scene();

// Objects: They can be many things: Primitive geometries, Imported models, Particles, Lights, etc.
// We will start with a simple red cube
// To create a physical object, we call that a Mesh. Combination of a Geometry (The shape) and a Material (How it looks).
const geometry = new THREE.BoxGeometry(1, 1, 1); // Vertices and triangles
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Color, reaction to lights
const mesh = new THREE.Mesh(geometry, material); // this is the cube

scene.add(mesh); // After we create what we want to show, we need to add it to the scene.

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera: To have a point of view (POV). Its not visible. Can have multiple and switch between them. Different types.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // Parameters: FOV (Field of view, maybe the best value will be 45 to 55 (in degrees)) and the Aspect Ratio( The width divided by the height of the render.)
camera.position.z = 3; // We need to move the camera to be able to see the cube with it.

scene.add(camera);

// Renderer: This render the scene from the camera POV
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height); // This will set the size to the canvas

renderer.render(scene, camera); // At this point, we rendered the cube and the camera at the same point of the world, the center. So we wont see nothing.
