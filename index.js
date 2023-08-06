const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.set('port', process.env.PORT || 3000);

app.get('/', async (req, res) => {
    let data = null;
    let config = {
        method: 'get',
        url: 'https://api.apis.net.pe/v1/tipo-cambio-sunat',
        headers: {
            // 'Authorization': 'Bearer bsOzCDXPQZxOi5rhGbMuraa1vaL2w2lPjaFm6iYcM5DFle3hmRmbfZSZGdzA',
            'Accept': 'application/json'
            // ...data.getHeaders()
        }
    };

    axios(config).then((response) => {
        console.log('response', response)
        data = response.data;
        return res.send(data)
    }).catch ((error) => {
        console.log(error)
    })

    
})
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})