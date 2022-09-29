import axios from 'axios';

const base_url = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    method: 'GET',
    url: base_url,
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '318ff75a31mshd481a8e23509b6cp1b35d0jsnc21d18285fad',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data}  = await axios.get(`${base_url}/${url}`, options);

    return data;
  }