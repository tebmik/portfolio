import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

const linkStyle = {
  padding: "0",
  position: "absolute",
  right: "30px",
  top: "50%",
  transform: "translateY(-50%)"
};

const link = {
  padding: "0 20px",
  fontSize: "16px",
  color: "#333"
};

const NavLinks = () => {
  return (
    <div className="navbar-links" style={linkStyle}>
      <List
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr"
        }}
      >
        <a style={link} href="/#projects">
          <ListItem button>Portfolio</ListItem>
        </a>
        <a style={link} href="/#services">
          <ListItem button>About Me</ListItem>
        </a>
        <a style={link} href="/Resume.pdf" target="_blank">
          <ListItem button>
            <GetAppIcon />
            Resume
          </ListItem>
        </a>
        <Link style={link} to="/Contact">
          <ListItem button>Contact</ListItem>
        </Link>
      </List>
    </div>
  );
};

export default NavLinks;
