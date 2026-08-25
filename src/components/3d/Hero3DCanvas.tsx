import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles, Box, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

type GeometryType = 'icosahedron' | 'torusknot' | 'octahedron' | 'dodecahedron';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [geometryType, setGeometryType] = useState<GeometryType>('icosahedron');
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isInteracting, setIsInteracting] = useState(false);

  // References for three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const coreMeshRef = useRef<THREE.Mesh | null>(null);
  const wireMeshRef = useRef<THREE.LineSegments | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const ringMeshRef = useRef<THREE.Mesh | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const customRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x3b82f6, 3.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x14b8a6, 2.5);
    fillLight.position.set(-5, -3, 2);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0x60a5fa, 4, 15);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // 5. Build Mesh Function
    const createCoreMesh = (type: GeometryType) => {
      if (coreMeshRef.current) scene.remove(coreMeshRef.current);
      if (wireMeshRef.current) scene.remove(wireMeshRef.current);
      if (ringMeshRef.current) scene.remove(ringMeshRef.current);

      let geom: THREE.BufferGeometry;
      switch (type) {
        case 'torusknot':
          geom = new THREE.TorusKnotGeometry(1.3, 0.4, 100, 16, 2, 3);
          break;
        case 'octahedron':
          geom = new THREE.OctahedronGeometry(1.8, 0);
          break;
        case 'dodecahedron':
          geom = new THREE.DodecahedronGeometry(1.8, 1);
          break;
        case 'icosahedron':
        default:
          geom = new THREE.IcosahedronGeometry(1.8, 1);
          break;
      }

      // Shaded Solid Material
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x0f2744,
        emissive: 0x0a192f,
        roughness: 0.15,
        metalness: 0.85,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        wireframe: wireframe,
        transparent: true,
        opacity: 0.95,
      });

      const mesh = new THREE.Mesh(geom, material);
      coreMeshRef.current = mesh;
      scene.add(mesh);

      // Wireframe overlay for high-tech tactile geometry
      if (!wireframe) {
        const wireframeGeom = new THREE.WireframeGeometry(geom);
        const wireMaterial = new THREE.LineBasicMaterial({
          color: 0x60a5fa,
          transparent: true,
          opacity: 0.35,
        });
        const wireMesh = new THREE.LineSegments(wireframeGeom, wireMaterial);
        wireMeshRef.current = wireMesh;
        scene.add(wireMesh);
      }

      // Orbital Gyro Ring
      const ringGeom = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x2dd4bf,
        transparent: true,
        opacity: 0.5,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      ringMeshRef.current = ringMesh;
      scene.add(ringMesh);
    };

    createCoreMesh(geometryType);

    // 6. Particle Field (Constellation)
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 3.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
      particleScales[i / 3] = Math.random() * 1.5 + 0.5;
    }

    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeom.setAttribute('scale', new THREE.BufferAttribute(particleScales, 1));

    const particlesMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeom, particlesMat);
    particlesMeshRef.current = particlesMesh;
    scene.add(particlesMesh);

    // 7. Mouse and Resize handlers
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;

      if (isDragging.current) {
        const deltaX = e.clientX - previousMousePosition.current.x;
        const deltaY = e.clientY - previousMousePosition.current.y;
        customRotation.current.y += deltaX * 0.008;
        customRotation.current.x += deltaY * 0.008;
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      setIsInteracting(true);
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      setIsInteracting(false);
    };

    window.addEventListener('resize', handleResize);
    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      const baseSpeed = 0.4 * speedMultiplier;

      if (coreMeshRef.current) {
        coreMeshRef.current.rotation.x = customRotation.current.x + elapsedTime * baseSpeed * 0.5 + mousePos.current.y * 0.3;
        coreMeshRef.current.rotation.y = customRotation.current.y + elapsedTime * baseSpeed + mousePos.current.x * 0.3;

        if (wireMeshRef.current) {
          wireMeshRef.current.rotation.copy(coreMeshRef.current.rotation);
        }
      }

      if (ringMeshRef.current) {
        ringMeshRef.current.rotation.z = elapsedTime * baseSpeed * 0.8;
        ringMeshRef.current.rotation.y = elapsedTime * baseSpeed * 0.3;
      }

      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.y = -elapsedTime * 0.08 + mousePos.current.x * 0.2;
        particlesMeshRef.current.rotation.x = elapsedTime * 0.04 + mousePos.current.y * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.dispose();
    };
  }, [geometryType, wireframe, speedMultiplier]);

  const handleBurst = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 35,
      spread: 60,
      startVelocity: 25,
      colors: ['#3b82f6', '#14b8a6', '#60a5fa', '#f8fafc'],
      disableForReducedMotion: true,
    });

    // Excitation speed spike
    setSpeedMultiplier(3.5);
    setTimeout(() => setSpeedMultiplier(1), 1200);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-slate-950/80 border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center select-none group"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Floating 3D Interaction Control HUD (Taste-skill craft) */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-[11px] font-mono text-slate-300 pointer-events-auto shadow-sm">
          <span className={`w-2 h-2 rounded-full ${isInteracting ? 'bg-teal-400 animate-ping' : 'bg-blue-400'}`} />
          <span className="font-semibold tracking-wide">3D Interactive Core Engine</span>
        </div>

        {/* Geometry Selector Pills */}
        <div className="hidden sm:flex items-center gap-1 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md p-1 rounded-xl pointer-events-auto">
          {(['icosahedron', 'torusknot', 'octahedron', 'dodecahedron'] as GeometryType[]).map((type) => (
            <button
              key={type}
              onClick={() => setGeometryType(type)}
              type="button"
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                geometryType === type
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {type === 'torusknot' ? 'Torus' : type.slice(0, 4)}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Floating Tactile Toolbars */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-20">
        <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md p-1.5 rounded-xl pointer-events-auto shadow-sm text-xs">
          <button
            type="button"
            onClick={() => setWireframe(!wireframe)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              wireframe ? 'bg-teal-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
            title="Toggle Wireframe / Shaded Surface"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{wireframe ? 'Wireframe' : 'Solid Shell'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSpeedMultiplier(speedMultiplier > 1 ? 1 : 2.5)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              speedMultiplier > 1 ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
            title="Toggle Speed Acceleration"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>{speedMultiplier > 1 ? 'Turbo 2.5x' : '1.0x RPM'}</span>
          </button>

          <button
            type="button"
            onClick={handleBurst}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-teal-300 hover:bg-teal-950/40 transition-colors cursor-pointer border border-teal-500/30"
            title="Trigger Particle Excitation Pulse"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excite</span>
          </button>
        </div>

        <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 hidden md:block">
          Click &amp; Drag to Orbit in 3D Space
        </div>
      </div>
    </div>
  );
};
