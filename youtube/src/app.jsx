import React, { useEffect, useState } from 'react';
import './app.css';
import MainSearchForm from './components/search_form/main_search/mainSearchForm'
import SubSearchForm from './components/search_form/sub_search/subSearchForm'
import MostVideoList from './components/most_videos/most_video_list/most_video_list'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SearchVideoList from './components/search_videos/search_video_list/search_video_list';

function App() {

  const [videos, setVideos] = useState([]);
  const [word, setWord] = useState("");
  const [searchVideos, setSearchVideos] = useState([]);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const searchWord = word =>{
    setWord(word);
  }

  useEffect(() =>{
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=AIzaSyBOQKEpgnOUbKtgg6s95_ScGzOKxCoO7Fg", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(()=>{
    if(word == "")return;
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+ word +"&type=video&key=AIzaSyBOQKEpgnOUbKtgg6s95_ScGzOKxCoO7Fg", requestOptions)
    .then(response => response.json())
    .then(result => setSearchVideos(result.items))
    .catch(error => console.log('error', error));
  },[word])

  
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Search */}
          <Route path="/searchPage">
            <div className="searchPage">
              <SubSearchForm searchWord={word} newSearchWord={searchWord} />
              <SearchVideoList videos={searchVideos} />
            </div>
          </Route>

          {/* Main */}
          <Route path="/">
            <div className="mainPage">
              <MainSearchForm searchWord={searchWord}/>
              {/* <MostVideoList videos={videos}/> */}
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
