import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingMeshBackgroundProps {
  opacity?: number;
  particleDensity?: number;
}

export const FloatingMeshBackground: React.FC<FloatingMeshBackgroundProps> = ({
  opacity = 0.4,
  particleDensity = 60,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // light performance
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // Floating Geometries (Octahedron, Icosahedron, Torus)
    const objects: THREE.Mesh[] = [];
    const geoms = [
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.IcosahedronGeometry(0.9, 0),
      new THREE.TorusGeometry(0.7, 0.15, 12, 24),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.25 }),
      new THREE.MeshBasicMaterial({ color: 0x14b8a6, wireframe: true, transparent: true, opacity: 0.22 }),
      new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true, transparent: true, opacity: 0.20 }),
    ];

    for (let i = 0; i < 6; i++) {
      const geom = geoms[i % geoms.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geom, mat);
      
      mesh.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      scene.add(mesh);
      objects.push(mesh);
    }

    // Small particle dust
    const particlePositions = new Float32Array(particleDensity * 3);
    for (let i = 0; i < particleDensity * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.04,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Resize
    const handleResize = () => {
      if (!containerRef.current || !renderer) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with low overhead
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      objects.forEach((obj, idx) => {
        obj.rotation.x = elapsed * (0.15 + idx * 0.05);
        obj.rotation.y = elapsed * (0.2 + idx * 0.04);
        obj.position.y += Math.sin(elapsed + idx) * 0.003;
      });

      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [particleDensity]);

  return (
    <div
      ref={containerRef}
      style={{ opacity }}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
