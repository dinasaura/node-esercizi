import express from 'express';
import db from './db.mjs';

const app = express();
const port = 3006;

app.use(express.json());

app.get('/planets', (req, res) => {
  db.any('SELECT * FROM planets;').then(data => {
    res.json(data);
  }).catch(error => {
    console.error('error', error);
    res.status(500).send('Server Error');
  });
});


app.post('/planets', (req, res) => {
  const planetName = req.body.name;
  db.none('INSERT INTO planets (name) VALUES ($1);', planetName).then(() => {
    res.send('added');
  }).catch(error => {
    console.error('error planet:', error);
    res.status(500).send('Server Error');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
