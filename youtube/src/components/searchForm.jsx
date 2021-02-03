import React, {useState} from 'react';
import youtubeLogo from '../youtube_logo.png';
import '@fortawesome/fontawesome-free/js/all.js';

const SearchForm = (props) => {
            
    const [searchValue, setSearchValue] = useState("");

    const onSubmit = e =>{
        e.preventDefault();
        // const foo = fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+searchValue+"&key=AIzaSyBOQKEpgnOUbKtgg6s95_ScGzOKxCoO7Fg")
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        const foo = {
            "kind": "youtube#searchListResponse",
            "etag": "mSEzyrpcVhAHfZ7HU3mTKhRjQFI",
            "nextPageToken": "CAEQAA",
            "regionCode": "KR",
            "pageInfo": {
              "totalResults": 1000000,
              "resultsPerPage": 1
            },
            "items": [
              {
                "kind": "youtube#searchResult",
                "etag": "7BF5u7o2UlrSl5wFdcwdBaNBnC0",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "_HmVqbJDzls"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T03:00:00Z",
                  "channelId": "UCLkAepWjdylmXSltofFvsYQ",
                  "title": "[PREVIEW] BTS (방탄소년단) &#39;2021 BTS WINTER PACKAGE&#39; SPOT #2",
                  "description": "Connect with BTS: https://ibighit.com/bts http://twitter.com/BTS_bighit http://twitter.com/BTS_twt http://www.facebook.com/bangtan.official ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/_HmVqbJDzls/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/_HmVqbJDzls/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/_HmVqbJDzls/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BANGTANTV",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T03:00:00Z"
                }
              }
            ]
          }

        console.log(foo.items)
    
    }


    return(
        <header>
            <div className="logo"><img src={youtubeLogo} alt="유튜브 로고" className="logo-img"/></div>
            <form action="#" onSubmit={onSubmit} className="search-form">
                <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="search-text"
                value = {searchValue}
                onChange = {e =>setSearchValue(e.target.value)}
                />
                <button type="submit" className="search-button"><i className="fas fa-search search-icon"></i></button>
            </form>
        </header>
    );
};

export default SearchForm;