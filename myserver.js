const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employees');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection string
const dbURI = 'mongodb+srv://<admin>:<Admin123>@</mongoDB>/employeeDirectory?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => console.log('Server started on port 3000'));
    })
    .catch(err => console.log(err));

// Routes
app.use('/employees', employeeRoutes);
