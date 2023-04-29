const inviteLinkCreationPersistance = ({ classroomName, UCID_TOKEN }) => {
  const objJsonStr = JSON.stringify({ classroomName, UCID_TOKEN });
  const objJsonB64 = Buffer.from(objJsonStr).toString('base64');

  let link = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    link += objJsonB64[i];
  }
  return link;
};

export default inviteLinkCreationPersistance;
