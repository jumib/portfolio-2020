// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react'
import Main from './template/Main';
import { Route, Switch } from "react-router-dom";
import AboutMe from './template/AboutMe';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import { purple } from '@material-ui/core/colors';
import Nav from './component/Nav';
import Header from './component/Header/Header';


function App() {

  return (
    <>
    <Header/>
    <Nav />
    <Switch>
      <Route exact path="/react-github-pages" component={Main} />
      <Route path="/react-github-pages/aboutme" component={AboutMe}></Route>
    </Switch>
    </>
  );
}

export default App;