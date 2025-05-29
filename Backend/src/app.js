const express = require('express');
const aiRoutes = require('./routes/ai.routes.js');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());



app.use('/ai',aiRoutes);

module.exports = app;