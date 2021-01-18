import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

  return (
        <>
        <ol>
          <li><Link to='/react-github-pages'>aboutme</Link></li>
          <li><Link to='/react-github-pages/project'>project</Link></li>
          <li><Link to='/react-github-pages/contact'>contact</Link></li>
        </ol>
        </>
        );
}
export default Nav

