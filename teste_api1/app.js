const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({message: 'Funcionando!'}));

router.get('/aplicarValidacao/:valor/letra', (req, res) => {
    const valor = parseInt(req.params.valor)
    res.json({valorValidado: (letra - valorValidao)})
})

app.use('/', router)

if(require.main === module){
    app.listen(port)
    console.log('API funcionando!')
}

module.exports = app;