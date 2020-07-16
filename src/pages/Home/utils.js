const endpoint = 'https://any-web-backend.herokuapp.com/api/';

export const fetchToken = async () => {
  const keyToken = 'dametoken';
  const endpointToken = `${endpoint}${keyToken}`;
  const tokenResponse = await fetch(endpointToken);
  const newToken = await tokenResponse.json();
  setToken(newToken.token)

  console.log(token);
}

export const fetchPin = async () => {
  console.log('llamada a pin');
  const keyPins = 'pins/';
  const endpointPins = `${endpoint}${keyPins}${inputValue}`;
  const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };
  const pinResponse = await fetch(endpointPins, fetchOptions);
  const data = await pinResponse.json();
  console.log(data.pinData);
}