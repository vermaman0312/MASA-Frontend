import React, { useEffect, useRef, useState } from "react";

// src/types.ts
interface Point {
  x: number;
  y: number;
}

const PrivateVMeetOnlineAppWhiteboardPageComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPoint, setLastPoint] = useState<Point | null>(null);

  // Function to draw a line on the canvas
  const drawLine = (ctx: CanvasRenderingContext2D, from: Point, to: Point) => {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  // Start drawing on mouse down
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setLastPoint({ x: offsetX, y: offsetY });
  };

  // Draw on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    if (lastPoint) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      drawLine(ctx, lastPoint, { x: offsetX, y: offsetY });
      setLastPoint({ x: offsetX, y: offsetY });
    }
  };

  // Stop drawing on mouse up or leave
  const handleMouseUpOrLeave = () => {
    if (isDrawing) {
      setIsDrawing(false);
      setLastPoint(null);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
  }, []);

  return (
    <div className="w-full h-full border bg-white">
      <canvas
        ref={canvasRef}
        width={1470}
        height={790}
        style={{
          border: "1px solid black",
          cursor: isDrawing ? "url(/pen-cursor.png), auto" : "crosshair",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      />
    </div>
  );
};

export default PrivateVMeetOnlineAppWhiteboardPageComponent;
