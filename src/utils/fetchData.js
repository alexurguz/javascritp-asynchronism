let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
const fetch = require('node-fetch');

let API = 'https://rickandmortyapi.com/api/character/';
/*
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                ( xhttp.status === 200 )
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error::::'+url_api))
            }
        });
        xhttp.send();
    });
}
*/
const fetchData = (url) => {
    return fetch(url)
    .then(res => res.json());
}

module.exports = fetchData;

