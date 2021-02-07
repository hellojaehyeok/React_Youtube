import React, {memo} from 'react';
import SearchVideoItem from '../search_video_item/search_video_item'
import styles from './search_video_list.module.css'

const SearchVideoList = memo(
    ({videos, onVideoClick, display}) => {
        return(
            <ul className={styles.listWrap}>
                {videos.map(video => <SearchVideoItem onVideoClick={onVideoClick} key={video.id} video={video} display={display}/>)}
            </ul>
        )
    }
);

export default SearchVideoList;