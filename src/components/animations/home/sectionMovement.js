import { Clock } from "three";

function sectionMovement(camera, coordinates, destination) {
  const obj = {
    xReady: false,
    yReady: false,
    xReady: false,
    x: coordinates[destination].x,
    y: coordinates[destination].y,
    z: coordinates[destination].z,
    camera: camera,
    clock: new Clock(),
    speed: 7.8,
    //slope: (y - camera.position.y) / (x - camera.position.x),
  };
  function movement() {
    let id = window.requestAnimationFrame(movement);
    const delta = obj.clock.getDelta();
    //x
    if (camera.position.x == obj.x) {
      obj.xReady = true;
    }
    if (camera.position.x > obj.x && !obj.xReady) {
      camera.position.x -= delta * obj.speed;
      console.log(`subtracting to x: ${camera.position.x}`);
      if (camera.position.x <= obj.x) {
        obj.xReady = true;
      }
    }
    if (camera.position.x < obj.x && !obj.xReady) {
      camera.position.x += delta * obj.speed;
      console.log(`adding to x: ${camera.position.x}`);
      if (camera.position.x >= obj.x) {
        obj.xReady = true;
      }
    }

    //y
    if (camera.position.y == obj.y) {
      obj.yReady = true;
    }
    if (camera.position.y > obj.y && !obj.yReady) {
      camera.position.y -= delta * obj.speed;
      console.log(`subtracting to y: ${camera.position.y}`);
      if (camera.position.y <= obj.y) {
        obj.yReady = true;
      }
    }
    if (camera.position.y < obj.y && !obj.yReady) {
      camera.position.y += delta * obj.speed;
      console.log(`adding to y: ${camera.position.y}`);
      if (camera.position.y >= obj.y) {
        obj.yReady = true;
      }
    }
  }
  movement();
}

export { sectionMovement };
