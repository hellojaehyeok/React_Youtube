import React, {useState} from 'react';
import MostVideoItem from './most_video_item';


const MostVideoList = (props) => {

    return(
        <ul>
            {props.videos.map(video => <MostVideoItem key={video.id} video={video} />)}
        </ul>
    );
};

export default MostVideoList;