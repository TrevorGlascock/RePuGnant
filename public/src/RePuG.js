//importing entire three.js core lib
import * as THREE from "three";

//Initialize a new scene for our RPG Battle
const battle = new THREE.Scene();

//Initialize a camera for our viewport
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//initialize a renderer to render our scene with the camera
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rederer.domElement);
