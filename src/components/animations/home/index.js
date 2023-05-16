import * as THREE from "three";
import "./style.css";
import nx from "../../../images/envMaps/0/nx.jpg";
import ny from "../../../images/envMaps/0/ny.jpg";
import nz from "../../../images/envMaps/0/nz.jpg";
import px from "../../../images/envMaps/0/px.jpg";
import py from "../../../images/envMaps/0/py.jpg";
import pz from "../../../images/envMaps/0/pz.jpg";
import { sectionMovement } from "./sectionMovement";
import { domCleaner } from "../../handlerFunctions/domCleaner";
import { introPage } from "../../pages/introPage/introPage";
import { projectsPage } from "../../pages/projectsPage/projectsPage";
import { aboutPage } from "../../pages/aboutPage/aboutPage";
import { contactPage } from "../../pages/contactPage/contactPage";

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
//Pages coordinates
const coordinates = {
  intro: { x: 0, y: 0, z: 0 },
  about: { x: -16, y: 0, z: 0 },
  projects: { x: 0, y: -16, z: 0 },
  contact: { x: 16, y: 0, z: 0 },
};

//Projects coordinates
const projectsCoordinates = {
  edp: { x: 7, y: -16, z: 0 },
  cfst: { x: 7, y: -16, z: 0 },
  wapp: { x: 7, y: -16, z: 0 },
};

//wapp shape
const wappMaterial = new THREE.MeshStandardMaterial();
wappMaterial.metalness = 1;
wappMaterial.roughness = 0;
wappMaterial.envMap = environmentMap;
const wappGeometry = new THREE.IcosahedronGeometry(0.3, 0);
const wapp = new THREE.Mesh(wappGeometry, wappMaterial);
wapp.position.x = projectsCoordinates.wapp.x;
wapp.position.y = projectsCoordinates.wapp.y;
wapp.position.z = projectsCoordinates.wapp.z;
scene.add(wapp);

//edp shape
const edpMaterial = new THREE.MeshStandardMaterial();
edpMaterial.metalness = 1;
edpMaterial.roughness = 0;
edpMaterial.envMap = environmentMap;
const edpGeometry = new THREE.OctahedronGeometry(0.3, 0);
const edp = new THREE.Mesh(edpGeometry, edpMaterial);
edp.position.x = projectsCoordinates.edp.x;
edp.position.y = projectsCoordinates.edp.y;
edp.position.z = projectsCoordinates.edp.z;
scene.add(edp);

//cfst shape
const cfstMaterial = new THREE.MeshStandardMaterial();
cfstMaterial.metalness = 1;
cfstMaterial.roughness = 0.1;
cfstMaterial.envMap = environmentMap;
const cfstGeometry = new THREE.IcosahedronGeometry(0.25, 2);
const cfst = new THREE.Mesh(cfstGeometry, cfstMaterial);
cfst.position.x = projectsCoordinates.cfst.x;
cfst.position.y = projectsCoordinates.cfst.y;
cfst.position.z = projectsCoordinates.cfst.z;
scene.add(cfst);

//cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: "red", wireframe: true })
);
scene.add(cube);
cube.position.x = coordinates.about.x;
cube.position.z = coordinates.about.z;

//Sphere
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: "blue",
  wireframe: true,
});
const sphereGeometry = new THREE.SphereGeometry(2);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.x = coordinates.contact.x;
sphere.position.z = coordinates.contact.z;
sphere.position.y = coordinates.contact.y;
sphere.rotateY = Math.PI / 6;

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

coordinates.intro.shape = torusKnot;
coordinates.about.shape = cube;
coordinates.projects.shape = torus;
coordinates.contact.shape = sphere;

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.5,
  100
);
camera.position.z = 8;
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

//y-axis-rotation
function newFrame() {
  window.requestAnimationFrame(newFrame);
  cube.rotation.y = clock.getElapsedTime();
  sphere.rotation.y = clock.getElapsedTime() * 0.3;
  torusKnot.rotation.y = clock.getElapsedTime();
  torus.rotation.y = clock.getElapsedTime();
  wapp.rotation.y = clock.getElapsedTime();
  edp.rotation.y = clock.getElapsedTime();
  cfst.rotation.y = clock.getElapsedTime();
  renderer.render(scene, camera);
}
newFrame();

//Projects rotation
projectsPage.animate(wapp, edp, cfst, projectsCoordinates);

let page = {
  location: "intro",
};

const Animation = {
  canvas: canvasHome,
  intro() {
    if (page.location !== "intro") {
      sectionMovement(camera, coordinates, "intro", page.location, introPage);
      page.location = "intro";
      domCleaner("main");
    }
  },
  about() {
    if (page.location !== "about") {
      sectionMovement(camera, coordinates, "about", page.location, aboutPage);
      page.location = "about";
      domCleaner("main");
    }
  },
  contact() {
    if (page.location !== "contact") {
      sectionMovement(
        camera,
        coordinates,
        "contact",
        page.location,
        contactPage
      );
      page.location = "contact";
      domCleaner("main");
    }
  },
  projects() {
    if (page.location !== "projects") {
      sectionMovement(
        camera,
        coordinates,
        "projects",
        page.location,
        projectsPage
      );
      page.location = "projects";
      domCleaner("main");
    }
  },
};

export { Animation };
