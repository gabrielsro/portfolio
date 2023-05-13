import * as THREE from "three";

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

//Canvas
const canvasHome = document.createElement("canvas");

//Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
//cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(cube);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.5,
  10
);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvasHome,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

export { canvasHome };
