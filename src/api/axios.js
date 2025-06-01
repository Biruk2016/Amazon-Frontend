import axios from 'axios';
const axiosInstance = axios.create({
	// baseURL: 'http://localhost:5500'
	baseURL: 'https://amazon-backend-mh4m.onrender.com'
});
export { axiosInstance };
