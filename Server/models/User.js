import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
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
  resetPasswordToken: String,
  resetPasswordExpire: Date,

});

const User = model('User', UserSchema);
export default User;
