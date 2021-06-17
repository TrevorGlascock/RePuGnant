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
document.body.appendChild(renderer.domElement); //add renderer to HTML

//Create a cube to render
const geometry = new THREE.BoxGeometry(); //Geometry set to box
const material = new THREE.MeshBasicMaterial({ color: 0x381648 }); //Mesh Material set to basic color Russian Violet
const hyperionCube = new THREE.Mesh(geometry, material); //Create a mesh that applies the mesh material to the geometry
battle.add(hyperionCube); //add our new mesh obj to the scene

camera.position.z = 3; //move the camera out

//Render(Animate) Loop
function animate() {
  requestAnimationFrame(animate);
  //rotate the cube
  hyperionCube.rotation.x += 0.01;
  hyperionCube.rotation.y += 0.01;

  renderer.render(battle, camera);
}

function startGame() {
  animate();
}
