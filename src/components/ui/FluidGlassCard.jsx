/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect, Suspense, memo } from 'react';
import * as THREE from 'three';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import { useFBO, useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';

// Preload 3D model
useGLTF.preload('/assets/3d/bar.glb');

/**
 * 3D Floating Glass Slab Scene
 * Stretches the bar.glb model from React Bits to cover the entire card as a
 * floating liquid glass slab with real MeshTransmissionMaterial refraction.
 */
const GlassSlabMesh = memo(function GlassSlabMesh({ isInView = true, side = 'left' }) {
  const meshRef = useRef(null);
  const glowLightRef = useRef(null);
  const { nodes } = useGLTF('/assets/3d/bar.glb');
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geoDimsRef = useRef({ w: 1, h: 1 });

  useEffect(() => {
    const geo = nodes?.Cube?.geometry;
    if (geo) {
      geo.computeBoundingBox();
      const bb = geo.boundingBox;
      // Because rotation-x is Math.PI / 2, Z corresponds to vertical screen height
      const w = bb.max.x - bb.min.x || 1;
      const h = bb.max.z - bb.min.z || 1;
      geoDimsRef.current = { w, h };
    }
  }, [nodes]);

  // Position internal light conduit on the flank where the SVG path connects
  const conduitX = side === 'left' ? vp.width * 0.42 : -vp.width * 0.42;

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    // Subtle pointer reactivity for floating slab feel
    const targetX = (pointer.x * v.width) / 24;
    const targetY = (pointer.y * v.height) / 24;
    easing.damp3(meshRef.current.position, [targetX, targetY, 15], 0.2, delta);

    // Subtle floating rotation
    const rotZ = pointer.x * 0.03;
    const rotX = Math.PI / 2 + pointer.y * 0.02;
    easing.dampE(meshRef.current.rotation, [rotX, 0, rotZ], 0.2, delta);

    // Scale to cover the entire card dimensions seamlessly
    const { w, h } = geoDimsRef.current;
    const scaleX = (v.width * 0.98) / w;
    const scaleY = (v.height * 0.98) / h;
    meshRef.current.scale.set(scaleX, 0.18, scaleY);

    // Glow intensity animation
    if (glowLightRef.current) {
      const targetOpacity = isInView ? 0.85 : 0.25;
      easing.damp(glowLightRef.current.material, 'opacity', targetOpacity, 0.25, delta);
    }

    // Render refraction buffer
    gl.setClearColor(0x000000, 0);
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x000000, 0);
  });

  return (
    <>
      {/* Background portal containing the glowing light conduit that gets refracted */}
      {createPortal(
        <>
          {/* Subtle dark ambient plane */}
          <mesh position={[0, 0, -5]} scale={[vp.width * 2.5, vp.height * 2.5, 1]}>
            <planeGeometry />
            <meshBasicMaterial color="#0e0e12" toneMapped={false} />
          </mesh>

          {/* Glowing vertical conduit line on the edge where the path enters/exits */}
          <mesh ref={glowLightRef} position={[conduitX, 0, -1]}>
            <planeGeometry args={[0.2, vp.height * 2]} />
            <meshBasicMaterial
              color="#ff4f2b"
              transparent
              opacity={isInView ? 0.85 : 0.25}
              toneMapped={false}
            />
          </mesh>

          {/* Soft radiant ambient glow along the active flank */}
          <mesh position={[conduitX * 0.8, 0, -2]}>
            <planeGeometry args={[vp.width * 0.45, vp.height * 1.8]} />
            <meshBasicMaterial
              color="#ff4f2b"
              transparent
              opacity={isInView ? 0.15 : 0.04}
              toneMapped={false}
            />
          </mesh>
        </>,
        scene
      )}

      {/* Floating 3D liquid glass slab from bar.glb covering the full card */}
      {nodes?.Cube?.geometry && (
        <mesh
          ref={meshRef}
          rotation-x={Math.PI / 2}
          geometry={nodes.Cube.geometry}
        >
          <MeshTransmissionMaterial
            buffer={buffer.texture}
            transmission={0.97}
            roughness={0.04}
            thickness={8}
            ior={1.16}
            anisotropy={0.012}
            chromaticAberration={0.08}
            color="#ffffff"
            attenuationColor="#ff4f2b"
            attenuationDistance={0.5}
          />
        </mesh>
      )}
    </>
  );
});

/**
 * FluidGlassCard Component
 * Wraps timeline content in a floating liquid glass slab
 */
export default function FluidGlassCard({
  year,
  theme,
  era,
  body,
  side = 'left',
  isInView = false,
  className = '',
  style = {},
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLeft = side === 'left';

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(22,22,28,0.78) 0%, rgba(14,14,18,0.88) 100%)',
        border: '1px solid',
        borderColor: isInView ? 'rgba(255,79,43,0.38)' : 'rgba(255,255,255,0.08)',
        boxShadow: isInView
          ? '0 12px 36px -5px rgba(0,0,0,0.85), 0 0 24px -2px rgba(255,79,43,0.2)'
          : '0 8px 28px -5px rgba(0,0,0,0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        ...style,
      }}
    >
      {/* 3D WebGL Canvas rendering the Floating Liquid Glass Slab */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-85"
        style={{ zIndex: 1 }}
      >
        {mounted && (
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 20], fov: 15 }}
              gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
              style={{ width: '100%', height: '100%' }}
              dpr={[1, 1.5]}
            >
              <GlassSlabMesh isInView={isInView} side={side} />
            </Canvas>
          </Suspense>
        )}
      </div>

      {/* Subtle glass specular highlight along top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: isInView
            ? 'linear-gradient(90deg, transparent 0%, rgba(255,79,43,0.7) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
          zIndex: 2,
          transition: 'background 0.5s ease',
        }}
      />

      {/* High-legibility typography overlay */}
      <div
        className={`relative z-10 p-6 md:p-8 flex flex-col justify-between h-full ${
          isLeft ? 'pr-12' : 'pl-12'
        }`}
        style={{ pointerEvents: 'auto' }}
      >
        <div>
          {/* Header row: Theme tag + Year indicator */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: isInView ? '#ff4f2b' : '#727278',
                transition: 'color 0.4s ease',
              }}
            >
              {theme}
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: isInView ? '#ff4f2b' : '#525258',
                background: isInView ? 'rgba(255,79,43,0.12)' : 'rgba(255,255,255,0.03)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: `1px solid ${isInView ? 'rgba(255,79,43,0.35)' : 'rgba(255,255,255,0.07)'}`,
                transition: 'all 0.4s ease',
              }}
            >
              {year}
            </span>
          </div>

          {/* Era Title */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 2.2vw, 28px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: isInView ? '#ffffff' : '#a0a0a5',
              lineHeight: 1.15,
              marginBottom: '10px',
              transition: 'color 0.4s ease',
            }}
          >
            {era}
          </h3>

          {/* Body Description */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              lineHeight: 1.7,
              color: isInView ? '#c0c0c6' : '#6e6e75',
              transition: 'color 0.4s ease',
              margin: 0,
            }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
