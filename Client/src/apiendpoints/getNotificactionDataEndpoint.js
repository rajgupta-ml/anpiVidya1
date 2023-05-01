import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const getNotificationDataEndpoint = async ({ UCID }) => {
  const response = await axios.get(`${commonApiEndpoint}api/chats/get-notification-data`, {
    params: {
      UCID,
    },
  });
  console.log(response);
  return response;
};

export default getNotificationDataEndpoint;
