import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { VideosList } from "./pages/VideosList";
import { WatchLaterVideos } from "./pages/WatchLaterVideos";
import { IndividualVideo } from "./pages/IndividualVideo";
import { LikedVideos } from "./pages/LikedVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos" element={<VideosList />}></Route>
        <Route path="/liked-videos" element={<LikedVideos />}></Route>
        <Route path="/watch-later" element={<WatchLaterVideos />}></Route>
        <Route path="/individual-page/:videoId" element={<IndividualVideo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
