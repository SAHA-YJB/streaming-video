'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
const jsmpeg = require('jsmpeg');

function VideoCard() {
  const canvasRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

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
