API DOCUMENTATION= https://rapidapi.com/apidojo/api/hotels4/

EXAMPLE =

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
  headers: {
    'X-RapidAPI-Key': '51ba63a738mshc342e294c358014p14553bjsn60bec33c628c',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} 