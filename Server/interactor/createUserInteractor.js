// Bussiness Logic

const createUserInteractor = async (
  { CreateUserDataEntity, createUserPersistance, DataSanitizationEntity },
  { email, password, userType },
) => {
  const userData = new CreateUserDataEntity({ password });
  const userDataSanitization = new DataSanitizationEntity({ email, password, userType });
  // Data is getting Sanitized
  userDataSanitization.userDataSanitization();
  // hashing the password
  const hashedPassword = await userData.hashPassword();
  // saving the password to DB
  await createUserPersistance({ email, password: hashedPassword, userType });
};

export default createUserInteractor;
