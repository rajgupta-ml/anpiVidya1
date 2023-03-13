const validateUserInteractor = async (
  {
    ValidateUserDataEntity, validateUserPersistance, createJwt, DataSanitizationEntity,
  },
  { email, password },
) => {
  // TODO : {Data Satanitization, EmailPreset or not, Password Validate or not, Create JWT}
  const hashedPasswordMatch = new ValidateUserDataEntity({ password });
  const userDataSanitization = new DataSanitizationEntity({ email, password });
  userDataSanitization.userDataSanitization();
  const fetchedHashedPassword = await validateUserPersistance({ email });
  await hashedPasswordMatch.ValidatePassword({ hashedPassword: fetchedHashedPassword });
  const JWT_TOKEN = createJwt({ email, expirationDate: '1h' });
  return JWT_TOKEN;
};
export default validateUserInteractor;
