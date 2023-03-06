const createChangePasswordTokenInteractor = async (
  {
    DataSanitizationEntity,
    validateUserPersistance,
    createJwt,
    sendPasswordTokenPersistance,
  },
  { email },
) => {
  const userDataCleanUp = new DataSanitizationEntity({ email });
  userDataCleanUp.userDataSanitization();
  await validateUserPersistance({ email });
  const PASSWORD_TOKEN = createJwt({ email, expirationDate: '600' });
  sendPasswordTokenPersistance({ email, PASSWORD_TOKEN });
};

export default createChangePasswordTokenInteractor;
