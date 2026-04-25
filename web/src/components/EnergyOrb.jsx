import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Dynamic node for the Dashboard
const DynamicNode = ({ score, color, position, baseScale }) => {
  const meshRef = useRef();
  
  // Dashboard adjustments:
  // If score is low, wobble is much higher
  const distortion = score ? Math.max(0.1, 1 - (score / 100)) : 0.4;
  const speed = score ? Math.max(1, 8 - (score / 15)) : 2; // Faster erratic speed
  const scale = score ? baseScale * (0.8 + (score / 500)) : baseScale;

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Tripled wobble multiplier for more prominent erratic vibration
      const wobble = score ? (100 - score) * 0.015 : 0; 
      
      meshRef.current.position.x = position[0] + Math.sin(time * speed) * wobble;
      meshRef.current.position.y = position[1] + Math.cos(time * speed) * wobble;
      
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distortion}
        speed={speed}
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

// Interactive plunging node for the Home Screen
const InteractiveNode = ({ mousePos }) => {
  const meshRef = useRef();
  const targetPos = useRef(new THREE.Vector3(0, 0, 0));
  
  // Load the original nature texture
  const texture = useLoader(THREE.TextureLoader, '/nature_texture.png');

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Base floating motion
      const floatX = Math.sin(time * 0.5) * 1.5;
      const floatY = Math.cos(time * 0.4) * 1.0;
      const floatZ = Math.sin(time * 0.3) * 0.5;
      
      if (mousePos) {
        // Map mouse coordinates to 3D space
        // Increased multipliers slightly to reach further edges of screen
        targetPos.current.set(mousePos.x * 6, mousePos.y * 4, 0);
      } else {
        targetPos.current.set(floatX, floatY, floatZ);
      }

      // Smoothly interpolate position - increased factor from 0.05 to 0.15 for faster response
      meshRef.current.position.lerp(targetPos.current, 0.15);

      // Always rotate
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 64, 64]} 
      scale={2.8} 
    >
      <MeshDistortMaterial
        map={texture}
        color="#ffffff" // White to let texture shine
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.0} 
        metalness={0.8} // High metalness for city reflections
        transmission={0.6} // Glassy transmission
        transparent={true}
        opacity={1.0}
        emissive="#b3e5fc"
        emissiveIntensity={0.1}
        clearcoat={1.0}
        clearcoatRoughness={0.0}
      />
    </Sphere>
  );
};

const EnergyOrb = ({ scores, isInteractive = false, mousePos = null }) => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '200px' }}>
      <Canvas camera={{ position: [0, scores ? 1.5 : 0, scores ? 14 : 7] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#fff9c4" />
        
        <Environment preset="city" />

        {isInteractive ? (
          <InteractiveNode mousePos={mousePos} />
        ) : !scores ? (
          <DynamicNode score={80} color="#81c784" position={[0, 0, 0]} baseScale={1.5} />
        ) : (
          <group>
            {/* Dashboard nodes: Larger scale and spread within a wider camera view */}
            <DynamicNode score={scores.physical} color="#ffd54f" position={[-5.5, -2.0, 0]} baseScale={5.0} />
            <DynamicNode score={scores.mental} color="#4fc3f7" position={[5.5, -2.0, 0]} baseScale={5.0} />
            <DynamicNode score={scores.restorative} color="#81c784" position={[0, 4.0, 0]} baseScale={5.0} />
          </group>
        )}
      </Canvas>
    </div>
  );
};

export default EnergyOrb;
