require('dotenv').config();

const express = require('express');
const expressFormidable = require('express-formidable');
const cors = require('cors');

const characters = require('./routes/characters');
const comics = require('./routes/comics');

const app = express();
const port = process.env.PORT || 8000;
app.use(expressFormidable());
app.use(cors());

app.use(characters());
app.use(comics());

app.all('*', (req, res) => {
  res.json({ error: { message: 'Page not found' } });
});

app.listen(port, () => {
  console.log(`Server start at port: ${port}`);
});
