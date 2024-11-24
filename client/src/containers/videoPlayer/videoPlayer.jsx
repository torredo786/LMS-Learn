import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  Settings, 
  Volume2,
  VolumeX
} from 'lucide-react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('720p');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  const qualities = ['1080p', '720p', '480p', '360p'];
  
  // Segments for demonstration (in seconds)
  const segments = [
    { start: 0, end: 30, title: 'Introduction' },
    { start: 31, end: 60, title: 'Main Content' },
    { start: 61, end: 90, title: 'Conclusion' }
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="w-full h-1 mb-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="hover:text-gray-300"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className=" hover:text-gray-300"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Time Display */}
            <div className=" text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Settings Button */}
            <div className="relative">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className=" hover:text-gray-300"
              >
                <Settings size={24} />
              </button>

              {/* Quality Settings Dropdown */}
              {showSettings && (
                <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded-lg p-2 min-w-[120px]">
                  <div className=" text-sm mb-2">Quality</div>
                  {qualities.map((quality) => (
                    <button
                      key={quality}
                      onClick={() => {
                        setCurrentQuality(quality);
                        setShowSettings(false);
                      }}
                      className={`block w-full text-left px-3 py-1 text-sm rounded ${
                        currentQuality === quality
                          ? 'bg-blue-500 '
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {quality}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="hover:text-gray-300"
            >
              {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
            </button>
          </div>
        </div>

        {/* Segments */}
        <div className="absolute top-0 left-0 right-0 flex">
          {segments.map((segment, index) => (
            <div
              key={index}
              style={{
                width: `${((segment.end - segment.start) / duration) * 100}%`,
                left: `${(segment.start / duration) * 100}%`
              }}
              className="absolute h-1 bg-blue-500 opacity-50 hover:opacity-100 cursor-pointer"
              title={segment.title}
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = segment.start;
                  setCurrentTime(segment.start);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;