import jwt from 'jsonwebtoken';

const createJwt = (email) => jwt.sign({ data: email }, process.env.JWT_SECRET, { expiresIn: '1h' });

export default createJwt;
