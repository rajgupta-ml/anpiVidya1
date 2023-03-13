import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  UIDToken: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Full name required'],
  },
  email: {
    type: String,
    unique: [true, 'email already exist'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  userType: {
    type: String,
    required: [true, 'User Type is required'],
    select: false,
  },

});

const User = model('User', UserSchema);
export default User;
