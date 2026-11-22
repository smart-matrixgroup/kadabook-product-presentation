import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, RoundedBox, Float, useTexture, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/*
 * One persistent light-mode 3D world behind every slide.
 * Everything is generated locally (no HDR downloads) so the deck works offline on a projector laptop.
 * `slide` drives where the hero "app tile" sits and how the world is tinted.
 */

// soft pastel versions of the brand palette so shapes never fight the text
const BRAND = ['#93C5FD', '#BFDBFE', '#86EFAC', '#FDBA74', '#C4B5FD', '#FCD34D', '#67E8F9', '#F9A8D4'];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function AppTile({ slide }) {
  const g = useRef();
  const logo = useTexture('assets/kadabook-logo.png');
  logo.colorSpace = THREE.SRGBColorSpace;
  logo.anisotropy = 8;

  // hero slide: big + centred-right. Later slides: small, parked top-right, gently spinning.
  const target = useMemo(() => {
    if (slide === 0) return { x: 2.9, y: 0.05, z: 0, s: 1.5 };
    // other slides: tile flies off and away (the slide content owns the stage)
    return { x: 9, y: 5, z: -8, s: 0.001 };
  }, [slide]);

  useFrame((state, dt) => {
    const o = g.current;
    if (!o) return;
    const k = 1 - Math.pow(0.0025, dt);
    o.position.x = lerp(o.position.x, target.x, k);
    o.position.y = lerp(o.position.y, target.y, k);
    o.position.z = lerp(o.position.z, target.z, k);
    const s = lerp(o.scale.x, target.s, k);
    o.scale.setScalar(s);
    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;
    o.rotation.y = lerp(o.rotation.y, -0.42 + px * 0.35 + Math.sin(t * 0.5) * 0.08, k);
    o.rotation.x = lerp(o.rotation.x, 0.12 - py * 0.25 + Math.cos(t * 0.6) * 0.05, k);
  });

  return (
    <group ref={g} position={[2.6, 0.1, 0]}>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.6}>
        <RoundedBox args={[2.4, 2.4, 0.42]} radius={0.38} smoothness={8}>
          <meshPhysicalMaterial color="#ffffff" roughness={0.18} metalness={0.05} clearcoat={1} clearcoatRoughness={0.08} />
        </RoundedBox>
        {/* glowing blue rim */}
        <RoundedBox args={[2.52, 2.52, 0.3]} radius={0.42} smoothness={8} position={[0, 0, -0.08]}>
          <meshPhysicalMaterial color="#3B82F6" roughness={0.25} metalness={0.2} clearcoat={1} emissive="#1D4ED8" emissiveIntensity={0.25} />
        </RoundedBox>
        <mesh position={[0, 0, 0.215]}>
          <planeGeometry args={[1.95, 1.95]} />
          <meshStandardMaterial map={logo} transparent roughness={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function Coin({ position, scale = 1, speed = 1 }) {
  const m = useRef();
  useFrame((s) => {
    if (m.current) m.current.rotation.y = s.clock.elapsedTime * 0.8 * speed;
  });
  return (
    <Float speed={speed * 1.4} rotationIntensity={0.6} floatIntensity={1.4} position={position}>
      <group ref={m} scale={scale} rotation={[Math.PI / 2.4, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 0.12, 48]} />
          <meshPhysicalMaterial color="#FCD34D" metalness={0.35} roughness={0.25} clearcoat={1} emissive="#F59E0B" emissiveIntensity={0.25} />
        </mesh>
        <mesh position={[0, 0.065, 0]}>
          <cylinderGeometry args={[0.36, 0.36, 0.01, 48]} />
          <meshPhysicalMaterial color="#FBBF24" metalness={0.4} roughness={0.3} emissive="#D97706" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Blob({ position, color, size = 0.6, speed = 1, kind = 'sphere' }) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.8} position={position}>
      <mesh>
        {kind === 'sphere' && <sphereGeometry args={[size, 48, 48]} />}
        {kind === 'torus' && <torusGeometry args={[size, size * 0.34, 32, 64]} />}
        {kind === 'box' && <boxGeometry args={[size * 1.3, size * 1.3, size * 1.3]} />}
        {kind === 'capsule' && <capsuleGeometry args={[size * 0.45, size * 1.2, 12, 24]} />}
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0} clearcoat={1} clearcoatRoughness={0.15} transparent opacity={0.85} />
      </mesh>
    </Float>
  );
}

function World({ slide }) {
  const root = useRef();
  useFrame((state, dt) => {
    const k = 1 - Math.pow(0.02, dt);
    if (!root.current) return;
    // camera-like parallax: tilt the whole world to the pointer
    root.current.rotation.y = lerp(root.current.rotation.y, state.pointer.x * 0.05, k * 0.4);
    root.current.position.x = lerp(root.current.position.x, Math.sin(slide * 1.7) * 0.6, k * 0.3);
    root.current.rotation.x = lerp(root.current.rotation.x, -state.pointer.y * 0.05, k * 0.4);
  });

  const items = useMemo(() => {
    const rnd = (seed) => {
      const x = Math.sin(seed * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    const kinds = ['sphere', 'torus', 'box', 'capsule'];
    // keep shapes in a frame around the edges, far back: never behind the slide copy
    const spots = [
      [-12.8, 6, -9], [-6, 6.6, -11], [0, 6.6, -12], [6.5, 6.6, -11], [12.4, 5.4, -9],
      [14.6, 0.5, -10], [12.6, -5.4, -9], [-3.5, 7.4, -14], [3.5, 7.6, -14], [-12, -6.8, -10],
      [-13.6, -2.5, -9], [-14.5, 1.8, -11],
    ];
    return spots.map((position, i) => ({
      position,
      color: BRAND[i % BRAND.length],
      size: 0.55 + rnd(i + 7) * 0.5,
      speed: 0.6 + rnd(i + 11),
      kind: kinds[i % kinds.length],
    }));
  }, []);

  return (
    <group ref={root}>
      {items.map((it, i) => (
        <Blob key={i} {...it} />
      ))}
      <Coin position={[-9.4, -4.8, -7]} scale={0.8} />
      <Coin position={[10.2, -4.4, -6]} scale={0.65} speed={1.3} />
      <Coin position={[-3.6, 5.4, -9]} scale={0.6} speed={0.8} />
    </group>
  );
}

export default function Scene3D({ slide }) {
  return (
    <div className="scene3d" aria-hidden="true">
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 9], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 6]} intensity={1.6} />
        <directionalLight position={[-6, -2, 4]} intensity={0.6} color="#93C5FD" />
        <Suspense fallback={null}>
          <World slide={slide} />
          <AppTile slide={slide} />
          <ContactShadows position={[0, -3.6, 0]} opacity={0.22} scale={22} blur={2.8} far={6} color="#1E3A8A" />
          <Environment resolution={256}>
            <Lightformer form="rect" intensity={3} position={[0, 5, -6]} scale={[12, 4, 1]} color="#ffffff" />
            <Lightformer form="rect" intensity={2} position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} color="#DBEAFE" />
            <Lightformer form="rect" intensity={1.5} position={[6, -1, 2]} rotation-y={-Math.PI / 2} scale={[8, 3, 1]} color="#FFEDD5" />
            <Lightformer form="ring" intensity={2} position={[0, 0, 8]} scale={4} color="#ffffff" />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}
