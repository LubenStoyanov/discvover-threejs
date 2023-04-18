import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface TickableOrbitControls extends OrbitControls {
  tick(delta: number): void;
}

export default function createControls(
  camera: THREE.PerspectiveCamera,
  canvas: HTMLCanvasElement
): TickableOrbitControls {
  const controls = new OrbitControls(camera, canvas) as TickableOrbitControls;
  controls.enableDamping = true;
  controls.tick = () => controls.update();
  return controls;
}
