import axios from 'axios';


class Youtube{
    constructor(key){
        this.youtube = axios.create({
            baseURL: "https://youtube.googleapis.com/youtube/v3",
            params: {key: key},
        });
    }

    async mostPopular(){
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 5,
            }
        })
        return response.data.items;
    }

    async search(query){
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 24,
                type: 'video',
                q: query,
            }
        })
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }



    async videoDetails(id){
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                part: 'contentDetails',
                part: 'statistics',
                id: id,
            }
        })
        return response.data.items;
    }

    async channel(id){
        const response = await this.youtube.get('channels', {
            params: {
                part: 'snippet',
                part: 'statistics',
                id: id,
            }
        })
        return response.data.items;
    }
}

export default Youtube;