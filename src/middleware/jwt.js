import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

const tokenRegex = /^Bearer ((?:\.?(?:[A-Za-z0-9-_]+)){3})$/gm;

export const validateJwt = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    const token = tokenRegex.exec(authHeader)[1];
    jwt.verify(token, JWT_SECRET);
    req.email = jwt.decode(token).email
    next()
  } catch (e) {
    res.status(e.code || 503).send(e)
  }
}
