'use client';
import { useEffect, useRef } from 'react';

const jsmpeg = require('jsmpeg');

function VideoCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:9998');

    playerRef.current = new jsmpeg(socket, {
      canvas: canvasRef.current,
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className='text-center flex flex-col'>
      <canvas
        ref={canvasRef}
        className='w-[400px] h-[300px] shadow-md rounded-sm'
      />
      <span className='display-[inline-block] mt-3 font-semibold text-lg'>
        CAMERA 2
      </span>
    </div>
  );
}

export default VideoCard;
