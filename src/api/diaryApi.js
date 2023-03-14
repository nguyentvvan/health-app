import axiosClient from './axiosClient';

const diaryApi = {
	getAll(params) {
		const url = '/diaries';
		return axiosClient.get(url, { params });
	},
};

export default diaryApi;