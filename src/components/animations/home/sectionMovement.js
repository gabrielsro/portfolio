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
  };
  function movement() {
    let id = window.requestAnimationFrame(movement);
    //x
    if (camera.position.x > obj.x && !obj.xReady) {
      camera.position.x -= obj.clock.getDelta() * 3.8;
      if (camera.position.x <= obj.x) {
        obj.xReady = true;
      }
    }
    if (camera.position.x < obj.x && !obj.xReady) {
      camera.position.x += obj.clock.getDelta() * 3.8;
      if (camera.position.x >= obj.x) {
        obj.xReady = true;
      }
    }
    if (camera.position.x == obj.x) {
      obj.xReady = true;
    }

    //y
    if (camera.position.y > obj.y && !obj.yReady) {
      camera.position.y -= obj.clock.getDelta() * 3.8;
      if (camera.position.y <= obj.y) {
        obj.yReady = true;
      }
    }
    if (camera.position.y < obj.y && !obj.yReady) {
      camera.position.y += obj.clock.getDelta() * 3.8;
      if (camera.position.y >= obj.y) {
        obj.yReady = true;
      }
    }
    if (camera.position.y == obj.y) {
      obj.yReady = true;
    }

    //z

    if (obj.xReady && obj.yReady) {
      window.cancelAnimationFrame(id);
      obj.clock.stop();
    }
  }
  movement();
}

export { sectionMovement };
