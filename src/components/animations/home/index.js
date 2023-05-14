import * as THREE from "three";
import "./style.css";
import nx from "../../../images/envMaps/0/nx.jpg";
import ny from "../../../images/envMaps/0/ny.jpg";
import nz from "../../../images/envMaps/0/nz.jpg";
import px from "../../../images/envMaps/0/px.jpg";
import py from "../../../images/envMaps/0/py.jpg";
import pz from "../../../images/envMaps/0/pz.jpg";
import * as dat from "dat.gui";

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
window.addEventListener("resize", () => {
  //Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  //Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Canvas
const canvasHome = document.createElement("canvas");

//Scene
const scene = new THREE.Scene();

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 0.9);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Textures
 */

//Environment map
const cubeTextureLoader = new THREE.CubeTextureLoader();
const environmentMap = cubeTextureLoader.load([px, nx, py, ny, pz, nz]);

/**
 * Objects
 */
//coordinates
/*
const coordinates = {
  intro: { x, y, z: -1 },
  about: { x, y, z },
  projects: { x, y, z },
  contact: { x, y, z },
};
*/
//cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
scene.add(cube);
cube.position.x = 7;
cube.position.z = 1;

//Sphere
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  wireframe: true,
});
const sphereGeometry = new THREE.SphereGeometry();
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.x = -7;
sphere.position.z = 1;

//TorusKnot
const torusKnotMaterial = new THREE.MeshStandardMaterial();
torusKnotMaterial.metalness = 1;
torusKnotMaterial.roughness = 0.1;
torusKnotMaterial.envMap = environmentMap;
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.8, 0.3, 300, 40, 2, 3),
  torusKnotMaterial
);
torusKnot.position.z = -1;
scene.add(torusKnot);

//Torus
const torusGeometry = new THREE.TorusGeometry();
const torusMaterial = new THREE.MeshNormalMaterial();
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);
torus.position.y = -7;

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.5,
  100
);
camera.position.z = 3;
camera.position.y = 0.5;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvasHome,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animation
 */

const clock = new THREE.Clock();

function newFrame() {
  window.requestAnimationFrame(newFrame);
  cube.rotation.y = clock.getElapsedTime();
  torusKnot.rotation.y = clock.getElapsedTime();
  torus.rotation.y = clock.getElapsedTime();
  renderer.render(scene, camera);
}
newFrame();

function introToAbout() {
  window.requestAnimationFrame(introToAbout);
}

const Animation = {
  canvas: canvasHome,
  location: "intro",
  intro() {},
  about() {
    if (this.location == "intro") {
    }
  },
  contact() {},
  projects() {},
};

export { Animation };
