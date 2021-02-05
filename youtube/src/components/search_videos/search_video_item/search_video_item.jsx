import React from 'react';
import styles from './search_video_item.module.css'

const SearchVideoItem = ({ video, video : {snippet}, onVideoClick, display}) => {

    const displayType = display === 'onPlay' ? styles.onPlay : styles.offPlay;

    return(
        <li className={`${styles.videoList} ${displayType}`} onClick={() => onVideoClick(video)}>
            <img className={styles.thumbnail} src={snippet.thumbnails.high.url} alt="동영상 썸네일"/>
            <div>
                <h2 className={styles.title}>{snippet.title}</h2>
                <span className={styles.channelTitle}>{snippet.channelTitle}</span>
            </div>
        </li>
    )
};

export default SearchVideoItem;