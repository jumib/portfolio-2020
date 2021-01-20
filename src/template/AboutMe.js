import { makeStyles } from '@material-ui/core'
import React from 'react'
import stacks from '../assets/stacks.png'
import { Grid } from '@material-ui/core'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles(() => ({
    who_section: {
        // height: '100vh',
        width: '100vw',
    },
    who: {
        padding: '30px 0 0 0',
        margin: '0 0 60px 0'
    },
    skills: {
        padding: '60px 0 0 0',
        margin: '0 0 60px 0'
    },
    main_img: {
        backgroundColor: 'red',
        height: '250px',
        width: '250px',
        borderRadius: '125px',
        backgroundImage: "url('https://avatars1.githubusercontent.com/u/67304434?s=400&u=0e349fb4c2b7abd889246bc5039a3839b43f5863&v=4')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 'auto'
    },
    // stack: {
    //     alignContent: 'center'
    // },
    p: {
        textAlign: 'left'
    },
    title: {
        color: 'rgb(221, 34, 9)',
        fontSize: '2.7em',
        fontWeight: '900'
      }
}))

const AboutMe = () => {

    const classes = useStyles()

    return (
        <>
            {/* <Fade> */}
                <div className={classes.who_section} id="aboutme">
                    <div className={classes.who}>
                    <p className={classes.title}>About Me</p><br />
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <div className={classes.main_img} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.p}>
                                <p>
                                    이름 : 백주미 <br />
                                    나이 : 1995 . 6 . 28 (만25세) <br />
                                    주소 : 서울시 마포구 <br />
                                    github : https://github.com/jumib <br />
                                </p>
                                <p>
                                    2020.11 혁신성장 청년인재 집중양성사업 프로젝트 발표회 최우수상(1위) / 비트캠프 <br />
                                    2020.06 - 2020.11 웹어플리케이션 융합형 AI 전문가 과정 / 비트캠프 <br />
                                    2014.03 - 2018.02 동양대학교 경찰행정학과 졸업 <br />
                                </p>
                                <p>
                                    2020.09 정보처리기사 필기 <br />
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    </div>
                </div>
                <div className={classes.skills}>
                    <h2>Skills </h2><br />
                    <div>
                        <img src={stacks} alt='stacks' height='400px' />
                    </div>
                </div>
                <hr />

            {/* </Fade> */}
        </>
    )
}

export default AboutMe