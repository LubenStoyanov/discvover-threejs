import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export const setupModel = (data: GLTF) => data.scene.children[0];
