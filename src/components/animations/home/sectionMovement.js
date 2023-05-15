import { Clock } from "three";

function sectionMovement(camera, coordinates, destination, origin) {
  const obj = {
    xReady: false,
    yReady: false,
    xReady: false,
    x: coordinates[destination].x,
    y: coordinates[destination].y,
    z: coordinates[destination].z,
    camera: camera,
    clock: new Clock(),
    speed: 100,
    spin: false,
    coordinates: coordinates,
  };
  function getRadius() {
    let radius = 0;
    let coordinatesArray = Object.entries(coordinates);
    coordinatesArray.forEach((c) => {
      if (Math.abs(c[1].x) > radius) {
        obj.diameter = Math.abs(c[1].x);
      }
    });
    if (
      Math.abs(Math.abs(camera.position.x) - Math.abs(obj.x)) <= 1 &&
      Math.abs(obj.y) < 1 &&
      destination !== "intro"
    ) {
      obj.spin = true;
      obj.shapePull = coordinates[`${origin}`].shape;
      obj.shapePush = coordinates[`${destination}`].shape;
      if (obj.shapePull.position.x < 0) {
        obj.pullingFrom = "left";
      }
      if (obj.shapePull.position.x > 0) {
        obj.pullingFrom = "right";
      }
    }
  }

  getRadius();

  function movement() {
    let id = window.requestAnimationFrame(movement);
    const delta = obj.clock.getDelta();
    /**
     * Lineal animation
     */
    if (!obj.spin) {
      //x
      if (camera.position.x == obj.x) {
        obj.xReady = true;
      }
      if (camera.position.x > obj.x && !obj.xReady) {
        camera.position.x -= delta * obj.speed;
        if (camera.position.x <= obj.x) {
          obj.xReady = true;
        }
      }
      if (camera.position.x < obj.x && !obj.xReady) {
        camera.position.x += delta * obj.speed;
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
        if (camera.position.y <= obj.y) {
          obj.yReady = true;
        }
      }
      if (camera.position.y < obj.y && !obj.yReady) {
        camera.position.y += delta * obj.speed;
        if (camera.position.y >= obj.y) {
          obj.yReady = true;
        }
      }
      if (obj.xReady && obj.yReady) {
        window.cancelAnimationFrame(id);
        if (camera.position.x > 0) {
          camera.position.x = Math.floor(camera.position.x);
        }
        if (camera.position.x < 0) {
          camera.position.x = Math.ceil(camera.position.x);
        }
        if (camera.position.y > 0) {
          camera.position.y = Math.floor(camera.position.y);
        }
        if (camera.position.y < 0) {
          camera.position.y = Math.ceil(camera.position.y);
        }
      }
    }
    /**
     * Spinning animation
     */
    if (obj.spin) {
      const elapsedTime = obj.clock.getElapsedTime();
      if (obj.pullingFrom == "right") {
        if (elapsedTime >= 1) {
          obj.pullingFrom = "stop";
          coordinates[`${origin}`].x = obj.shapePull.position.x;
          coordinates[`${destination}`].x = obj.shapePush.position.x;
          window.cancelAnimationFrame(id);
        }
        obj.shapePull.position.x =
          Math.cos(elapsedTime * Math.PI) * obj.diameter;
        obj.shapePull.position.z =
          Math.sin(elapsedTime * Math.PI) * obj.diameter;
        obj.shapePush.position.x =
          Math.cos((1 - elapsedTime) * Math.PI) * obj.diameter;
        obj.shapePush.position.z =
          Math.sin((1 + elapsedTime) * Math.PI) * obj.diameter;
      }
      if (obj.pullingFrom == "left") {
        if (elapsedTime >= 1) {
          obj.pullingFrom = "stop";
          coordinates[`${origin}`].x = obj.shapePull.position.x;
          coordinates[`${destination}`].x = obj.shapePush.position.x;
          window.cancelAnimationFrame(id);
        }
        obj.shapePull.position.x =
          Math.cos(Math.PI * (elapsedTime - 1)) * obj.diameter;
        obj.shapePull.position.z =
          Math.sin(Math.PI * elapsedTime) * obj.diameter;
        obj.shapePush.position.x =
          Math.cos(Math.PI * elapsedTime) * obj.diameter;
        obj.shapePush.position.z =
          Math.sin(-Math.PI * elapsedTime) * obj.diameter;
      }
    }
  }
  movement();
}

export { sectionMovement };
