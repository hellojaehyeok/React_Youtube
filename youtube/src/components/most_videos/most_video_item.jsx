import React from 'react';

const MostVideoItem = (props) => {

    return(
        <h2>{props.video.snippet.title}</h2>
    );

};

export default MostVideoItem;