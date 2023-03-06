const validateChangePasswordTokenController = async (request, response) => {
  const { password } = request.body;
  const PASSWORD_CHANGE_TOKEN = request.headers.authorization.split(' ')[1];
  await validateChangePasswordTokenInteractor({ password, PASSWORD_CHANGE_TOKEN });
};

export default validateChangePasswordTokenController;
