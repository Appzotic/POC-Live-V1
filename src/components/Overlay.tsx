import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#ff6b6b" 
        transparent 
        opacity={0.8}
        depthWrite={false}
      />
    </mesh>
  );
};

const FloatingText = () => {
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 2, 0]}
      fontSize={1}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
    >
      Live Stream Overlay
    </Text>
  );
};

const Overlay = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedBox />
        <FloatingText />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Overlay; 