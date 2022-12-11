import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/user/1");
        setUser(response.data);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="container">
      <Sidebar isLoading={isLoading}/>
      <div className="home">
      <Topbar isLoading={isLoading} user={user}/>
       <Feed />
      </div>
    </div>
  );
};

export default App;
