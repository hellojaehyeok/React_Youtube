import React from 'react';
import styles from './play_video.module.css'

const PlayVideo = ({selectedVideo, selectedVideo : {snippet}}) =>{

    console.log(selectedVideo);

    return(
        <section className={styles.playVideoWrap}>
            <iframe
                className={styles.video}
                type="text/html"
                width="100%" 
                height="500px"
                src={"https://www.youtube.com/embed/" + selectedVideo.id}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <h1 className={styles.title}>{snippet.title}</h1>
            <h2 className={styles.channelTitle}>{snippet.channelTitle}</h2>
            <pre className={styles.description}> {snippet.description} </pre>
        </section>
    );
};

export default PlayVideo;