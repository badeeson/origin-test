// pages/index.js
import { Grid, IconButton } from '@mui/material';
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
      <Grid container spacing={8}>
        {videos.map((video) => (
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link key={video.id} href={`/video/${video.id}`}>
              <div style={{ position: 'relative', width: 640, height: 360 }}>
                <div style={{ position: 'absolute', top: '5%', left: '5%' }}>
                  <h2>{video.title}</h2>
                </div>
                <div style={{ position: 'absolute', top: 'calc(50% - 120px)', left: 'calc(50% - 120px)', zIndex: 1 }}>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 128, width: 128 }} />
                  </IconButton>
                </div>
                <img src={video.thumbnail} width="100%" height="405" alt={video.title} style={{ opacity: 0.5 }} />
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
