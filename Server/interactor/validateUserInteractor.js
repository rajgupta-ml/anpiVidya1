const validateUserInteractor = async (
  { ValidateUserDataEntity, validateUserPersistance, createJwt },
  { email, password },
) => {
  // TODO : {Data Satanitization, EmailPreset or not, Password Validate or not, Create JWT}
  const DataInProperFormat = new ValidateUserDataEntity(email, password);
  DataInProperFormat.dataSanitization();
  const fetchPassword = await validateUserPersistance({ email });
  await DataInProperFormat.ValidatePassword({ hashedPassword: fetchPassword });
  const JWT_TOKEN = createJwt(email);
  return JWT_TOKEN;
};
export default validateUserInteractor;
