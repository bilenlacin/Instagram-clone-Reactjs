import React, { useRef, useState } from 'react';

export const Video = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const playOrPause = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);
  return (
    <div className='video-wrapper'>
      <video
        onPlay={onPlay}
        onPause={onPause}
        ref={videoRef}
        className='video'
        src={src}
      />
      <div className='controls' onClick={playOrPause}>
        <img
          src='icons/playbutton.png'
          alt=''
          className={`video-control ${
            isPlaying ? 'control-hidden' : 'control-shown'
          }`}
          width='100px'
        />
      </div>
    </div>
  );
};

export default Video;
