import React from 'react';

const SuspenseLoader = () => {
  return (
    <div className="min-h-screen bg-amber-50/10 flex items-center justify-center">
      <div className="relative">
       
        <div className="w-16 h-16 border-4 border-amber-400 border-dotted rounded-full animate-[spin_2s_linear_infinite]"></div>
       
        <div className="absolute inset-0 border-4 border-amber-200 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default SuspenseLoader;