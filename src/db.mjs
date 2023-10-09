import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp('postgresql://postgres:timcu1995@localhost:5432/userssql');

export default db;