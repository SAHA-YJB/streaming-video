'use client';
import { useEffect, useRef } from 'react';
const jsmpeg = require('jsmpeg');

function VideoCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:9999');
    playerRef.current = new jsmpeg(socket, {
      canvas: canvasRef.current,
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className='w-[400px] h-[300px]' />
    </div>
  );
}

export default VideoCard;
