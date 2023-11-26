const VideoPage = ({ params }) => {
  const videoId = params.id;
  const videoTitle = `Video ${videoId}`;
  const videoUrl = {
    "01": "/big_buck_bunny.mp4",
    "02": "/statue-of-admiral-yi.mp4"
  };

  return (
    <div>
      <h1>{videoTitle}</h1>
      <video controls width="1280">
        <source src={videoUrl[videoId]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
  