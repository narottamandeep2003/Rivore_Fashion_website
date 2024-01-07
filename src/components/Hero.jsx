import React from "react";
import { useGLTF } from "@react-three/drei";

export function Hero(props) {
  const { nodes, materials } = useGLTF("/hero.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.hood3}
        position={[0.096, 3.358, -0.108]}
        rotation={[-1.617, 0, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.ties2}
        position={[0.103, 4.409, 0.557]}
        rotation={[-1.617, 0, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.pocket2blinn1SG}
        position={[0.054, 0.991, -0.038]}
        rotation={[-1.617, 0, 0]}
        scale={0.06}
      />
    </group>
  );
}

useGLTF.preload("/hero.glb");