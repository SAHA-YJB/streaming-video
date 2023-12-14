import React from 'react';

const LogSideBar = () => {
  const cards = Array(6).fill(0);

  return (
    <div className='flex flex-col items-center p-4 bg-slate-800 h-[100vh] ml-4'>
      <div className='overflow-y-auto h-full w-full'>
        {cards.map((_, i) => (
          <div
            key={i}
            className='w-[150px] h-[150px] mb-4 mr-4 bg-slate-500 rounded-md shadow-md flex items-center justify-center text-white text-xl'
          >
            Log {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogSideBar;
