import axios from 'axios';

const getUserData = async ({ id, token }) => {
  const requestStringOne = `http://${process.env.REACT_APP_ACCOUNTS_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_ACCOUNTS_PORT}/${process.env.REACT_APP_ACCOUNTS_BASEURL}/${id}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString, {
    headers: { Authorization: token },
  });
  const account = response.data;
  return account;
};

const allMethods = {
  getUserData,
};

export default allMethods;