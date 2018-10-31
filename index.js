const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'productos';

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
    var material = request.query.material;
    var categoria = request.query.categoria;
    var precio = request.query.precio;
    console.log('material seleccionado: ' + material);
    const collection = db.collection('artesanias');
    if (material !== null && material !== "" && material !== undefined) {
        console.log('entro a filtro de materiales ***********');
        collection.find({
            material: material,
        }).toArray(function (err, docs) {
            if (err) {
                console.error(err);
                return;
            }

            var product = findObjectByKey(docs, "titulo", link);

            var contexto = {
                products: docs,
            };
            if (product !== null && product !== undefined) {
                response.render('producto', product);
            } else {
                console.log("entro a renderizar con el filtro");
                response.render('tienda', contexto);
            }
        });
    } else if (categoria !== null && categoria !== "" && categoria !== undefined) {
        console.log('entro a filtro de materiales ***********');
        collection.find({
            categoria: categoria,
        }).toArray(function (err, docs) {
            if (err) {
                console.error(err);
                return;
            }

            var product = findObjectByKey(docs, "titulo", link);

            var contexto = {
                products: docs,
            };
            if (product !== null && product !== undefined) {

                //response.send("enviado");
                response.render('producto', product);
            } else {
                console.log("entro a renderizar con el filtro");
                response.render('tienda', contexto);
            }
        });
    } else if (precio !== null && precio !== "" && precio !== undefined) {
        console.log('entro a filtro de materiales ***********');
        collection.find({
            precio: {
                $lte: parseFloat(precio)
            },
        }).toArray(function (err, docs) {
            if (err) {
                console.error(err);
                return;
            }

            var product = findObjectByKey(docs, "titulo", link);

            var contexto = {
                products: docs,
            };
            if (product !== null && product !== undefined) {

                //response.send("enviado");
                response.render('producto', product);
            } else {
                console.log("entro a renderizar con el filtro");
                response.render('tienda', contexto);
            }
        });
    } else {
        collection.find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err);
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
    }

});


app.listen(5500, function () {
    console.log('el servidor esta escuchando en el puerto 5500');
});