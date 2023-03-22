import React from 'react';
import classes from './intro.module.css';

function Intro() {
    return (
        <div className='intro'>
            <div className={classes.head_half}>
                The official website of the sneakers shop "SNEAKERS"
            </div>
            <div className={classes.video_container}>
                <video className={classes.video1} autoPlay loop muted src={require("../video/video2.mp4")} />
            </div>
        </div>
    )
}

export default Intro