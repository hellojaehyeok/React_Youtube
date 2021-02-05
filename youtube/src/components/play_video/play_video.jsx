import React from 'react';
import styles from './play_video.module.css'

const PlayVideo = (props) =>{

    return(
        <section className={styles.playVideoWrap}>
            {props.selectedVideo.snippet.title}
        </section>
    );
};

export default PlayVideo;