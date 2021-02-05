import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import MainSearchForm from './components/search_form/main_search/mainSearchForm'
import SubSearchForm from './components/search_form/sub_search/subSearchForm'
import PlayVideo from './components/play_video/play_video'
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
  const [selectedVideo, setSelectedVideo] = useState(null)

  const searchWord = word =>{
    setWord(word);
  }

  const selectVideo = video =>{
    console.log(video);
    setSelectedVideo(video);
  }

  useEffect(() =>{
    youtube
      .mostPopular() //
      .then(videos => setMostVideos(videos));
  }, [])

  useEffect(()=>{
    if(word == "")return;
    youtube
      .search(word) //
      .then(videos => setSearchVideos(videos));
  },[word])



  
  return (
    <Router>
      <div className={styles.App}>
        <Switch>
          {/* Search */}
          <Route path="/searchPage">
            <div className={styles.searchPage}>
              <SubSearchForm searchWord={word} newSearchWord={searchWord} />

              <div className={styles.content}>
                {selectedVideo &&<div className={styles.playVideo}>
                   <PlayVideo selectedVideo={selectedVideo} />
                </div>}
                
                <div className={styles.list}>
                  <SearchVideoList videos={searchVideos} onVideoClick={selectVideo} display={selectedVideo? 'onPlay' : 'offPlay'}/>
                </div>
              </div>

            </div>
          </Route>

          {/* Main */}
          <Route path="/">
            <div className={styles.mainPage}>
              <MainSearchForm searchWord={searchWord}/>
              {/* <MostVideoList videos={mostVideos}/> */}
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
