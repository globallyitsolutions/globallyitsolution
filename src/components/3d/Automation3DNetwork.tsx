import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, RotateCcw, Zap, Layers, Activity, CheckCircle2, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface PipelinePreset {
  id: string;
  name: string;
  category: string;
  nodes: { name: string; type: string; color: number; x: number; y: number; z: number }[];
  description: string;
}

const PRESETS: PipelinePreset[] = [
  {
    id: 'lead-ai-whatsapp',
    name: 'Lead Capture & WhatsApp Instant SLA',
    category: 'Sales Acceleration',
    description: 'Intercepts web leads, qualifies intent with LLM in 240ms, and dispatches dynamic WhatsApp follow-ups.',
    nodes: [
      { name: 'Web Ingress', type: 'Trigger', color: 0x3b82f6, x: -3.2, y: 0.5, z: 0 },
      { name: 'Gemini Logic', type: 'AI Reasoning', color: 0x8b5cf6, x: -1.0, y: 1.2, z: 0.8 },
      { name: 'CRM Postgres', type: 'Durable Sync', color: 0x06b6d4, x: 1.2, y: -0.6, z: -0.5 },
      { name: 'WhatsApp Bot', type: 'Instant Dispatch', color: 0x10b981, x: 3.2, y: 0.8, z: 0.3 },
    ],
  },
  {
    id: 'support-triage',
    name: 'Autonomous Customer Support Router',
    category: 'Operations',
    description: 'Categorizes incoming support tickets, checks order database, and provides verified resolution paths.',
    nodes: [
      { name: 'Support Webhook', type: 'Trigger', color: 0x3b82f6, x: -3.0, y: -0.8, z: -0.4 },
      { name: 'Intent Classifier', type: 'NLP Model', color: 0x8b5cf6, x: -0.8, y: 0.9, z: 0.6 },
      { name: 'Knowledge Graph', type: 'RAG Retrieval', color: 0xf59e0b, x: 1.4, y: 1.0, z: -0.2 },
      { name: 'Staff Dispatch', type: 'Escalation', color: 0x10b981, x: 3.2, y: -0.4, z: 0.5 },
    ],
  },
  {
    id: 'invoice-billing',
    name: 'Payment & Invoice Auto-Reconciliation',
    category: 'Finance',
    description: 'Extracts invoices, validates bank transaction hashes, and auto-dispatches GST receipts.',
    nodes: [
      { name: 'Bank Webhook', type: 'Payment Gate', color: 0x3b82f6, x: -3.1, y: 0.2, z: 0.2 },
      { name: 'OCR Validator', type: 'Vision Parse', color: 0xec4899, x: -1.0, y: -0.9, z: -0.7 },
      { name: 'Accounting Sync', type: 'Ledger Audit', color: 0x06b6d4, x: 1.1, y: 0.7, z: 0.4 },
      { name: 'Email & WhatsApp', type: 'Receipt SLA', color: 0x10b981, x: 3.3, y: 0.1, z: -0.3 },
    ],
  },
];

export const Automation3DNetwork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [liveLogs, setLiveLogs] = useState<string[]>([
    'System ready in 3D execution space',
    'Awaiting trigger packet dispatch',
  ]);

  const activePreset = PRESETS[activePresetIndex];

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodeObjectsRef = useRef<THREE.Group[]>([]);
  const lineCurvesRef = useRef<THREE.CatmullRomCurve3[]>([]);
  const packetMeshRef = useRef<THREE.Mesh | null>(null);
  const packetProgress = useRef<number>(0);
  const isPacketFlying = useRef<boolean>(false);
  const currentCurveIndex = useRef<number>(0);
  const mouseRotation = useRef({ x: 0.2, y: -0.3 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0x0a192f, 3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x34d399, 2);
    fillLight.position.set(-5, -5, 3);
    scene.add(fillLight);

    // 3D Grid Plane for Spatial Grounding
    const gridHelper = new THREE.GridHelper(10, 14, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -2.2;
    scene.add(gridHelper);

    // Build 3D Nodes & Curves
    nodeObjectsRef.current = [];
    lineCurvesRef.current = [];

    const nodePositions: THREE.Vector3[] = [];

    activePreset.nodes.forEach((nodeData, idx) => {
      const nodeGroup = new THREE.Group();
      const pos = new THREE.Vector3(nodeData.x, nodeData.y, nodeData.z);
      nodeGroup.position.copy(pos);
      nodePositions.push(pos);

      // Core Sphere
      const sphereGeom = new THREE.SphereGeometry(0.38, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: nodeData.color,
        roughness: 0.2,
        metalness: 0.8,
        emissive: nodeData.color,
        emissiveIntensity: 0.4,
      });
      const sphere = new THREE.Mesh(sphereGeom, sphereMat);
      nodeGroup.add(sphere);

      // Orbiting Wire Ring
      const ringGeom = new THREE.TorusGeometry(0.55, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: nodeData.color,
        transparent: true,
        opacity: 0.6,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / (2 + idx);
      nodeGroup.add(ring);

      scene.add(nodeGroup);
      nodeObjectsRef.current.push(nodeGroup);
    });

    // Generate CatmullRom Curves connecting the consecutive nodes
    for (let i = 0; i < nodePositions.length - 1; i++) {
      const p1 = nodePositions[i];
      const p2 = nodePositions[i + 1];

      // Elevated midpoint for dynamic 3D spline arc
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mid.y += 0.8;
      mid.z += (i % 2 === 0 ? 0.6 : -0.6);

      const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
      lineCurvesRef.current.push(curve);

      // Tube Geometry for high-tech pipeline line
      const tubeGeom = new THREE.TubeGeometry(curve, 40, 0.025, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        emissive: 0x1e293b,
        metalness: 0.9,
        roughness: 0.3,
        transparent: true,
        opacity: 0.7,
      });
      const tube = new THREE.Mesh(tubeGeom, tubeMat);
      scene.add(tube);
    }

    // Packet glowing projectile
    const packetGeom = new THREE.SphereGeometry(0.14, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });
    const packetMesh = new THREE.Mesh(packetGeom, packetMat);
    packetMesh.visible = false;
    scene.add(packetMesh);
    packetMeshRef.current = packetMesh;

    // Mouse Controls
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      mouseRotation.current.y += deltaX * 0.006;
      mouseRotation.current.x += deltaY * 0.006;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Root scene rotation based on smooth mouse control + subtle idle breathing
      scene.rotation.y = mouseRotation.current.y + Math.sin(elapsed * 0.4) * 0.05;
      scene.rotation.x = mouseRotation.current.x + Math.cos(elapsed * 0.3) * 0.03;

      // Animate node rings
      nodeObjectsRef.current.forEach((group, i) => {
        const ring = group.children[1];
        if (ring) {
          ring.rotation.z = elapsed * (1.2 + i * 0.3);
          ring.rotation.y = elapsed * (0.8 + i * 0.2);
        }
      });

      // Animate Packet Along 3D Bezier Spline
      if (isPacketFlying.current && packetMeshRef.current && lineCurvesRef.current.length > 0) {
        const currentCurve = lineCurvesRef.current[currentCurveIndex.current];
        if (currentCurve) {
          packetProgress.current += 0.025;
          if (packetProgress.current >= 1.0) {
            packetProgress.current = 0;
            currentCurveIndex.current += 1;
            setActiveStage(currentCurveIndex.current);

            if (currentCurveIndex.current >= lineCurvesRef.current.length) {
              isPacketFlying.current = false;
              packetMeshRef.current.visible = false;
              setIsProcessing(false);
              setLiveLogs((prev) => [
                `[200 OK] Pipeline completed successfully across all nodes in 218ms`,
                ...prev.slice(0, 3),
              ]);
            }
          } else {
            const point = currentCurve.getPoint(packetProgress.current);
            packetMeshRef.current.position.copy(point);
            packetMeshRef.current.visible = true;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activePresetIndex]);

  const triggerPacket = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setActiveStage(0);
    currentCurveIndex.current = 0;
    packetProgress.current = 0;
    isPacketFlying.current = true;

    setLiveLogs([
      `[TRIGGER] Dispatched payload from "${activePreset.nodes[0].name}"`,
      `[AI ROUTE] Evaluating data rules & latency threshold`,
    ]);
  };

  return (
    <div className="w-full rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 relative">
      
      {/* Top Header & Preset Selector */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>3D Autonomous Pipeline Canvas</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {activePreset.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            {activePreset.description}
          </p>
        </div>

        {/* Preset Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          {PRESETS.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePresetIndex(idx);
                setIsProcessing(false);
                setActiveStage(0);
                isPacketFlying.current = false;
              }}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activePresetIndex === idx
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {preset.category}
            </button>
          ))}
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-slate-900/60 border border-slate-800/80 my-6 overflow-hidden cursor-grab active:cursor-grabbing select-none"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* 3D Canvas Floating Overlay Legend */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none z-10">
          {activePreset.nodes.map((node, i) => (
            <div
              key={node.name}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg backdrop-blur-md text-xs font-mono transition-all duration-200 ${
                activeStage === i && isProcessing
                  ? 'bg-blue-600/90 text-white font-bold border border-blue-400 scale-105 shadow-md'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: `#${node.color.toString(16).padStart(6, '0')}` }} />
              <span>Node {i + 1}: {node.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 text-[11px] font-mono text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 pointer-events-none">
          Drag to Orbit in 3D Space
        </div>
      </div>

      {/* Execution Controls & Terminal Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        
        {/* Trigger Button & Status */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="button"
            onClick={triggerPacket}
            disabled={isProcessing}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm transition-all duration-150 cursor-pointer shadow-sm ${
              isProcessing
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white'
            }`}
          >
            {isProcessing ? (
              <>
                <Zap className="w-4 h-4 text-teal-400 animate-bounce" />
                <span>Simulating 3D Flow...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Trigger Live 3D Simulation</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppUrl('automation', `Hello Globally IT Solutions, I tried your 3D Automation Simulator for ${activePreset.name}. I would like to implement this workflow.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Deploy Workflow</span>
          </a>
        </div>

        {/* Real-time Telemetry Terminal */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-xs text-slate-300 flex flex-col gap-1 overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1 border-b border-slate-800 font-bold uppercase tracking-wider">
            <span>Execution Telemetry</span>
            <span className="text-teal-400">Latency: 218ms Avg</span>
          </div>
          {liveLogs.map((log, i) => (
            <div key={i} className="truncate text-slate-300">
              <span className="text-blue-400 mr-2">&gt;</span>
              {log}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
