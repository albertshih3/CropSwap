const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/data', async (req, res) => {
  let data = req.body;

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-rdcsq/endpoint/data/v1/action/find',
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': 'jMoBVq9SZJleC59mT6ifNYa6cyHw3UHWXiLEWwRfizWVvaWbV7TTFwRUL6wqPOT3', 
      'Accept': 'application/json'
    },
    data : data
  };

  try {
    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
