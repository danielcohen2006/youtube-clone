import * as React from 'react';
import { Link } from "react-router-dom";


export const NavBar = () => {
    return (
      <div>
        <Link to="home">
            <p> home</p>
        </Link>
        <Link to="post">
            <p> post</p>
        </Link>
        <Link to="sub">
            <p> sub</p>
        </Link>
      </div>
    );
  }

