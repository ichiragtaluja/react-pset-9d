import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [] = useState(false);
  const getVideos = async () => {
    try {
      const {
        status,
        data: { videos },
      } = await fakeFetch("https://example.com/api/videos");

      if (status === 200) {
        setVideos(videos);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getVideos();
  }, []);

  const likeHandler = (video) => {
    setVideos((videos) =>
      videos.map((vid) => {
        if (vid.id === video.id) {
          if (vid.isLiked) {
            return { ...vid, isLiked: !vid.isLiked };
          } else {
            return { ...vid, isLiked: true };
          }
        } else {
          return vid;
        }
      })
    );
  };

  const addToWatchLaterHandler = (video) => {
    setVideos((videos) =>
      videos.map((vid) => {
        if (vid.id === video.id) {
          if (vid.isWatchLater) {
            return { ...vid, isWatchLater: !vid.isWatchLater };
          } else {
            return { ...vid, isWatchLater: true };
          }
        } else {
          return vid;
        }
      })
    );
  };

  return (
    <DataContext.Provider
      value={{ videos, likeHandler, addToWatchLaterHandler }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
