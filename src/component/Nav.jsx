import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



const Nav = () => {


  return (
        <>
        <div className="Nav">
          <ul>
            <li><Link to='/react-github-pages'>About Me</Link></li>
            <li><Link to='/react-github-pages/project'>Portfolio</Link></li>
            <li><Link to='/react-github-pages/contact'>Contact</Link></li>
          </ul>
        </div>
        {/* <div className="Nav">
          <ul>
            <li><a href='/react-github-pages'>aboutme</a></li>
            <li><a href='/react-github-pages/project'>project</a></li>
            <li><a href='/react-github-pages/contact'>contact</a></li>
          </ul>
        </div> */}
        </>
        );
}
export default Nav

