'use client';
import { useEffect, useRef } from 'react';

// 이 라이브러리는 MPEG1 동영상을 디코딩하는데 사용
const jsmpeg = require('jsmpeg');

interface VideoCardProps {
  url: string;
  cameraName: string;
}

function VideoCard({ url, cameraName }: VideoCardProps) {
  // 'canvasRef'는 캔버스 요소에 대한 참조를 저장
  // 'playerRef'는 'jsmpeg' 플레이어 인스턴스에 대한 참조를 저장
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // 'WebSocket' 인스턴스를 생성하여 'url'로 연결을 시도
    const socket = new WebSocket(url);

    // 'jsmpeg' 플레이어를 생성하여 'playerRef'에 저장
    // 'socket'과 'canvasRef.current'를 인자로 전달하여
    // 웹소켓을 통한 스트리밍과 캔버스에 동영상을 그리는 작업을 연결
    playerRef.current = new jsmpeg(socket, {
      canvas: canvasRef.current,
    });

    return () => {
      socket.close();
    };
  }, [url]);

  return (
    <div className='text-center md:justify-center md:items-center flex flex-col mt-6 ml-4'>
      <canvas
        ref={canvasRef}
        className='w-[350px] h-[300px] shadow-md rounded-sm'
      />
      <span className='display-[inline-block] mt-3 font-semibold text-lg text-slate-200'>
        {cameraName}
      </span>
    </div>
  );
}

export default VideoCard;
