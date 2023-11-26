// pages/index.js
import { IconButton } from '@mui/material';
import Link from 'next/link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const videos = [
  { id: '01', title: 'Video 1', thumbnail: 'thumbnail01.png' },
  { id: '02', title: 'Video 2', thumbnail: 'thumbnail02.png' },
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Video</h1>
      <div>
        {videos.map((video) => (
          <Link key={video.id} href={`/video/${video.id}`}>
            <div style={{ position: 'relative', width: 1280 }}>
              <div style={{ position: 'absolute', top: '5%', left: '5%' }}>
                <h2>{video.title}</h2>
              </div>
              <div style={{ position: 'absolute', top: 'calc(50% - 120px)', left: 'calc(50% - 120px)', zIndex: 1 }}>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 128, width: 128 }} />
                </IconButton>
              </div>
              <img src={video.thumbnail} width="1280" alt={video.title} style={{ opacity: 0.5 }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
