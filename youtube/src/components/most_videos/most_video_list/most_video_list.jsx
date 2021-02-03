import React, {useState} from 'react';
import MostVideoItem from '../most_video_item/most_video_item';
import styles from './most_video_list.module.css'

const MostVideoList = (props) => {

    return(
        <div className={styles.listWrap}>
            <ul className={styles.listContainer}>
                {props.videos.map(video => <MostVideoItem key={video.id} video={video}/>)}
            </ul>
        </div>
    );
};

export default MostVideoList;