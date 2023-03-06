/* eslint-disable import/extensions */
import UserSchema from '../models/User.js';

const validateUserPersistance = async ({ email }) => {
  const isUserPresent = await UserSchema.find({ email });
  if (isUserPresent.length <= 0) throw new Error('User not found');
  return isUserPresent[0].password;
};

export default validateUserPersistance;
