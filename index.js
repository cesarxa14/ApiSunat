const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.set('port', process.env.PORT || 3000);
app.use(cors())
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})

// RUTA PARA OBTENER DATOS DE LA SUNAT
app.get('/', async (req, res) => {
    try {
        let data = null;
        let config = {
            method: 'get',
            url: 'https://api.apis.net.pe/v1/tipo-cambio-sunat',
            headers: {
                'Accept': 'application/json'
            }
        };

        axios(config).then((response) => {
            console.log('response', response)
            data = response.data;
            return res.send(data)
        }).catch ((error) => {
            console.log(error)
        })
    } catch(err) {
        console.log(err);
    }
    

    
})
