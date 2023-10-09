import express from 'express';
import pool from './db.mjs';
import { authenticateJwt } from './auth.mjs';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'errore durante la creazione' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

    if (result.rows.length === 1) {
      const token = '...'; 

      await pool.query('UPDATE users SET token = $1 WHERE id = $2', [token, result.rows[0].id]);

      res.json({ token });
    } else {
      res.status(401).json({ error: 'errore credenziali' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'errore login' });
  }
});

router.get('/protected', authenticateJwt, (req, res) => {
  res.json({ message: 'Solo utenti autenticati possono accedere.' });
});

export default router;
