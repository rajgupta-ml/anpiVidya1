import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const addMessageEndpoint = async ({ from, to, message }) => {
  const response = await axios.post(`${commonApiEndpoint}api/chats/add-messages`, { from, to, message });
  return response;
};

export default addMessageEndpoint;
