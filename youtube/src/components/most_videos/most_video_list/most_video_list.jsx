import React from 'react';
import MostVideoItem from '../most_video_item/most_video_item';
import styles from './most_video_list.module.css'

const MostVideoList = ({videos, onClickMostVideo}) => {

    return(
        <div className={styles.listWrap}>
            <ul className={styles.listContainer}>
                {videos.map(video => <MostVideoItem key={video.id} onClickMostVideo={onClickMostVideo} video={video}/>)}
            </ul>
        </div>
    );
};

export default MostVideoList;