/* eslint-disable import/extensions */
import UserSchema from '../models/User.js';

const validateUserPersistance = async ({ email }) => {
  let fetchPassword = '';
  const isUserPresent = await UserSchema.find({ email });
  if (isUserPresent.length > 0) fetchPassword = isUserPresent[0].password;
  else throw new Error('user not found');
  return fetchPassword;
};

export default validateUserPersistance;
