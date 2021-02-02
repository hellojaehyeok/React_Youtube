import React, {useState} from 'react';
import youtubeLogo from './youtube_logo.png';

const SearchForm = (props) => {
            
    const [searchValue, setSearchValue] = useState("");

    return(
        <header>
            <div className="logo"><img src={youtubeLogo} alt="유튜브 로고" className="logo-img"/></div>
            <form action="#" className="search-form">
                <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="search-text"
                value = {searchValue}
                onChange = {e =>setSearchValue(e.target.value)}
                />
                <button className="search-button">검색</button>
            </form>
        </header>
    );
};

export default SearchForm;