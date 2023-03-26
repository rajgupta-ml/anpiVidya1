const inviteSuggestionInteractor = ({
  pastClassroomInvitesPersistance,
  isSameInstitutePersistance,
  rankStudentPersistance,
}, { UCID, institution }) => {
  const StudentList = pastClassroomInvitesPersistance({ UCID });
  console.log(StudentList);
};

export default inviteSuggestionInteractor;
