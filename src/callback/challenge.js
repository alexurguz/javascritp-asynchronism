let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

let API = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if ( xhttp.status === 200 ) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error::::'+url_api);
                return callback(error, null);
            }
        }
    };

    xhttp.send();
}
console.log(':::::::::::::::::Example using callbacks:::::::::::::::::');
fetchData(API, function (error1, data1) {
    if(error1) return console.error('Error1::: ',error1);
    fetchData(data1.civilizations[0].unique_unit[0], function (error2, data2) {
        if(error2) return console.error('Error2::: ',error2);
        fetchData(data2.created_in, function (error3, data3) {
            if(error3) return console.error('Error3::: ',error3);
            console.log(`Civilization: ${data1.civilizations[0].name}`);
            console.log(`First unique unit: ${data2.name}`);
            console.log(`Created in: ${data3.name}`);
        });
    })
});