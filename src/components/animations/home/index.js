import * as THREE from "three";
import "./style.css";
import nx from "../../../images/envMaps/0/nx.jpg";
import ny from "../../../images/envMaps/0/ny.jpg";
import nz from "../../../images/envMaps/0/nz.jpg";
import px from "../../../images/envMaps/0/px.jpg";
import py from "../../../images/envMaps/0/py.jpg";
import pz from "../../../images/envMaps/0/pz.jpg";
import { sectionMovement } from "./sectionMovement";

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
const coordinates = {
  intro: { x: 0, y: 0, z: -1 },
  about: { x: -14, y: 0, z: -1 },
  projects: { x: 0, y: -7, z: 0 },
  contact: { x: 14, y: 0, z: 1 },
};

//cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
scene.add(cube);
cube.position.x = coordinates.contact.x;
cube.position.z = coordinates.contact.z;

//Sphere
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  wireframe: true,
});
const sphereGeometry = new THREE.SphereGeometry();
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.x = coordinates.about.x;
sphere.position.z = coordinates.about.z;
sphere.position.y = coordinates.about.y;

//TorusKnot
const torusKnotMaterial = new THREE.MeshStandardMaterial();
torusKnotMaterial.metalness = 1;
torusKnotMaterial.roughness = 0.1;
torusKnotMaterial.envMap = environmentMap;
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.8, 0.3, 300, 40, 2, 3),
  torusKnotMaterial
);
torusKnot.position.z = coordinates.intro.z;
torusKnot.position.y = coordinates.intro.y;
torusKnot.position.x = coordinates.intro.x;
scene.add(torusKnot);

//Torus
const torusGeometry = new THREE.TorusGeometry();
const torusMaterial = new THREE.MeshNormalMaterial();
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);
torus.position.y = coordinates.projects.y;
torus.position.x = coordinates.projects.x;
torus.position.z = coordinates.projects.z;

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.5,
  100
);
camera.position.z = 5;
camera.position.y = 0;
camera.position.x = 0;
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
 * Animations
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

let page = {
  location: "intro",
};

const Animation = {
  canvas: canvasHome,
  intro() {
    if (page.location !== "intro") {
      sectionMovement(camera, coordinates, "intro");
      page.location = "intro";
    }
  },
  about() {
    if (page.location !== "about") {
      sectionMovement(camera, coordinates, "about");
      page.location = "about";
    }
  },
  contact() {
    if (page.location !== "contact") {
      sectionMovement(camera, coordinates, "contact");
      page.location = "contact";
    }
  },
  projects() {
    if (page.location !== "projects") {
      sectionMovement(camera, coordinates, "projects");
      page.location = "projects";
    }
  },
};

export { Animation };
