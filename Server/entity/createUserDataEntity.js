import bcrypt from 'bcryptjs';

const CreateUserDataEntity = class CreateUserDataEntity {
  constructor({ email, password, userType }) {
    this.email = email;
    this.password = password;
    this.userType = userType;
  }

  dataSanitization = () => {
    const emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (!(this.email.match(emailPattern))) throw new Error('Email Id not safe');
    if (!this.password > 6 || typeof (this.password) !== 'string') throw new Error('password not safe');
    if (this.userType.toLowerCase() !== 'student' || this.userType.toLowerCase() !== 'teacher') throw new Error('userType not safe');
  };

  hashPassword = async () => {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    return hashedPassword;
  };
};

export default CreateUserDataEntity;
