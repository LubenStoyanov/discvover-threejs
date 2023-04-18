import { Group } from "three";
import createMeshes, { MeshesI } from "./meshes";

export default function createTrain() {
  const train = new Group();
  const meshes: MeshesI = createMeshes();

  Object.values(meshes).forEach((mesh) => train.add(mesh));

  return train;
}
