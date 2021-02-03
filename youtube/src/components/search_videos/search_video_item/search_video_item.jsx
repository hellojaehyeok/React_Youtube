import React from 'react';
import styles from './search_video_item.module.css'

const SearchVideoItem = ({video : {snippet}}) => {
    return(
        <li className={styles.videoList}>
            <img className={styles.thumbnail} src={snippet.thumbnails.high.url} alt="동영상 썸네일"/>
            <h2 className={styles.title}>{snippet.title}</h2>
            <span className={styles.channelTitle}>{snippet.channelTitle}</span>
        </li>
    )
};

export default SearchVideoItem;