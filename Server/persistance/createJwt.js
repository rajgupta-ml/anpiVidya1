import jwt from 'jsonwebtoken';

const createJwt = (email) => jwt.sign({ data: email }, process.env.JWT_SECERET, { expiresIn: '1h' });

export default createJwt;
