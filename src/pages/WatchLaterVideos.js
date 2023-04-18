import { Link } from "react-router-dom";
import { useData } from "../contexts/DataProvider";

export function WatchLaterVideos() {
  const { videos } = useData();
  console.log(videos);
  return (
    <>
      <h1>Watch Later Videos</h1>
      {videos.map((video) => {
        const {
          id,
          title,
          description,
          url,
          thumbnail,
          duration,
          isLiked,
          isWatchLater,
        } = video;
        return (
          video.isWatchLater && (
            <div key={id}>
              <img src={thumbnail} />
              <h3>{title}</h3>
              <Link to={`/individual-page/${id}`}>Watch here</Link>
              <button onClick={() => likeHandler(video)}>
                {!isLiked ? "Like" : "Remove like"}
              </button>

              <button onClick={() => addToWatchLaterHandler(video)}>
                {!isWatchLater ? "Add to watch later" : "Remove from watchlist"}
              </button>
            </div>
          )
        );
      })}
    </>
  );
}
