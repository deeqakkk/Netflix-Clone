import { FaSearchengin, FaSortDown, FaBell } from "react-icons/fa";
import React, {  useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled,setIsScrolled]=useState(false);
  // it gonna listen window scrolling
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true);
    return ()=>(window.onscroll==null)
  };
  
  return (
    <div className={isScrolled? "navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          ></img>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>TV Shows</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FaSearchengin className="icon" />
          <span>KID</span>
          <FaBell className="icon" />
          

          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
          
            <FaSortDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
