import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataProvider";
import { Link } from "react-router-dom";

export function IndividualVideo() {
  const { videoId } = useParams();
  const { videos, likeHandler, addToWatchLaterHandler } = useData();

  const video = videos.find((video) => video.id === Number(videoId));
  const {
    id,
    title,
    description,
    duration,
    thumbnail,
    url,
    isLiked,
    isWatchLater,
  } = video;
  return (
    <>
      <h1>{title}</h1>
      <img src={thumbnail} />
      <Link to={url}>Watch here</Link>
      <p>Description: {description}</p>
      <p>Duration: {duration}</p>
      <button onClick={() => likeHandler(video)}>
        {!isLiked ? "Like" : "Remove like"}
      </button>

      <button onClick={() => addToWatchLaterHandler(video)}>
        {!isWatchLater ? "Add to watch later" : "Remove from watchlist"}
      </button>
    </>
  );
}
