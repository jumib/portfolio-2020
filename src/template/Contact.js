import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
    contact_section: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#F1D046'
    },
    contact: {
        padding: '30px'
    },
    innerbox: {
        height: '70vh',
        width: '70vw',
        margin: 'auto',
        padding: '30px 0 0 0',
        backgroundColor: '#FFF',
        borderRadius: '30px'

    },
    title: {
        color: 'rgb(221, 34, 9)',
        fontSize: '2.7em',
        fontWeight: '900'
      }
}))

const Contact = () => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.contact_section} id="contact">
                <div className={classes.contact}>
                    <div className={classes.innerbox}>
                    <p className={classes.title}>Contact</p>
                    <div className="contact_text">
                        <p><br />
                                ✉️ baekjumi@naver.com<br />
                                📞 010 6358 3832
                            </p>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contact