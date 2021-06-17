//importing entire three.js core lib
import * as THREE from "three";

//Initialize a new scene for our RPG Battle
const battle = new THREE.Scene();

//Initialize a camera for our viewport
const camera = new THREE.PerspectiveCamera(
  75, //FOV in degrees
  window.innerWidth / window.innerHeight, //Aspect Ratio
  0.1, //Near clipping plane
  1000 //Far clipping plane
);

//initialize a renderer to render our scene with the camera
const renderer = new THREE.WebGLRenderer(); //WebGL is goto renderer
renderer.setSize(window.innerWidth, window.innerHeight); //sets dimmensions for render
document.body.appendChild(rederer.domElement); //add renderer to HTML
