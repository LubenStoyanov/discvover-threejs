import { PerspectiveCamera, WebGLRenderer } from "three";

const setSize = (
  container: HTMLDivElement,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer
) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

export default function createResize(
  container: HTMLDivElement,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer
) {
  setSize(container, camera, renderer);
  window.addEventListener("resize", () => {
    setSize(container, camera, renderer);
    onResize();
  });

  const onResize = () => {};

  return { onResize };
}
