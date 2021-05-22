const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes');
const path = require('path');

const bodyParser = require('body-parser');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3000);

app.get('/',(req, res) => {
    res.send('Mi primer server!');
})

app.use('/api',apiRouter);

app.listen(app.get('port'), () =>{
    console.log('server up en el puerto: '+app.get('port'));
})

module.exports = app;
