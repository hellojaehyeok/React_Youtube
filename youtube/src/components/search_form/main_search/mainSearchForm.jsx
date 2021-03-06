import React, {useState} from 'react';
import styles from './mainSearchForm.module.css'
import youtubeLogo from '../../../youtube_logo.png';
import '@fortawesome/fontawesome-free/js/all.js';
import {
    useHistory
  } from 'react-router-dom'

const MainSearchForm = (props) => {
    const history = useHistory();        
    const [searchValue, setSearchValue] = useState("");


    const onSubmit = e =>{
        e.preventDefault();
        if(searchValue == "") return;
        props.searchWord(searchValue);
        history.push("/searchPage");
    }


    return(
        <section className={styles.wrap}>
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
        </section>
    );
};

export default MainSearchForm;