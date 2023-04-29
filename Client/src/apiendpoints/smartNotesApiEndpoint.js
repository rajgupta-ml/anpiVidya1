import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const smartNotesApiEndpoint = async ({
  inputNote,
}) => {
  const API_ENDPOINT = `${commonApiEndpoint}api/notes/smartnotes`;
  const response = await axios.post(API_ENDPOINT, {
    inputNote,
  }, { headers: { 'Content-Type': 'application/json' } });
  return response;
};

export default smartNotesApiEndpoint;
