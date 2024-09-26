const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const songRoutes = require('./routes/songRoutes');
const indexRoutes = require('./routes/indexRoutes');

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.use('/', indexRoutes);
app.use('/', songRoutes);

// Start the server
const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
