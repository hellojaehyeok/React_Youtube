import React, { useEffect, useState } from 'react';
import './app.css';
import SearchForm from './components/search_form/searchForm'
import MostVideoList from './components/most_videos/most_video_list/most_video_list'

function App() {

  const [videos, setVideos] = useState([]);


  useEffect(() =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=AIzaSyBOQKEpgnOUbKtgg6s95_ScGzOKxCoO7Fg", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div className="App">
      <SearchForm/>
      <MostVideoList videos={videos}/>
    </div>
  );
  
}

export default App;
