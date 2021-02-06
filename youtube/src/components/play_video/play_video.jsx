import React from 'react';
import styles from './play_video.module.css'
import '@fortawesome/fontawesome-free/js/all.js';

const PlayVideo = ({selectedVideo, selectedVideo : {snippet}, videoDetails}) =>{

    console.log(videoDetails);

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
            <div className={styles.detailNumber}>
                <span className={styles.views}>조회수 . {videoDetails.statistics.viewCount}</span>
                <ul className={styles.countWrap}>
                    <li className={styles.good}><i class="far fa-smile"></i> {videoDetails.statistics.likeCount}</li>
                    <li className={styles.bad}><i class="far fa-angry"></i> {videoDetails.statistics.dislikeCount}</li>
                </ul>
            </div>
            <h1 className={styles.title}>{snippet.title}</h1>
            <h2 className={styles.channelTitle}>{snippet.channelTitle}</h2>
            <pre className={styles.description}> {videoDetails.snippet.description} </pre>
        </section>
    );
};

export default PlayVideo;