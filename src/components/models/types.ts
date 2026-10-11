import type { GLTF } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
export type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
};
