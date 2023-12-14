'use client';
import logData, { text } from '@/logData/data';
import React, { useEffect, useState } from 'react';

const LogSideBar = () => {
  const cards = Array(3).fill(0);
  const data = logData(text);
  const [start, setStart] = useState(0); // 시작 인덱스를 상태로 관리

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prevStart) => (prevStart + 3) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className='flex items-center justify-center p-4 bg-slate-800 h-auto sm:h-[100vh] ml-4'>
      <div className='overflow-y-auto h-full w-full flex flex-row space-x-4 sm:flex-col items-center justify-center'>
        {cards.map((_, i) => (
          <div
            key={i}
            className='w-[180px] h-[150px] my-10 rounded-md shadow-lg border flex items-center justify-center text-white text-xl'
          >
            {data.slice(start + i, start + i + 1).map((item, i) => (
              <div
                key={i}
                className='text-center flex flex-col justify-center items-center'
              >
                <p>{item.detections}</p>
                <p>{item.processingTime}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogSideBar;
