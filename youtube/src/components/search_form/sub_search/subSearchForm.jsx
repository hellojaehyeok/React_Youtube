import React, {memo, useEffect, useState} from 'react';
import youtubeLogo from '../../../youtube_logo.png';
import styles from './subSearchForm.module.css'
import {
    NavLink
  } from 'react-router-dom'

const SubSearchForm = memo(
    (props) => {
    
        const [searchValue, setSearchValue] = useState("");
    
        const onSubmit = e =>{
            e.preventDefault();
            props.newSearchWord(searchValue);
        }
    
        useEffect(()=>{
            setSearchValue(props.searchWord);
        },[props.searchWord])
    
        return(
            <header className={styles.header}>
                <NavLink to='/' className={styles.logo}><img src={youtubeLogo} alt="유튜브 로고" className={styles.logoImg}/></NavLink>
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
    }
);

export default SubSearchForm;