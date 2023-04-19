import { AnimationMixer, Object3D } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface TickableModel extends Object3D {
  tick(delta: number): void;
}

export const setupModel = (data: GLTF) => {
  const model = data.scene.children[0] as TickableModel;
  const clip = data.animations[0];
  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();
  model.tick = (delta: number) => mixer.update(delta);

  return model;
};
