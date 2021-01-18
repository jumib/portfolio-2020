import { makeStyles } from '@material-ui/core'
import React from 'react'
import Modal from '@material-ui/core/Modal';
import proj_first from '../component/proj_first';

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
    button: {
        backgroundColor: 'yellow',
        width : '400px',
        height : '500px',
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
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <proj_first />
        {/* <SimpleModal /> */}
      </div>
    );

    return (
        <>
        <h1>WHAT I DO</h1><br/>
        {/* <div className={classes.first}/> */}
        <div>
            <button className={classes.button} type="button" onClick={handleOpen}>click me</button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
        </>
    )
}
export default Project