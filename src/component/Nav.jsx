import React from 'react';
import { Link } from 'react-scroll';
import './Nav.css';



const Nav = () => {


  return (
        <>
        <div className="Nav">
          <ul>
            <li>
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >About Me</Link>
          </li>
          <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Portfolio</Link>
          </li>
          <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Contact</Link>
          </li>
          </ul>
        </div>
        {/* <div className="Nav">
          <ul>
            <li><Link to='/react-github-pages'>About Me</Link></li>
            <li><Link to='/react-github-pages/project'>Portfolio</Link></li>
            <li><Link to='/react-github-pages/contact'>Contact</Link></li>
          </ul>
        </div> */}
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

