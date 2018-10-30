const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'Artesanias';

const client = new MongoClient(url);
var db = null;

client.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }

    db = client.db(dbName);

});

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {
    response.render('index');
});

app.get('/', function (request, response) {
    response.render('producto');
});

app.get('/tienda', function (request, response) {
    var link = request.query.producto;
    const collection = db.collection('Productos');
    collection.find({}).toArray(function (err, docs) {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }

        var product = findObjectByKey(docs, "titulo", link);

        var contexto = {
            products: docs,
        };
        if (product !== null && product !== undefined) {
            response.render('producto', product);
        } else {
            response.render('tienda', contexto);
        }
    });
});


app.get('/agregarDocumento', function (request, response) {

    const collection = db.collection('artesanias');
    collection.insert({
        tittle: 'ksdk',
        material: 'dakd',
        precio: 'hjk',

    }, function (err, result) {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        response.send('documento agregado')
    });
});



app.listen(5500, function () {
    console.log('el servidor esta escuchando en el puerto 5500');
});