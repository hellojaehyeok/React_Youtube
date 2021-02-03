import React, {useState} from 'react';
import youtubeLogo from '../../../youtube_logo.png';
import styles from './subSearchForm.module.css'


const SubSearchForm = (props) => {
    
    const [searchValue, setSearchValue] = useState("");

    const onSubmit = e =>{
        e.preventDefault();
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+searchValue+"&key=AIzaSyBOQKEpgnOUbKtgg6s95_ScGzOKxCoO7Fg")
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    return(
        <header className={styles.header}>
            <div className={styles.logo}><img src={youtubeLogo} alt="유튜브 로고" className={styles.logoImg}/></div>
            <form action="#" onSubmit={onSubmit} className={styles.searchForm}>
                <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className={styles.searchText}
                value = {searchValue}
                onChange = {e =>setSearchValue(e.target.value)}
                />
                <button type="submit" className={styles.searchButton}><i className="fas fa-search"></i></button>
            </form>
        </header>
    );
};

export default SubSearchForm;