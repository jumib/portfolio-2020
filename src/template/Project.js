import { makeStyles } from '@material-ui/core'
import React from 'react'
import Modal from '@material-ui/core/Modal';
import flistock from '../assets/flistock.png'
import organic from '../assets/organic.png'
import login from '../assets/flistock/login.png'
import signup from '../assets/flistock/signup.png'

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
        padding: '20px'
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
        <div>
            <h2 id="simple-modal-title">Flistock : AI fund manager</h2>
            <p>
                <th>프로젝트 명</th><br/>
                <td> : 플리스톡 (FLISTOCK)</td><br/>
                <th>맡은 역할</th><br/>
                <td> : 프론트엔드, 팀장</td><br/>
                <th>소개</th><br/>
                <td> : 종목을 검색하면 인공지능을 기반으로 해당 종목에 대한 다양한 정보를 보여주는 서비스입니다.</td><br/>
                <th>설명</th><br/>
                <td> : 프론트엔드를 맡아 플라스크에서 보낸 데이터를 react를 통해 구현하였습니다. </td>
            </p>
                <image src={login} alt='login' height='20px'/><br/>
                <image src={signup} alt='signup' height='20px'/>
            
        </div>
        {/* <SimpleModal /> */}
      </div>
    );

    const body2 = (
    <div style={modalStyle} className={classes.paper}>
        <div>
            <h2 id="simple-modal-title">Interior Site</h2>
            <p>
                <th>프로젝트 명</th><br/>
                <td> : 인테리어 커뮤니티 (개인 프로젝트) </td><br/>
                <th>맡은 역할</th><br/>
                <td> : 프론트엔드, 백엔드</td><br/>
                <th>소개</th><br/>
                <td> : 게시판을 포함한 인테리어 커뮤니티 서비스입니다.</td>
            </p>
        </div>
        {/* <SimpleModal /> */}
    </div>
    );

    return (
        <>
        <h1>WHAT I DO</h1><br/>
        <p>카드를 클릭하여 프로젝트에 대한 자세한 설명을 보실 수 있습니다</p>
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