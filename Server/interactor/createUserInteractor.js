// Bussiness Logic

const createUserInteractor = async (
  { UserDataEntity, createUserPersistance },
  { email, password, userType },
) => {
  const userData = new UserDataEntity({ email, password, userType });
  // Data is getting Sanitized
  userData.dataSanitization();
  // hashing the password
  const hashedPassword = await userData.hashPassword();
  // saving the password to DB
  await createUserPersistance({ email, password: hashedPassword, userType });
};

export default createUserInteractor;
