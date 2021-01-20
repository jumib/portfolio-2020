import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Modal from '@material-ui/core/Modal';

// =========================== flistock =========================== 
import flistock from '../assets/flistock.png'
import login from '../assets/flistock/login.png'
import signup from '../assets/flistock/signup.png'
import search from '../assets/flistock/search.png'
import finance from '../assets/flistock/finance.png'
import covid from '../assets/flistock/covid.png'
import stock from '../assets/flistock/stock.png'
import emotion from '../assets/flistock/emotion.png'
import lstm from '../assets/flistock/lstm.png'
import predict from '../assets/flistock/predict.png'
import economic from '../assets/flistock/economic.png'

// =========================== interior =========================== 
import organic from '../assets/organic.png'
import crawling from '../assets/interior/crawling.png'
import drawer from '../assets/interior/drawer.png'
import list from '../assets/interior/list.png'
import login2 from '../assets/interior/login2.png'
import modify from '../assets/interior/modify.png'
import read from '../assets/interior/read.png'
import register from '../assets/interior/register.png'
import signup2 from '../assets/interior/signup2.png'




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`

  };
}

const useStyles = makeStyles(() => ({
  project_section: {
    height: '100vh',
    width: '100vw',
  },
  proj: {
    padding: '30px'
  },
  
  button_1: {
    backgroundColor: 'white',
    width: '400px',
    height: '400px',
    backgroundImage: `url(${flistock})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    border: 'none',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    "&:hover": {
      border: '1px solid grey',
      borderRadius: 10,
      boxShadow: '0px 0px 10px 0px grey',
    }
  },
  button_2: {
    backgroundColor: 'white',
    width: '400px',
    height: '400px',
    backgroundImage: `url(${organic})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    border: 'none',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    "&:hover": {
      border: '1px solid grey',
      borderRadius: 10,
      boxShadow: '0px 0px 10px 0px grey',
    }
  },
  paper: {
    position: 'absolute',
    width: '1100px',
    height: '600px',
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: '40px',
    overflow: 'auto'
  },
  title: {
    color: 'rgb(221, 34, 9)',
    fontSize: '2.7em',
    fontWeight: '900'
  }

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
          <th>프로젝트 명</th><br />
          <td> : 플리스톡 (FLISTOCK)</td><br />
          <th>맡은 역할</th><br />
          <td> : 프론트엔드, 팀장</td><br />
          <th>소개</th><br />
          <td> : 종목을 검색하면 인공지능을 기반으로 해당 종목에 대한 다양한 정보를 보여주는 서비스입니다.</td><br />
          <th>설명</th><br />
          <td> : 프론트엔드를 맡아 플라스크에서 보낸 데이터를 react를 통해 구현하였습니다. </td>
        </p>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <img src={flistock} alt='flistock' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={search} alt='search' height='300px' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={login} alt='login' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={signup} alt='signup' height='300px' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={finance} alt='login' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={emotion} alt='signup' height='300px' />
            </Grid><Grid item xs={12} sm={6}>
              <img src={covid} alt='login' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={stock} alt='signup' height='300px' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={lstm} alt='login' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={predict} alt='signup' height='300px' width='500px' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={economic} alt='signup' height='300px' width='500px' />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* <SimpleModal /> */}
    </div>
  );

  const body2 = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <h2 id="simple-modal-title">Interior Site</h2>
        <p>
          <th>프로젝트 명</th><br />
          <td> : 인테리어 커뮤니티 (개인 프로젝트) </td><br />
          <th>맡은 역할</th><br />
          <td> : 프론트엔드, 백엔드</td><br />
          <th>소개</th><br />
          <td> : 게시판을 포함한 인테리어 커뮤니티 서비스입니다.</td>
        </p>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <img src={organic} alt='flistock' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={login2} alt='search' height='300px' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={signup2} alt='login' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={drawer} alt='signup' height='300px' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={list} alt='login' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={register} alt='signup' height='300px' />
            </Grid><Grid item xs={12} sm={6}>
              <img src={read} alt='login' height='300px' /><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={modify} alt='signup' height='300px' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={crawling} alt='login' height='300px' /><br />
            </Grid>

          </Grid>
        </div>
      </div>
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <>
      <div className={classes.project_section} id="portfolio">
        <div className={classes.proj}>
          <p className={classes.title}>Portfolio</p><br />
          <p>카드를 클릭하여 프로젝트에 대한 자세한 설명을 보실 수 있습니다</p><br />
          {/* <div className={classes.first}/> */}
          <div>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <button className={classes.button_1} type="button" onClick={handleOpen1}>click me</button>
                <Modal
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body1}
                </Modal>
              </Grid>
              <Grid item xs={12} sm={6}>
                <button className={classes.button_2} type="button" onClick={handleOpen2}>click me</button>
                <Modal
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body2}
                </Modal>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}
export default Project

// import React, { useState } from 'react'
// import proj_first from '../component/proj_first'

// const Project = () => {

//     const { state, setState } = useState(false)

//     // const state = { isModalOpen: false }

//     const openModal = () => {
//         setState(true)
//     }

//     // const closeModal = () => {
//     //     this.setState({ isModalOpen : false })
//     // }

//     return (
//         <>
//         <button onClick={openModal}>Modal Open</button>
//         {/* <proj_first isOpen={this.state.isModalOpen} close={this.closeModal} /> */}
//         </>
//     )
// }

// export default Project