import React from 'react';
import { VideoPlayer } from '../components/video-player';

export const Videos: React.FC = () => {
  return (
    <div className="flex h-full w-full bg-red-200">
      <div className="h-1/2 w-1/2">
        <VideoPlayer />
      </div>
    </div>
  );
};
