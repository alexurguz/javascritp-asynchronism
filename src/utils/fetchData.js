const fetch = require('node-fetch');

let API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url) => {
    return fetch(url)
    .then(res => res.json());
}

module.exports = fetchData;

