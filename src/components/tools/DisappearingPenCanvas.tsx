import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PenTool, Trash2, Check, Sparkles } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  id: string;
  points: Point[];
  color: string;
  width: number;
  createdAt: number; // timestamp in ms
}

interface DisappearingPenCanvasProps {
  isActive: boolean;
  onToggleActive: () => void;
}

const COLOR_OPTIONS = [
  { name: 'Neon Amber', value: '#f59e0b' },
  { name: 'Electric Rose', value: '#f43f5e' },
  { name: 'Sky Blue', value: '#0284c7' },
  { name: 'Emerald', value: '#10b981' },
];

const STROKE_DURATION = 5000; // 5 seconds total lifetime
const FADE_START = 3500; // start fading out at 3.5 seconds

export const DisappearingPenCanvas: React.FC<DisappearingPenCanvasProps> = ({
  isActive,
  onToggleActive,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const currentStrokeRef = useRef<Stroke | null>(null);
  const isDrawingRef = useRef<boolean>(false);
  const animFrameRef = useRef<number | null>(null);

  const [selectedColor, setSelectedColor] = useState<string>('#f59e0b');
  const [strokeWidth, setStrokeWidth] = useState<number>(4);

  // Resize canvas to match full window dimensions
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Main rendering loop for drawing and fading out strokes
  const renderLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const now = Date.now();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Filter out expired strokes (> 5 seconds old)
    strokesRef.current = strokesRef.current.filter((stroke) => {
      const age = now - stroke.createdAt;
      return age < STROKE_DURATION;
    });

    // Draw all active strokes
    const allStrokes = [...strokesRef.current];
    if (currentStrokeRef.current) {
      allStrokes.push(currentStrokeRef.current);
    }

    allStrokes.forEach((stroke) => {
      if (stroke.points.length < 2) return;

      const age = now - stroke.createdAt;
      let alpha = 1.0;

      if (age > FADE_START) {
        alpha = Math.max(0, 1 - (age - FADE_START) / (STROKE_DURATION - FADE_START));
      }

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Glow effect for disappearing pen
      ctx.shadowColor = stroke.color;
      ctx.shadowBlur = 6;

      ctx.beginPath();
      // Convert document coordinates back to current viewport coordinates for rendering
      const startX = stroke.points[0].x - scrollX;
      const startY = stroke.points[0].y - scrollY;
      ctx.moveTo(startX, startY);

      for (let i = 1; i < stroke.points.length; i++) {
        const prevX = stroke.points[i - 1].x - scrollX;
        const prevY = stroke.points[i - 1].y - scrollY;
        const currX = stroke.points[i].x - scrollX;
        const currY = stroke.points[i].y - scrollY;

        const xc = (currX + prevX) / 2;
        const yc = (currY + prevY) / 2;
        ctx.quadraticCurveTo(prevX, prevY, xc, yc);
      }

      ctx.stroke();
      ctx.restore();
    });

    animFrameRef.current = requestAnimationFrame(renderLoop);
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(renderLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [renderLoop]);

  // Pointer event handlers for drawing anywhere on screen - anchored to document coordinates
  const startDrawing = (e: React.PointerEvent) => {
    if (!isActive) return;
    isDrawingRef.current = true;

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    const newStroke: Stroke = {
      id: Math.random().toString(36).substring(2, 9),
      points: [{ x: e.clientX + scrollX, y: e.clientY + scrollY }],
      color: selectedColor,
      width: strokeWidth,
      createdAt: Date.now(),
    };

    currentStrokeRef.current = newStroke;
  };

  const draw = (e: React.PointerEvent) => {
    if (!isActive || !isDrawingRef.current || !currentStrokeRef.current) return;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    currentStrokeRef.current.points.push({
      x: e.clientX + scrollX,
      y: e.clientY + scrollY,
    });
  };

  const stopDrawing = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    if (currentStrokeRef.current && currentStrokeRef.current.points.length > 1) {
      strokesRef.current.push({
        ...currentStrokeRef.current,
        createdAt: Date.now(),
      });
    }

    currentStrokeRef.current = null;
  };

  const clearStrokes = () => {
    strokesRef.current = [];
    currentStrokeRef.current = null;
  };

  return (
    <>
      {/* Canvas Overlay covering whole screen */}
      <canvas
        ref={canvasRef}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerLeave={stopDrawing}
        className={`fixed inset-0 z-40 ${
          isActive ? 'pointer-events-auto cursor-crosshair' : 'pointer-events-none'
        }`}
      />

      {/* Floating Toolbar for Disappearing Pen Settings */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 bg-slate-900/90 text-white p-1.5 rounded-xl shadow-lg border border-slate-700/80 backdrop-blur-md animate-fadeIn">
        
        {/* Toggle Pen Button */}
        <button
          onClick={onToggleActive}
          className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            isActive
              ? 'bg-amber-500 text-slate-950 shadow-xs shadow-amber-500/30'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white'
          }`}
        >
          <PenTool className="w-3.5 h-3.5 shrink-0" />
          <span>{isActive ? 'Pen Active' : 'Pen'}</span>
          <span className="text-[9px] font-bold bg-slate-950/50 px-1 py-0.2 rounded text-amber-300 ml-0.5">5s</span>
        </button>

        {/* Extended Options when Pen is Active */}
        {isActive && (
          <>
            <div className="h-4 w-px bg-slate-700 mx-0.5" />

            {/* Color Selectors */}
            <div className="flex items-center space-x-1">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedColor(c.value)}
                  title={c.name}
                  style={{ backgroundColor: c.value }}
                  className={`w-4.5 h-4.5 rounded-full transition-transform cursor-pointer flex items-center justify-center ${
                    selectedColor === c.value ? 'scale-125 ring-1.5 ring-white' : 'hover:scale-110'
                  }`}
                >
                  {selectedColor === c.value && <Check className="w-2.5 h-2.5 text-slate-950 stroke-[3]" />}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-slate-700 mx-0.5" />

            {/* Thickness Selectors */}
            <div className="flex items-center space-x-0.5 bg-slate-800 p-0.5 rounded-md">
              {[3, 5, 8].map((w) => (
                <button
                  key={w}
                  onClick={() => setStrokeWidth(w)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                    strokeWidth === w ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {w === 3 ? 'Thin' : w === 5 ? 'Med' : 'Thick'}
                </button>
              ))}
            </div>

            {/* Clear All Button */}
            <button
              onClick={clearStrokes}
              title="Clear all drawings"
              className="p-1 rounded-lg bg-slate-800 hover:bg-rose-900/80 text-slate-400 hover:text-rose-200 transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </>
        )}

      </div>
    </>
  );
};
