import axios from "axios";


 export const apiKey = 'UGFJMBQX8WK7YR4S';

const instance = axios.create({
    baseURL: 'https://www.alphavantage.co',
    headers:{
        "Content-type": "application/json",
    }
});

export  default instance