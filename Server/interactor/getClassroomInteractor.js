const getClassroomInteractor = async ({ CLID }, { getClassroomPersistance }) => {
  const details = await getClassroomPersistance({ CLID });
  return details;
};

export default getClassroomInteractor;
