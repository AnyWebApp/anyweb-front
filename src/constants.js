export const endpoint = process.env.REACT_APP_ENDPOINT;
export const token = process.env.REACT_APP_TOKEN;
export const keyPin = process.env.REACT_APP_PIN;
export const keySearch = process.env.REACT_APP_SEARCH;
export const statusOk = 200;
export const fetchOptions = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
};