'use strict';

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { stmts } = require('../database');

if (!process.env.JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    console.error('FATAL: JWT_SECRET must be set in production. Add it to your .env file and restart.');
    process.exit(1);
  }
  process.env.JWT_SECRET = crypto.randomBytes(64).toString('hex');
  console.warn('WARNING: JWT_SECRET is not set. A random secret has been generated for this session. Sessions will not persist across restarts. Set JWT_SECRET in your .env file.');
}
const SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
  const header = req.headers['authorization'];
  if (!header || !header.startsWith('Bearer '))
    return res.status(401).json({ error: 'Authentication required.' });

  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, SECRET);
    const user = stmts.getUserById.get(payload.id);
    if (!user) return res.status(401).json({ error: 'User not found.' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

module.exports = auth;
