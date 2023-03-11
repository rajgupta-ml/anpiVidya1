/* eslint-disable import/extensions */
import validateJwtPersistance from '../persistance/vaildateJwtPersistance.js';
import validateProctectedPageInteractor from '../interactor/validateProtectedPagesInteractor.js';

const validateProtectedPages = (request, response) => {
  const JWT_TOKEN = request.headers.authorization.split(' ')[1];
  try {
    validateProctectedPageInteractor({ validateJwtPersistance }, { JWT_TOKEN });
    response.status(200).json({
      success: 'true',
    });
  } catch (error) {
    response.status(401).json({
      err: error.message,
    });
  }
};

export default validateProtectedPages;
