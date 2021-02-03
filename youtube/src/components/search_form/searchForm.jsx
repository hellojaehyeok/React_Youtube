import React, {useState} from 'react';
import youtubeLogo from '../../youtube_logo.png';
import '@fortawesome/fontawesome-free/js/all.js';

const SearchForm = (props) => {
            
    const [searchValue, setSearchValue] = useState("");

    const onSubmit = e =>{
        e.preventDefault();
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+searchValue+"&key=AIzaSyBOQKEpgnOUbKtgg6s95_ScGzOKxCoO7Fg")
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    return(
        <section className="search-wrap">
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
        </section>
    );
};

export default SearchForm;