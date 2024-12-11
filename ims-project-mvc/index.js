const express = require('express');
const methodOverride = require('method-override');
const itemRoutes = require('./server/routes/itemRoutes');

const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ims-project', itemRoutes);

app.listen(3000, () => {
    console.log("Running on port 3000.");
})
