require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressLayout = require('express-ejs-layouts');

// upload imagge
const imageUpload = require('express-fileupload');
app.use(imageUpload());

// layout di view
app.use(expressLayout);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// buat file di public yang bisa lngsung di relokasi di views
app.use(express.static(__dirname + '/public'));

const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
