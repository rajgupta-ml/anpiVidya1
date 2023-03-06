/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import createUserInteractor from '../interactor/createUserInteractor.js';
import CreateUserDataEntity from '../entity/createUserDataEntity.js';
import createUserPersistance from '../persistance/createUserPersistance.js';
import DataSanitizationEntity from '../entity/dataSanitizationEnitity.js';

const registerUsers = async (request, response) => {
  const { email, password, userType } = request.body;

  try {
    await createUserInteractor(
      { CreateUserDataEntity, createUserPersistance, DataSanitizationEntity },
      { email, password, userType },
    );
    response.status(200).json({ success: 'true' });
  } catch (error) {
    response.status(401).json({
      success: 'false',
      err: error.message,
    });
  }
};

export default registerUsers;
