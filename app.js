const express = require('express');
const app = express();
const path = require('path');
const { seed } = require('./data/data');

//html main page
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

//front end index.js
app.use('/dist', express.static(path.join(__dirname, 'dist')));


//API routes
app.use('/api', require('./api'));

const syncAndSeed = async() => {
  try {
    await seed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch(err) {
    console.log(err);
  }
}
syncAndSeed();

