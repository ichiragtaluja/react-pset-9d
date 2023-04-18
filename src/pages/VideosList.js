import { useData } from "../contexts/DataProvider";
import { Link } from "react-router-dom";

export function VideosList() {
  const { videos, likeHandler, addToWatchLaterHandler } = useData();
  return (
    <>
      <h1>All Videos</h1>
      {videos.map((video) => {
        const { id, title, description, url, thumbnail, duration } = video;
        return (
          <div key={id}>
            <img src={thumbnail} />

            <h3>{title}</h3>

            <Link to={`/individual-page/${id}`}>Watch here</Link>

            <button onClick={() => likeHandler(video)}>
              {!video.isLiked ? "Like" : "Remove like"}
            </button>

            <button onClick={() => addToWatchLaterHandler(video)}>
              {!video.isWatchLater
                ? "Add to watch later"
                : "Remove from watchlist"}
            </button>
          </div>
        );
      })}
    </>
  );
}
