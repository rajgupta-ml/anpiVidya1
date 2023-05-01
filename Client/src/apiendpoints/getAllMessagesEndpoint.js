import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const getAllMessagesEndpoint = async ({ from, to }) => {
  const message = await axios.post(`${commonApiEndpoint}api/chats/get-messages`, { from, to });
  return message;
};

export default getAllMessagesEndpoint;
