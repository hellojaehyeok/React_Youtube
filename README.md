# React_Youtube
YouTube Data API v3를 활용하여 개인 유튜브 웹사이트를 제작하였습니다.        
현재 할당량 초과로 제작을 잠시 멈추었습니다.        
 

<hr />

## 사용 언어
 - HTML, CSS, PostCSS, JavaScript, React


### PostCSS
PostCSS를 사용한 이유는 크로스 브라우징이 용이하고       
현재 많은 개발자들이 PostCSS를 활용하여 프로젝트를 진행하기 때문입니다.        
사용하고자 하는 jsx 파일 상단에 아래의 코드를 추가합니다.        

    import styles from './경로'

그 후 className="" 을 사용하는 것 대신 className={style.클래스 이름} 을 사용합니다.          

<hr />


## 웹사이트 구성
메인 페이지와 검색 결과 페이지 두 개를 제작하였습니다.          
React Router를 사용하여 페이지 간 이동을 하였습니다.        


<hr />



### Main Page - Form
화면 중앙에는 유튜브 로고 검색창을 두었고 아래에는     
유튜브에서 가장 인기 있는 영상 5개를 가져와 보여주었습니다.      

검색 값을 받아오기 위하여 searchValue를 만들었고        
onChange에 setSearchValue를 넣어 타이핑 시 값이 계속 바뀌도록 하였습니다.           

onSubmit 시에는 form의 특성상 새로 고침되는 것을 방지하기 위하여      
e.preventDefault(); 를 사용하였습니다.         
props.searchWord(searchValue);를 사용하여 사용자가 입력한 값을      
부모 요소로 전달하였습니다.      



mainSearchForm.jsx

    const [searchValue, setSearchValue] = useState("");

    const onSubmit = e =>{
        e.preventDefault();
        props.searchWord(searchValue);
        document.querySelector('#searchLink').click();
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
                <NavLink id="searchLink" className={styles.searchLink} to="/searchPage">Link</NavLink>
            </form>
        </section>
    );



<hr />


### Main Page - Video List
useEffect를 사용하여 창이 로드가 되면 json 파일을 가져오도록 하였습니다.      
https://youtube.googleapis.com/youtube/v3/search? ~~~ 에서 원하는 데이터를 가져온 후      
.then(response => response.json()) 으로 파일을 변환시켰습니다.     
.then(result => setVideos(result.items)) 에서 json 파일 안에 있는 원하는 부분을 가져와 setVideos에 넣었습니다.      
도중에 오류가 생길 경우에는 catch를 사용하여 컨트롤을 하였습니다.     
이렇게 받아온 데이터를 props로 부모 요소에서 자식 요소한테 전달하였습니다.       


app.jsx

    useEffect(() =>{
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=구글코드", requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    }, [])
    .
    .
    .
    <Route path="/">
        <div className="mainPage">
            <MainSearchForm searchWord={searchWord}/>
            <MostVideoList videos={videos}/>
        </div>
    </Route>


app.jsx에서 데이터를 받아온 most_video_list.jsx에서는         
map을 사용하여 MostVideoItem를 제작하였습니다.         

most_video_list.jsx

    return(
        <div className={styles.listWrap}>
            <ul className={styles.listContainer}>
                {props.videos.map(video => <MostVideoItem key={video.id} video={video}/>)}
            </ul>
        </div>
    );


most_video_list.jsx에서 데이터를 받아온 most_video_item.jsx에서는      
필요한 정보를 수집하여 li 요소를 리턴하였습니다. 

most_video_item.jsx

    return(
        <li className={styles.videoList}>
            <img className={styles.thumbnail} src={snippet.thumbnails.high.url} alt="동영상 썸네일"/>
            <h2 className={styles.title}>{snippet.title}</h2>
            <span className={styles.channelTitle}>{snippet.channelTitle}</span>
        </li>
    );



<hr />


### Search Page - Header
헤더에는 유튜브 로고와 검색창을 배치하였습니다.       
로고를 클릭 시 React Router를 활용하여 메인 페이지로 이동하게 하였습니다.        

메인 페이지에서 데이터를 받은 app.jsx에서는 해당 단어는 SubSearchForm으로 전달하고,        
데이터를 활용하여 받아온 파일은 json으로 변환한 후 SearchVideoList로 전달하였습니다.       

app.jsx

    const searchWord = word =>{
        setWord(word);
    }

    useEffect(()=>{
        if(word == "")return;
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+ word +"&type=video&key=구글코드", requestOptions)
        .then(response => response.json())
        .then(result => setSearchVideos(result.items))
        .catch(error => console.log('error', error));
    },[word])
    .
    .
    .
    <Route path="/searchPage">
        <div className="searchPage">
            <SubSearchForm searchWord={word} newSearchWord={searchWord} />
            <SearchVideoList videos={searchVideos} />
        </div>
    </Route>



app.jsx에서 데이터를 받아온 subSearchForm.jsx에서는        
검색창에 사용자가 입력했던 검색어를 그대로 넣어놔        
어떤 것을 검색했었는지 알 수 있게 하였습니다.       
다시 검색을 할 경우 메인 페이지에서 검색을 하였던 것과 마찬가지로 app.jsx에       
값을 보내어 영상들이 바뀌도록 하였습니다.       

subSearchForm.jsx

    const onSubmit = e =>{
        e.preventDefault();
        props.newSearchWord(searchValue);
    }

    useEffect(()=>{
        setSearchValue(props.searchWord);
    },[])

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



<hr />


### Search Page - Video List

메인 페이지와 동일한 형식으로 제작하였습니다.        
search_video_list.jsx에서 map을 활용하여 SearchVideoItem을 제작하였습니다.        

search_video_list.jsx

    return(
        <ul className={styles.listWrap}>
            {props.videos.map(video => <SearchVideoItem key={video.id} video={video} />)}
        </ul>
    )

search_video_list.jsx에서 데이터를 받아온 search_video_item.jsx에서는        
필요한 정보를 수집하여 li 요소를 리턴하였습니다. 

search_video_item.jsx

    return(
        <li className={styles.videoList}>
            <img className={styles.thumbnail} src={snippet.thumbnails.high.url} alt="동영상 썸네일"/>
            <h2 className={styles.title}>{snippet.title}</h2>
            <span className={styles.channelTitle}>{snippet.channelTitle}</span>
        </li>
    )


<hr />

송재혁입니다.      
감사합니다.