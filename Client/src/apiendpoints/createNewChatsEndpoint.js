import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const createNewChatsEndpoint = async (value) => {
  const { UCID, chatDets } = value;
  const { emailId } = chatDets;

  const response = await axios.post(`${commonApiEndpoint}api/chats/create-chat`, { UCID, emailId }, { headers: { 'Content-Type': 'Application/json' } });
  return response;
};

export default createNewChatsEndpoint;
