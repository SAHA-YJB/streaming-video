import logData, { text } from '@/logData/data';
import React from 'react';

const LogSideBar = () => {
  const cards = Array(3).fill(0);
  const data = logData(text);

  return (
    <div className='flex items-center justify-center p-4 bg-slate-800 h-auto sm:h-[100vh] ml-4'>
      <div className='overflow-y-auto h-full w-full flex flex-row space-x-4 sm:flex-col items-center justify-center'>
        {cards.map((_, i) => (
          <div
            key={i}
            className='w-[150px] h-[150px] my-10 bg-slate-500 rounded-md shadow-md flex items-center justify-center text-white text-xl'
          >
            Log {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogSideBar;
