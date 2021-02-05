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

function App({youtube}) {

  const [mostVideos, setMostVideos] = useState([]);
  const [word, setWord] = useState("");
  const [searchVideos, setSearchVideos] = useState([]);

  const searchWord = word =>{
    setWord(word);
  }

  useEffect(() =>{
    youtube
    .mostPopular()
    .then(videos => setMostVideos(videos));
  }, [])

  useEffect(()=>{
    if(word == "")return;
    youtube
    .search(word)
    .then(videos => setSearchVideos(videos));
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
              <MostVideoList videos={mostVideos}/>
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
