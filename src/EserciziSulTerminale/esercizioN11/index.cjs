const express = require('express');
const Joi = require('joi');

const router = express.Router();

let planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
];

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

const validatePlanet = (req, res, next) => {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

router.get('/api/planets', (req, res) => {
  res.json(planets);
});

router.get('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  res.json(planet);
});

router.post('/api/planets', validatePlanet, (req, res) => {
  const newPlanet = {
    id: planets.length + 1,
    name: req.body.name,
  };

  planets.push(newPlanet);

  res.status(201).json({ msg: 'Planet created' });
});

router.put('/api/planets/:id', validatePlanet, (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  planet.name = req.body.name;

  res.json({ msg: 'Planet updated' });
});

router.delete('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((p) => p.id === planetId);

  if (planetIndex === -1) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  planets.splice(planetIndex, 1);

  res.json({ msg: 'Planet deleted' });
});

module.exports = router;
