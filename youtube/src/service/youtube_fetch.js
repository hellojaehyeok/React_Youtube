
class Youtube{
    constructor(key){
        this.key=key;
        this.getRequestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    }

    async mostPopular(){
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=" + this.key, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(query){
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=" + query + "&type=video&key=" + this.key, this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }

    async videoDetails(id){
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=" + id + "&key=" + this.key, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    async channel(id){
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id="+ id +"&key=" + this.key, this.getRequestOptions)
        const result = await response.json();
        return result.items;
    }
}

export default Youtube;