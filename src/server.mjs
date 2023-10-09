import express from 'express';
import bodyParser from 'body-parser';
import * as planetsController from './planets.mjs';

const app = express();
const port = 3005;

app.use(bodyParser.json());

// routes
app.get('/api/planets', planetsController.getAll);
app.get('/api/planets/:id', planetsController.getOneById);
app.post('/api/planets', planetsController.create);
app.put('/api/planets/:id', planetsController.updateById);
app.delete('/api/planets/:id', planetsController.deleteById);

app.listen(port, () => {
  console.log(`in esecuzione ${port}`);
});
