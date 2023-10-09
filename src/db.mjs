import pgPromise from 'pg-promise';

const pgp = pgPromise({});

const db = pgp('postgres://postgres:timcu1995@localhost:5432/planets'); 

async function createTable() {
    try {
      await db.none('DROP TABLE IF EXISTS planets;');
      await db.none('CREATE TABLE planets(id SERIAL NOT NULL PRIMARY KEY, name TEXT NOT NULL);');
      console.log('Table planets created');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  }
  
  async function insertPlanets() {
    try {
      await db.none('INSERT INTO planets (name) VALUES ($1), ($2);', ['Earth', 'Mars']);
      console.log('Planets inserted');
    } catch (error) {
      console.error('Error inserting planets:', error);
    }
  }
  
  createTable().then(() => {
    insertPlanets();
  });

export default db;
