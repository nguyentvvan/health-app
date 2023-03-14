import axiosClient from './axiosClient';

const mealApi = {
	getAll(params) {
		const url = '/meals';
		return axiosClient.get(url, { params });
	},
};

export default mealApi;