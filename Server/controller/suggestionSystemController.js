/* eslint-disable import/extensions */
import inviteSuggestionInteractor from '../interactor/inviteSuggestionInteractor.js';
import validateServicesInteractor from '../interactor/validateServicesInteractor.js';
import vaildateJwtPersistance from '../persistance/vaildateJwtPersistance.js';
import pastClassroomInvitesPersistance from '../persistance/pastClassroomInvitesPersistance.js';
import isSameInstitutePersistance from '../persistance/isSameInstitutePersistance.js';
import rankStudentPersistance from '../persistance/rankStudentPersistance.js';

const suggestionSystemController = (request, response) => {
  const { UCID, institution } = request.body;
  const JWT_TOKEN = request.headers.authorization.split(' ')[1];

  try {
    validateServicesInteractor({ vaildateJwtPersistance }, { JWT_TOKEN });
    inviteSuggestionInteractor({
      pastClassroomInvitesPersistance,
      isSameInstitutePersistance,
      rankStudentPersistance,
    }, { UCID, institution });
  } catch (error) {
    response.status(400).json({
      err: error.message,
    });
  }
};

export default suggestionSystemController;
