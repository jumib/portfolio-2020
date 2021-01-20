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

import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import AboutMe from './template/AboutMe';
import Nav from './component/Nav';
import Paper from '@material-ui/core/Paper';
import Header from './component/Header/Header';
import Project from './template/Project';
import Contact from './template/Contact';
import { Typography, Container, makeStyles } from '@material-ui/core';
import keyboard from './assets/keyboard.jpeg'
import topimg from './assets/topimg.jpeg'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(() => ({
  wrap: {
    height: '100vh',
    width: '100vw',
  },
  paper: {
    width: '100%',
    height: '100%',
    // margin : 'auto',
    textAlign: 'center',
    // padding : '40px 10px 0 10px',
    // justifyContent: 'center',
    // alignItems: 'center'
    // verticalAlign : 'middle'
  },
  main_box: {
    height: '90vh',
    textAlign: 'right',
    backgroundImage: `url(${topimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  font: {
    fontWeight: '900',
    fontSize: '2.9em',
    // transition: 'opacity 0.5s linea',
    color: '#343333',
    "&:hover": {
      color: '#EEC342'
    },
    padding: '80px 180px 0 0',
    margin: '0'

  }
}))

function App() {

  const classes = useStyles();

  return (
    <>
      {/* <Header/> */}
      {/* <Container maxWidth="lg">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '300px' }} />
    </Container> */}
      <div className={classes.wrap}>
        <div className={classes.main_box}>
          <Fade right>
            <p className={classes.font}>
              Brand-new , <br />
              Cooperative , <br />
              Sincere ,
            </p>
          </Fade>
        </div>
        <Nav />
      </div>
      <div>
        <Paper elevation={0} className={classes.paper}>
          <Switch>
            <Route exact path="/react-github-pages" component={AboutMe} />
            <Route path="/react-github-pages/aboutme" component={AboutMe}></Route>
            <Route path="/react-github-pages/project" component={Project}></Route>
            <Route path="/react-github-pages/contact" component={Contact}></Route>
          </Switch>
        </Paper>
      </div>
    </>
  );
}

export default App;