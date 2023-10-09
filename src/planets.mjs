import express from 'express';

let planets = [
  { id: 1, name: 'Mercurio' },
  { id: 2, name: 'Venere' },
  { id: 3, name: 'Terra' },
];

export const getAll = (_request, res) => {
  res.json(planets);
};

export const getOneById = (req, res) => {
  const planetId = parseInt(req.params.id, 10);
  const planet = planets.find((p) => p.id === planetId);

  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ message: ' non trovato' });
  }
};

export const create = (req, res) => {
  const { name } = req.body;
  const newPlanet = { id: planets.length + 1, name };
  planets = [...planets, newPlanet];
  res.status(201).json(newPlanet);
};

export const updateById = (req, res) => {
  const planetId = parseInt(req.params.id, 10);
  const { name } = req.body;

  planets = planets.map((p) => (p.id === planetId ? { ...p, name } : p));

  res.json({ message: 'Pianeta aggiornato' });
};

export const deleteById = (req, res) => {
  const planetId = parseInt(req.params.id, 10);

  planets = planets.filter((p) => p.id !== planetId);

  res.json({ message: 'Pianeta eliminato' });
};

