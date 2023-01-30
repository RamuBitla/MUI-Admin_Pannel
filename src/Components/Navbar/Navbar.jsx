import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import { useContext } from "react";
import { DarkModeContext } from "../Context/Context";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";




const Navbar = () => {

    

  const { dispatch } = useContext(DarkModeContext);
  return (

    
    <div className="navbar">
      <div className="wrapper">

      <div className="left-arrow">
       
      <div className="list-icon">
        <NavLinks className="navlink"/>
       
        </div>
        <div className="logo">
        <Link to="/" >
        <span className="logo">ADMIN_PANNEL</span>
     </Link>
        </div>
      </div>

        <div className="right-nav">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU"
              alt=""
              className="avatar"
            />
          </div>
        </div>
        

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
      <hr />
     
    </div>
  );
};

export default Navbar;
