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

const useStyles = makeStyles(() => ({
  root: {
    width : 1000,
    height : 3000,
    margin : 'auto',
    textAlign : 'center',
    padding : '10px'
  },
  main_box: {
    backgroundColor : '#cfe8fc',
    height : '500px',
    textAlign : 'center',
    padding : '50px',
    backgroundImage : "url('https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
    backgroundSize : "cover",
    backgroundPosition : "center bottom"
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
    <div className={classes.main_box}/>
    <Nav />
    <div>
    <Paper elevation={3} className={classes.root}>
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