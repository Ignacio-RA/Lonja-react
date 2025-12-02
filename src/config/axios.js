import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'https://lonja-api.onrender.com'
  //baseURL: 'http://localhost:4000'
});

export default clienteAxios