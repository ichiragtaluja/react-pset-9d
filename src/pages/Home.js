import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Welcome To Video Library</h1>
      <h2>
        To browse all videos, click the below button or go to the vidos page
      </h2>
      <button>
        <Link to="/videos">Explore Videos</Link>
      </button>
    </>
  );
}
