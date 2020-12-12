import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

  return (
        <>
        <ol>
          <li><Link to='/react-github-pages'>Home</Link></li>
          <li><Link to='/react-github-pages/aboutme'>aboutme</Link></li>
          <li><Link to='/react-github-pages/aboutme'>skills</Link></li>
          <li><Link to='/react-github-pages/aboutme'>project</Link></li>
          <li><Link to='/react-github-pages/aboutme'>contact</Link></li>
        </ol>
        </>
        );
}
export default Nav
