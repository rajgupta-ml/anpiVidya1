/* eslint-disable import/extensions */
import UserSchema from '../models/User.js';

const validateUserPersistance = async ({ email }) => {
  const isUserPresent = await UserSchema.find({ email });
  if (isUserPresent.length <= 0) throw new Error('User not found');
  return { fetchedHashedPassword: isUserPresent[0].password, fullName: isUserPresent[0].fullName };
};

export default validateUserPersistance;
