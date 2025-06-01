import axios from 'axios';
const axiosInstance = axios.create({
	baseURL: 'http://localhost:5500'
});
export { axiosInstance };
