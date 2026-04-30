"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate DNA Helix Particles
function DNA() {
  const ref = useRef();
  
  // Calculate particle positions
  const [positions, colors] = useMemo(() => {
    const numParticles = 800; // Number of particles per strand
    const radius = 1.2;       // Radius of the helix
    const height = 10;        // Total height of the helix
    const turns = 4;          // Number of turns
    
    const positions = new Float32Array(numParticles * 2 * 3); // 2 strands, 3 coords (x,y,z)
    const colors = new Float32Array(numParticles * 2 * 3);

    const color1 = new THREE.Color('#10B981'); // Accent Green
    const color2 = new THREE.Color('#3B82F6'); // Accent Blue

    for (let i = 0; i < numParticles; i++) {
      const t = i / numParticles;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      // Strand 1
      let idx = i * 3;
      positions[idx] = Math.cos(angle) * radius;
      positions[idx + 1] = y;
      positions[idx + 2] = Math.sin(angle) * radius;
      
      colors[idx] = color1.r;
      colors[idx + 1] = color1.g;
      colors[idx + 2] = color1.b;

      // Strand 2 (Offset by PI)
      idx = (numParticles + i) * 3;
      positions[idx] = Math.cos(angle + Math.PI) * radius;
      positions[idx + 1] = y;
      positions[idx + 2] = Math.sin(angle + Math.PI) * radius;
      
      colors[idx] = color2.r;
      colors[idx + 1] = color2.g;
      colors[idx + 2] = color2.b;
    }

    // Add some random scatter / noise to make it look organic
    for (let i = 0; i < positions.length; i++) {
      positions[i] += (Math.random() - 0.5) * 0.15;
    }

    return [positions, colors];
  }, []);

  // Animation Loop
  useFrame((state) => {
    if (!ref.current) return;
    
    // Slow continuous rotation
    ref.current.rotation.y += 0.005;
    
    // Subtle float effect
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

    // Mouse interaction - slightly tilt the helix towards mouse
    const targetRotationX = (state.pointer.y * Math.PI) / 8;
    const targetRotationZ = -(state.pointer.x * Math.PI) / 8;
    
    // Smooth interpolation for mouse movement
    ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.z += (targetRotationZ - ref.current.rotation.z) * 0.05;
  });

  return (
    <group ref={ref} rotation={[0.2, 0, 0]}>
      <Points positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Connecting Lines between strands */}
      <Connections positions={positions} numParticles={800} />
    </group>
  );
}

// Draw the rungs of the DNA ladder
function Connections({ positions, numParticles }) {
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    // We will draw a line every 10 particles
    const step = 15;
    const linePositions = [];
    const lineColors = [];
    
    const color = new THREE.Color('#ffffff');
    
    for (let i = 0; i < numParticles; i += step) {
      const idx1 = i * 3;
      const idx2 = (numParticles + i) * 3;
      
      // Point A
      linePositions.push(positions[idx1], positions[idx1+1], positions[idx1+2]);
      lineColors.push(color.r, color.g, color.b);
      
      // Point B
      linePositions.push(positions[idx2], positions[idx2+1], positions[idx2+2]);
      lineColors.push(color.r, color.g, color.b);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    
    return geometry;
  }, [positions, numParticles]);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial vertexColors transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
}

export default function Hero3DElement() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0, zIndex: 0, pointerEvents: 'none' }}>
      {/* 
        We use pointerEvents: 'auto' on the Canvas itself so it captures mouse movement,
        but the wrapper is 'none' so it doesn't block the UI.
      */}
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ pointerEvents: 'auto' }}
        dpr={[1, 2]} // Support high-DPI displays for crisp rendering
      >
        <ambientLight intensity={0.5} />
        <DNA />
      </Canvas>
    </div>
  );
}
