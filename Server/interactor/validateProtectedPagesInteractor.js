const validateProtectedPagesInteractor = ({ validateJwtPersistance }, { JWT_TOKEN }) => {
  validateJwtPersistance(JWT_TOKEN);
};

export default validateProtectedPagesInteractor;
