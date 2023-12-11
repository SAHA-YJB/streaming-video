import React from 'react';

const Header = () => {
  return (
    <header className='w-full px-[170px] py-12 bg-black bg-opacity-60 justify-center items-center gap-10 inline-flex'>
      <div className='grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex'>
        <h1 className="w-[520px] text-center text-white text-[60px] font-bold font-['Roboto'] leading-[48px]">
          KMCP
        </h1>
      </div>
    </header>
  );
};

export default Header;
