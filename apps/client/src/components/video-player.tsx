import React, { ComponentProps } from 'react';
import { Player } from 'video-react';

type Props = ComponentProps<typeof Player>;

export const VideoPlayer: React.FC<Props> = (props) => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      {...props}
    />
  );
};
