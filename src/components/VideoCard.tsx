'use client';
import { useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';

const jsmpeg = require('jsmpeg');

function VideoCard() {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:9999');

    socket.onopen = () => {
      setIsLoading(false);
    };

    playerRef.current = new jsmpeg(socket, {
      canvas: canvasRef.current,
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className='text-center flex flex-col'>
      {isLoading ? (
        <div className='w-[400px] h-[300px] shadow-md rounded-sm flex items-center justify-center'>
          <Spinner />
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          className='w-[400px] h-[300px] shadow-md rounded-sm'
        />
      )}
      <span className='display-[inline-block] mt-3 font-semibold text-lg'>
        CAMERA 1
      </span>
    </div>
  );
}

export default VideoCard;
