import React from 'react';
import styles from './most_video_item.module.css'
import {
    BrowserRouter as Router,
    NavLink
  } from 'react-router-dom'

const MostVideoItem = ({video, video : {snippet}, onClickMostVideo}) => {



    return(
        <li onClick={() => onClickMostVideo(video)} className={styles.videoList}>
            <NavLink to="/searchPage">
                <img className={styles.thumbnail} src={snippet.thumbnails.high.url} alt="동영상 썸네일"/>
                <h2 className={styles.title}>{snippet.title}</h2>
                <span className={styles.channelTitle}>{snippet.channelTitle}</span>
            </NavLink>
        </li>
    );

};

export default MostVideoItem;