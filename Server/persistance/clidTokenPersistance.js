// eslint-disable-next-line new-cap
const clidTokenPersitance = ({ classroomName, UCID_TOKEN, link }) => {
  const objJsonStr = JSON.stringify({ classroomName, UCID_TOKEN, link });
  const objJsonB64 = Buffer.from(objJsonStr).toString('base64');
  return objJsonB64;
};
export default clidTokenPersitance;
