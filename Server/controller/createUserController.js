/* eslint-disable import/extensions */
import createUserInteractor from '../interactor/createUserInteractor.js';
import CreateUserDataEntity from '../entity/createUserDataEntity.js';
// eslint-disable-next-line import/extensions
import createUserPersistance from '../persistance/createUserPersistance.js';

const registerUsers = async (request, response) => {
  const { email, password, userType } = request.body;

  try {
    await createUserInteractor(
      { CreateUserDataEntity, createUserPersistance },
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
