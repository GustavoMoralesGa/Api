import jwt from "jsonwebtoken";


export const validateJwt = async (req, res, next) => {
  const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;
  const tokenRegex = /^Bearer ((?:\.?(?:[A-Za-z0-9-_]+)){3})$/gm;
  try {
    const authHeader = req.header('Authorization');
    const token = tokenRegex.exec(authHeader);
    console.log(authHeader, token);
    if (token) {
      const decodedToken = jwt.decode(token[1], JWT_SECRET);
      if (decodedToken) {
        req.user = decodedToken.user;
      } else {
        throw new Error('Non valid token');
      }
    } else {
      throw new Error('No token');
    }
    next();
  } catch (e) {
    console.log(e)
    res.status(e.code || 503).send(e)
  }
}
