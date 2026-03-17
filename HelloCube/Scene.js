import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();

// Create Group 
const group = new THREE.Group();

// Create a mesh
const geometry = new THREE.BoxGeometry(1,1,1); // Simple Geometry
const material = new THREE.MeshBasicMaterial({color: "grey"}); // Simple Shader

const mesh = new THREE.Mesh(geometry, material); // Mesh it is compose of Geometry + Shader
mesh.scale.y = 3;
// mesh.rotation.z = 45;
// mesh.rotation.y = 24;

// Create second mesh
const geometryT = new THREE.BoxGeometry(1,1,1); // Simple Geometry
const materialT = new THREE.MeshBasicMaterial({color: "red"}); // Simple Shader

const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.x = 2;

// scene.add(mesh, meshT); // Adding to the scene

group.add(mesh, meshT);
group.position.x = 2;
scene.add(group);

// Create Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);


// Create camera 
const aspect = {
  width: window.innerWidth, // Get the entire width of the screen
  height: window.innerHeight, // Get Get the entire height of the screen
}
const camera = new THREE.PerspectiveCamera(50, aspect.width/aspect.height); // By default near is 1 and far is 2000
camera.position.z = 5;
camera.position.x = 1;
scene.add(camera);

// Renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(aspect.width, aspect.height); // Set the render size to browser size

document.body.appendChild(renderer.domElement); // append render to browser

renderer.render(scene, camera);