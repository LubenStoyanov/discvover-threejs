import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
} from "three";

interface TickableLight extends DirectionalLight {
  tick(delta: number): void;
}

export default function createLights(): {
  ambientLight: HemisphereLight;
  mainLight: TickableLight;
} {
  const ambientLight = new HemisphereLight("white", "darkslategrey", 5);
  const mainLight: TickableLight = new DirectionalLight(
    "white",
    4
  ) as TickableLight;
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}
