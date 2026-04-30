"use client";

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate DNA Helix Particles
function DNA({ mouse }) {
  const ref = useRef();
  
  // Calculate particle positions
  const [positions, colors] = useMemo(() => {
    const numParticles = 2500; // Increased for density
    const radius = 1.4;        // Slightly wider
    const height = 22;         // Taller to span full height
    const turns = 8;           // More turns to match height
    
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

    // Add some random scatter / noise (reduced slightly for tighter look)
    for (let i = 0; i < positions.length; i++) {
      positions[i] += (Math.random() - 0.5) * 0.08;
    }

    return [positions, colors];
  }, []);

  // Animation Loop
  useFrame((state) => {
    if (!ref.current) return;
    
    // Slow continuous rotation
    ref.current.rotation.y += 0.003;
    
    // Subtle float effect
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;

    // Mouse interaction using global mouse state
    const targetRotationX = (mouse.y * Math.PI) / 8;
    const targetRotationZ = -(mouse.x * Math.PI) / 8;
    
    // Smooth interpolation for mouse movement
    ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.z += (targetRotationZ - ref.current.rotation.z) * 0.05;
  });

  return (
    // Offset position to the right side of the screen
    <group ref={ref} position={[3.5, 0, 0]} rotation={[0.2, 0, 0]}>
      <Points positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Connecting Lines between strands */}
      <Connections positions={positions} numParticles={2500} />
    </group>
  );
}

// Draw the rungs of the DNA ladder
function Connections({ positions, numParticles }) {
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    // Decreased step for tighter, denser connections
    const step = 8;
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
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates to -1 to +1
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ pointerEvents: 'none' }} // Crucial: lets clicks pass through to buttons
        dpr={[1, 2]} 
      >
        <ambientLight intensity={0.5} />
        <DNA mouse={mouse} />
      </Canvas>
    </div>
  );
}
