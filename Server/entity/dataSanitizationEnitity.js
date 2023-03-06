const DataSanitizationEntity = class dataSanitization {
  constructor({ email, password, userType }) {
    this.email = email;
    this.password = password;
    this.userType = userType;
  }

  userDataSanitization() {
    const emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (this.email !== undefined && !(this.email.match(emailPattern))) throw new Error('Email Id not safe');
    if ((this.password !== undefined && !this.password > 6) && typeof (this.password) !== 'string') throw new Error('password not safe');
    if ((this.userType !== undefined && this.userType.toLowerCase() === 'student') && this.userType.toLowerCase() === 'teacher') throw new Error('userType not safe');
  }
};
export default DataSanitizationEntity;
