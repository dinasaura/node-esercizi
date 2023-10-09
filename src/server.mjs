import express from 'express';
import db from './db.mjs';
import multer from 'multer';

const app = express();
const port = 3009;

app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

const handleError = (res, error, message) => {
  console.error(message, error);
  res.status(500).send('Server Error');
};

app.get('/planets', (req, res) => {
  db.any('SELECT * FROM planets;').then(data => {
    res.json(data);
  }).catch((error) => {
    handleError(res, error, 'error planet:');
  });
});


app.post('/planets', (req, res) => {
  const planetName = req.body.name;
  db.none('INSERT INTO planets (name) VALUES ($1);', planetName).then(() => {
    res.send('added');
  }).catch((error) => {
    handleError(res, error, 'error planet:');
  });
});

const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).send('errore nel caricamento');
  } else {
    next(err);
  }
};

app.post('/planets/:id/image', multerErrorHandler, upload.single('planetImage'), async (req, res) => {
  try {
    const planetId = req.params.id;
    const imagePath = req.file.path;
    await db.none('UPDATE planets SET image=$1 WHERE id=$2;', [imagePath, planetId]);
    res.send('immagine aggiornata');
  } catch (error) {
    handleError(res, error, 'Errore aggiornamento');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
