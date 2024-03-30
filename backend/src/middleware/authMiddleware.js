const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = '12345';

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
