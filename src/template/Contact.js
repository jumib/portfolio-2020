import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
    wrap: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'red'
    },
    contact: {
        padding: '30px'
    }
}))

const Contact = () => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.wrap}>
                <div className={classes.contact}>
                    <h1> HOW TO REACH ME</h1>
                </div>
            </div>
        </>
    )
}
export default Contact