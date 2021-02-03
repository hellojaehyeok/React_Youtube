import React, { useEffect, useState } from 'react';
import './app.css';
import MainSearchForm from './components/search_form/main_search/mainSearchForm'
import SubSearchForm from './components/search_form/sub_search/subSearchForm'
import MostVideoList from './components/most_videos/most_video_list/most_video_list'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

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


  useEffect(() =>{
  }, [])

  
  return (
    <Router>
      <div className="App">
        <Switch>

          {/* Search */}
          <Route path="/searchPage">
            <div className="searchPage">
              <SubSearchForm />
            </div>
          </Route>

          {/* Main */}
          <Route path="/">
            <div className="mainPage">
              <MainSearchForm/>
              <MostVideoList videos={videos}/>
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
