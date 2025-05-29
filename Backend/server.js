const app = require('./src/app');
require('dotenv').config();

app.listen(3000, () => {
    console.log('Server is Live');
});