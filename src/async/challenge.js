const fetchData = require('../utils/fetchData');
let API = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const unique_unit = await fetchData(data.civilizations[0].unique_unit[0]);
        const created_in = await fetchData(unique_unit.created_in);
        console.log(`Civilization: ${data.civilizations[0].name}`);
        console.log(`First unique unit: ${unique_unit.name}`);
        console.log(`Created in: ${created_in.name}`);
    } catch (error) {
        console.error(error)
    }
}
console.log(':::::::::::::::::Example using async-await:::::::::::::::::');
console.log('Before');
anotherFunction(API);
console.log('After');