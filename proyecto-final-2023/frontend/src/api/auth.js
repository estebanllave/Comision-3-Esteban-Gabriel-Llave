// pedidos al servidor
import axios from "axios"

// url al server
const API ="http://localhost:3000"
// config de la conexion

// registrarse
export const registerReq = (user) =>  axios.post(`${API}/register`,user);

// logearse
export const loginReq = (user) =>  axios.post(`${API}/login`,user);


// export const registerReq = (user) => {
//     return axios.post(`${API}/register`, user)
//       .catch(error => {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           console.error('Server responded with status code:', error.response.status);
//           console.error('Response data:', error.response.data);
//         } else if (error.request) {
//           // The request was made but no response was received
//           console.error('No response received from the server');
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.error('Error setting up the request:', error.message);
//         }
//         throw error; // rethrow the error to propagate it further
//       });
//   };
  