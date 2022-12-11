import "./topbar.css";
import {
  Search,
  Mic,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import Skeleton from "../skeleton/Skeleton";

const Topbar = ({ user, isLoading }) => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img src="https://i.ibb.co/KDtnJVY/logo.png" alt="" className="logo" />
        <span className="logoText">Sha1Tube</span>
      </div>
      <div className="topCenter">
        <div className="topSearch">
          <input type="text" placeholder="Search..." />
          <div className="topSearchIconContainer">
            <Search className="topSearchIcon" />
          </div>
          <Mic />
        </div>
      </div>
      {isLoading ? (
        <Skeleton type="top" />
      ) : (
        <div className="topRight">
          <VideoCall className="topIcon" />
          <Apps className="topIcon" />
          <Notifications className="topIcon" />
          <img className="topImg" src={user.avatar} alt="" />
        </div>
      )}
    </div>
  );
};

export default Topbar;
