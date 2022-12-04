import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link className="home__link nocursor" to="about">
            About
          </Link>
          <Link className="home__link nocursor" to="store">
            Store
          </Link>
        </div>
        <div className="home__header--right">
          <Link className="home__link nocursor" to="gmail">
            Gmail
          </Link>
          <Link className="home__link nocursor" to="images">
            Images
          </Link>
          <AppsIcon className="nocursor"></AppsIcon>
          <Avatar className="nocursor"></Avatar>
        </div>
      </div>

      <div className="home__body">
        <img
          src="http://logo-logos.com/2016/11/Google_logo_logotype.png"
          alt="Google logo, logotype"
          className="home__body--img"
        />
        <Search ></Search>


        <div className="input__container">

        </div>
      </div>
    </div>
  );
}

export default Home;
