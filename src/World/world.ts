import loadBirds from "./components/birds/birds";
import createCamera from "./components/camera";
import createRenderer from "./systems/renderer";
import createControls from "./systems/controls";
import createLights from "./components/lights";
import createScene from "./components/scene";
// import createTrain from "./components/Train/Train";
import createResizer from "./systems/Resizer";
import { Loop } from "./systems/Loop";
// import { createAxesHelper, createGridHelper } from "./utils/helpers";

export default function createWorld(container: HTMLDivElement) {
  const camera = createCamera();
  const renderer = createRenderer();
  const scene = createScene();
  const controls = createControls(camera, renderer.domElement);
  const ambientLight = createLights().ambientLight;
  const mainLight = createLights().mainLight;
  // const train = createTrain();
  const loop = new Loop(camera, scene, renderer);

  // scene.add(createAxesHelper(), createGridHelper());
  scene.add(ambientLight, mainLight);
  createResizer(container, camera, renderer);
  loop.updatables.push(controls);

  const init = async () => {
    const { parrot, flamingo, stork } = await loadBirds();
    controls.target.copy(parrot.position);
    loop.updatables.push(parrot, flamingo, stork);
    scene.add(parrot, flamingo, stork);
  };

  const appendRendererToContainer = () => container.append(renderer.domElement);

  const removeRendererFromContainer = () =>
    container.removeChild(renderer.domElement);

  const render = () => renderer.render(scene, camera);

  const start = () => loop.start();

  const stop = () => loop.stop();

  return {
    appendRendererToContainer,
    removeRendererFromContainer,
    render,
    start,
    stop,
    init,
  };
}
