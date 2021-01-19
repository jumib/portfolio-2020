import { makeStyles } from '@material-ui/core'
import React from 'react'
import Modal from '@material-ui/core/Modal';
import proj_first from '../component/proj_first';
import flistock from '../assets/flistock.png'
import organic from '../assets/organic.png'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(() => ({
    first: {
        backgroundColor : 'blue',
        width : '400px',
        height : '500px',
    },
    button_1: {
        backgroundColor: 'white',
        width : '500px',
        height : '500px',
        backgroundImage: `url(${flistock})`,
        backgroundSize : "contain",
        backgroundPosition : "center",
        border: 'none',
        cursor: 'pointer',
        backgroundRepeat: 'no-repeat',
        
    },
    button_2: {
        backgroundColor: 'white',
        width : '500px',
        height : '500px',
        backgroundImage: `url(${organic})`,
        backgroundSize : "contain",
        backgroundPosition : "center",
        border: 'none',
        cursor: 'pointer',
        backgroundRepeat: 'no-repeat',
    },
    paper: {
        position: 'absolute',
        width : '600px',
        height : '500px',
        backgroundColor: 'white',
        border: '2px solid #000',
      },

}))

const Project = () => {

    const classes = useStyles()

    const [modalStyle] = React.useState(getModalStyle);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
  
    const handleOpen1 = () => {
      setOpen1(true);
    };

    const handleOpen2 = () => {
        setOpen2(true);
      };
  
    const handleClose1 = () => {
      setOpen1(false);
    };

    const handleClose2 = () => {
        setOpen2(false);
      };
  
    const body1 = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Flistock : AI fund manager</h2>
        <proj_first />
        {/* <SimpleModal /> */}
      </div>
    );

    const body2 = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Interior Site</h2>
          <proj_first />
          {/* <SimpleModal /> */}
        </div>
      );

    return (
        <>
        <h1>WHAT I DO</h1><br/>
        {/* <div className={classes.first}/> */}
        <div>
            <button className={classes.button_1} type="button" onClick={handleOpen1}>click me</button>
            <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body1}
            </Modal>
        </div><br/><br/><br/>
        <div>
            <button className={classes.button_2} type="button" onClick={handleOpen2}>click me</button>
            <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body2}
            </Modal>
        </div>
        </>
    )
}
export default Project