import React from 'react';

interface ProgressBarType {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarType) => {
  return (
    <div className="w-full min-w-[80px] h-5 rounded-full bg-[#202224]  overflow-hidden relative">
      <div className="bg-[#2DD4BF] rounded-full h-full" style={{ width: `${progress}%`}}></div>
      <div className="absolute text-xs text-[#FFFFFF] top-[-2px] right-3 p-1">{progress}%</div>
    </div>
  );
}; 

export default ProgressBar;
