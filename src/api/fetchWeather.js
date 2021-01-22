import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=15ae8f329f1c87474f5764d2d00f8483';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL+query+API_KEY)

    return data;
}