const validateUserInteractor = async (
  {
    ValidateUserDataEntity, validateUserPersistance, createJwt, DataSanitizationEntity,
  },
  { email, password },
) => {
  // TODO : {Data Satanitization, EmailPreset or not, Password Validate or not, Create JWT}
  const DataInProperFormat = new ValidateUserDataEntity({ password });
  const userDataSanitization = new DataSanitizationEntity({ email, password });
  userDataSanitization.userDataSanitization();
  const fetchPassword = await validateUserPersistance({ email });
  await DataInProperFormat.ValidatePassword({ hashedPassword: fetchPassword });
  const JWT_TOKEN = createJwt({ email, expirationDate: '1h' });
  return JWT_TOKEN;
};
export default validateUserInteractor;
