import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const getChatDataEndpoint = async ({ UCID }) => {
  const response = await axios.get(`${commonApiEndpoint}api/chats/get-chats-data`, {
    params: {
      UCID,
    },
  });

  return response;
};

export default getChatDataEndpoint;
