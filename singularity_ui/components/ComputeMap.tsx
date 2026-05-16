'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const NeuralCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#00f2ff"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const DataStreams = () => {
  const lines = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (lines.current) {
      lines.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={lines}>
      {[...Array(20)].map((_, i) => (
        <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <torusGeometry args={[2 + Math.random() * 2, 0.01, 16, 100]} />
          <meshBasicMaterial color="#7000ff" transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
};

export const ComputeMap = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <NeuralCore />
        <DataStreams />
        
        <gridHelper args={[20, 20, '#1a1a1a', '#0a0a0a']} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 p-4 glass-panel border-l-4 border-[var(--primary)] animate-pulse-slow">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-1">Neural Core Active</h3>
        <p className="text-[10px] text-gray-400">Synchronizing exascale tensor execution...</p>
      </div>
    </div>
  );
};
