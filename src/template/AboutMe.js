import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
    main_img: {
        backgroundColor : 'red',
        height : '250px',
        width : '250px',
        borderRadius : '125px',
        backgroundImage : "url('https://avatars1.githubusercontent.com/u/67304434?s=400&u=0e349fb4c2b7abd889246bc5039a3839b43f5863&v=4')",
        backgroundSize : "cover",
        backgroundPosition : "center",
        margin : '40px 0px 0px 100px'
    }
}))

const AboutMe = () => {

    const classes = useStyles()

    return (
        <>
        <h1>ABOUT ME</h1>
        <div>
            <h3>profile</h3>
        <div className={classes.main_img}/>
        <div>
            <p>
                이름 : 백주미 <br/>
                나이 : 1995 . 6 . 28 (만25세) <br/>
                주소 : 서울시 마포구 <br/>
                github : https://github.com/jumib <br/>
            </p>
        </div>
        </div>
        <div>
            <h3>skills</h3>
            <p>
            </p>
        </div>
        <div>
            <h3>history</h3>
            <p>
            </p>
        </div>
        </>
    )
}

export default AboutMe