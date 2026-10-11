// - Loads a `.glb` model (GLTF format)
// - Adds basic lighting
// - Applies environment reflections for realism
// - Wraps the model in a floating animation
// - Optionally tweaks the material (like setting a white color on a specific mesh)
// - Disables zoom using OrbitControls

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

interface TechStackIconCardExperienceProps {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}

const TechIconCardExperience = ({
  name,
  modelPath,
  scale,
  rotation,
}: TechStackIconCardExperienceProps) => {
  const scene = useGLTF(modelPath);

  useEffect(() => {
    if (name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [name, scene]);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment files={"/hdr/potsdamer_platz_1k.hdr"} />
      {/* 
        The Float component from @react-three/drei is used to 
        create a simple animation of the model floating in space.
        The rotationIntensity and floatIntensity props control the
        speed of the rotation and float animations respectively.

        The group component is used to scale and rotate the model.
        The rotation is set to the value of the model.rotation property,
        which is an array of three values representing the rotation in
        degrees around the x, y and z axes respectively.

        The primitive component is used to render the 3D model.
        The object prop is set to the scene object returned by the
        useGLTF hook, which is an instance of THREE.Group. The
        THREE.Group object contains all the objects (meshes, lights, etc)
        that make up the 3D model.
      */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={scale} rotation={rotation as [number, number, number]}>
          <primitive object={scene.scene} />
        </group>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
