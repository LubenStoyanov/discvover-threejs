import { PerspectiveCamera } from "three";

interface TickableCamera extends PerspectiveCamera {
  tick(delta: number, randomNumber: number): void;
}

export default function createCamera(): TickableCamera {
  const camera: TickableCamera = new PerspectiveCamera(
    35,
    1,
    0.1,
    100
  ) as TickableCamera;
  camera.position.set(-1.5, 1.5, 6.5);

  return camera;
}
