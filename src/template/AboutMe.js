import { makeStyles } from '@material-ui/core'
import React from 'react'
import stacks from '../assets/stacks.png'

const useStyles = makeStyles(() => ({
    main_img: {
        backgroundColor : 'red',
        height : '250px',
        width : '250px',
        borderRadius : '125px',
        backgroundImage : "url('https://avatars1.githubusercontent.com/u/67304434?s=400&u=0e349fb4c2b7abd889246bc5039a3839b43f5863&v=4')",
        backgroundSize : "cover",
        backgroundPosition : "center",
        margin : 'auto'
    },
    stack: {
        alignContent : 'center'
    }
}))

const AboutMe = () => {

    const classes = useStyles()

    return (
        <>
        <h1>ABOUT ME</h1><br/>
        <div>
            <h2>Profile </h2><br/>
        <div className={classes.main_img}/>
        <div>
            <h4>안녕하세요 웹개발자 백주미입니다</h4>
            <p>
                이름 : 백주미 <br/>
                나이 : 1995 . 6 . 28 (만25세) <br/>
                주소 : 서울시 마포구 <br/>
                github : https://github.com/jumib <br/>
            </p>
        </div><br/><br/><br/>
        </div><hr/>
        <div>
            <h2>Stack </h2><br/>
            <div className={classes.stack}>
                <img src={stacks} alt='stacks' height='400px'/>
            </div>
        </div><br/><br/><br/>
        <div><hr/>
            <h2>History </h2><br/>
            <p>
                2020.11 혁신성장 청년인재 집중양성사업 프로젝트 발표회 최우수상(1위) / 비트캠프 <br/>
                2020.06 - 2020.11 웹어플리케이션 융합형 AI 전문가 과정 / 비트캠프 <br/>
                2014.03 - 2018.02 동양대학교 경찰행정학과 졸업 <br/>
            </p>
        </div><br/><br/><br/>
        <div><hr/>
            <h2>License </h2><br/>
            <p>
                2020.09 정보처리기사 필기 <br/>
            </p>
        </div>
        </>
    )
}

export default AboutMe