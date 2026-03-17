import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();

// Create a mesh
const geometry = new THREE.BoxGeometry(1,1,1); // Simple Geometry
const material = new THREE.MeshBasicMaterial({color: "grey"}); // Simple Shader
const mesh = new THREE.Mesh(geometry, material); // Mesh it is compose of Geometry + Shader

scene.add(mesh); // Adding to the scene

// Create camera 
const aspect = {
  width: window.innerWidth, // Get the entire width of the screen
  height: window.innerHeight, // Get Get the entire height of the screen
}
const camera = new THREE.PerspectiveCamera(45, aspect.width/aspect.height); // By default near is 1 and far is 2000
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// Renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(aspect.width, aspect.height); // Set the render size to browser size
document.body.appendChild(renderer.domElement); // append render to browser

renderer.render(scene, camera);