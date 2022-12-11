import Post from "../post/Post";
import "./feed.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "../skeleton/Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  //const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://youtube-clone-i8xt.onrender.com/api/videos/1");
       setIsLoading(false)
       setVideos(response.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error)
      }
    };
    getVideos();
  }, []);

  return (
    <div className="feed">
     { isLoading ? <Skeleton type="feed" /> 
     : 
     (videos.map((video) => <Post video={video} />)) }
    </div>
  );
};

export default Feed;
