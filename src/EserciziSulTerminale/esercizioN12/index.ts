import { Request, Response } from 'express';

let planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
];

export const getAll = (req: Request, res: Response) => {
  res.json(planets);
};

export const getOneById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  res.json(planet);
};

export const create = (req: Request, res: Response) => {
  const newPlanet = {
    id: planets.length + 1,
    name: req.body.name,
  };

  planets.push(newPlanet);

  res.status(201).json({ msg: 'Planet created' });
};

export const updateById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((p) => p.id === planetId);

  if (planetIndex === -1) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  planets[planetIndex].name = req.body.name;

  res.json({ msg: 'Planet updated ' });
};

export const deleteById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((p) => p.id === planetId);

  if (planetIndex === -1) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  planets.splice(planetIndex, 1);

  res.json({ msg: 'Planet deleted' });
};
