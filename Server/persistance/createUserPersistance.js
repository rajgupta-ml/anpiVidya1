/* eslint-disable import/extensions */
import UserSchema from '../models/User.js';

const createUserPersistance = async ({ email, password, userType }) => {
  const User = new UserSchema({ email, password, userType });
  await User.save();
};

export default createUserPersistance;
