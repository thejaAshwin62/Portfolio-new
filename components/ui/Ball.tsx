"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { StaticImageData } from "next/image";
import CanvasLoader from "./Loader";
import * as THREE from "three";

interface BallCanvasProps {
  icon: StaticImageData;
}

const Ball = ({ icon }: BallCanvasProps) => {
  // Create a texture loader and set its crossOrigin
  const textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = "anonymous";

  const [decal] = useTexture([icon.src], (loader) => {
    // Set crossOrigin on the loader
    if (loader instanceof THREE.TextureLoader) {
      loader.crossOrigin = "anonymous";
    }
  });

  useEffect(() => {
    if (decal) {
      decal.anisotropy = 16;
    }
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: BallCanvasProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
