import bcrypt from 'bcryptjs';

const ValidateUserDataEntity = class ValidateUserDataEntity {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  dataSanitization = () => {
    const emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (!(this.email.match(emailPattern))) throw new Error('Email Id not safe');
    if (!this.password > 6 || typeof (this.password) !== 'string') throw new Error('password not safe');
  };

  ValidatePassword = async ({ hashedPassword }) => {
    const isMatched = await bcrypt.compare(this.password, hashedPassword);
    if (!isMatched) throw new Error('Password Does not match');
  };
};
export default ValidateUserDataEntity;
