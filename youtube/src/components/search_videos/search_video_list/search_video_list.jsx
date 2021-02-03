import React from 'react';
import SearchVideoItem from '../search_video_item/search_video_item'
import styles from './search_video_list.module.css'

const SearchVideoList = (props) => {


    return(
        <ul className={styles.listWrap}>
            {props.videos.map(video => <SearchVideoItem key={video.id} video={video} />)}
        </ul>
    )
};

export default SearchVideoList;