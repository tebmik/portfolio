import React from "react";
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';


const linkStyle = {
    padding:"0",
    position:"absolute",
    right:"30px",
    top:"50%",
    transform:"translateY(-50%)",
}

const link = {
    padding:"0 20px",
    fontSize:"16px",
    color:"#333",
}

const NavLinks = () => {
    return (
        <div className="navbar-links" style={linkStyle}>
            <List 
                style={{
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr 1fr 1fr",    
                }}>
                <ListItem button>
                    <Link style={link} to="/projects">Projects</Link>
                </ListItem>
                <ListItem button>
                    <Link style={link} to="/About">About</Link>
                </ListItem>
                <ListItem button>
                    <Link style={link} to="/Resume">Resume</Link>
                </ListItem>
                <ListItem button>
                    <Link style={link} to="/Contact">Contact</Link>
                </ListItem>
            </List>
        </div>
    );
}


export default NavLinks;