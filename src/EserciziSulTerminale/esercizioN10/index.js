import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'express-async-errors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3018;

app.use(express.json());

app.use(morgan('dev'));

let planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});
app.get('/', (req, res) => {
    res.send('Hello, Home');
  });  
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
