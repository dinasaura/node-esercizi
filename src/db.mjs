import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const db = pgp('postgres://postgres:timcu1995@localhost:5432/planets');

const createTableQuery = `
  DROP TABLE IF EXISTS planets;
  CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT
  );
`;

const insertPlanetsQuery = `
  INSERT INTO planets (name) VALUES 
  ('Earth'), 
  ('Mars');
`;

db.none(createTableQuery + insertPlanetsQuery)
  .then(() => {
    console.log('table planets created');
  })
  .catch(error => {
    console.error('error creating table', error);
  });

export default db;
