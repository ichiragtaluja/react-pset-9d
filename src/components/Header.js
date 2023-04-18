import { NavLink } from "react-router-dom";
import { useData } from "../contexts/DataProvider";

export function Header() {
  const { videos } = useData();
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });

  const totalLikedVideos = () =>
    videos.reduce((acc, curr) => (curr.isLiked ? acc + 1 : acc), 0);
  const totalWatchedLaterVideos = () =>
    videos.reduce((acc, curr) => (curr.isWatchLater ? acc + 1 : acc), 0);
  return (
    <nav>
      <NavLink style={getActiveStyle} to="/">
        {" "}
        Home
      </NavLink>{" "}
      <NavLink style={getActiveStyle} to="/videos">
        Videos
      </NavLink>{" "}
      <NavLink style={getActiveStyle} to="/liked-videos">
        {" "}
        Liked Videos ({totalLikedVideos()})
      </NavLink>{" "}
      <NavLink style={getActiveStyle} to="watch-later">
        Watch Later ({totalWatchedLaterVideos()})
      </NavLink>
    </nav>
  );
}
