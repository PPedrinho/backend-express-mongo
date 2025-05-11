import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;  // Grava o userId no request para ser usado nas rotas
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

export default protect;

