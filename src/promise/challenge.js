const fetchData = require('../utils/fetchData');
let API = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

console.log(':::::::::::::::::Example using promise:::::::::::::::::');
fetchData(API)
    .then(data =>{
        console.log(`Civilization: ${data.civilizations[0].name}`)
        return fetchData(data.civilizations[0].unique_unit[0])
    })
    .then(unique_unit =>{
        console.log(`First unique unit: ${unique_unit.name}`)
        return fetchData(unique_unit.created_in)
    })
    .then(created_in =>{
        console.log(`Created in: ${created_in.name}`)
    })
    .catch(err => console.error(err))