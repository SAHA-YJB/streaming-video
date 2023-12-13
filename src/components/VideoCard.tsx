'use client';
import { useEffect, useRef } from 'react';

const jsmpeg = require('jsmpeg');

interface VideoCardProps {
  url: string;
  cameraName: string;
}

function VideoCard({ url, cameraName }: VideoCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    playerRef.current = new jsmpeg(socket, {
      canvas: canvasRef.current,
    });

    return () => {
      socket.close();
    };
  }, [url]);

  return (
    <div className='text-center flex flex-col'>
      <canvas
        ref={canvasRef}
        className='w-[400px] h-[300px] shadow-md rounded-sm'
      />
      <span className='display-[inline-block] mt-3 font-semibold text-lg'>
        {cameraName}
      </span>
    </div>
  );
}

export default VideoCard;
