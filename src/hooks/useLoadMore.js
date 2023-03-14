import { useEffect, useState } from "react";
import mealApi from "api/mealApi";
import diaryApi from "api/diaryApi";
import postApi from "api/postApi";
import { DataControls } from "constants/controls";
import MealTypes from "constants/mealTypes";

const itemsPerPage = 8;

const api = {
	'Meal': mealApi,
	'Diary': diaryApi,
	'Post': postApi,
};

export const useLoadMore = ({type, mealType}) => {
	const [page, setPage] = useState(1);
	const [disabled, setDisabled] = useState(false);
	const [total, setTotal] = useState(-1);
	const [data, setData] = useState([]);

	useEffect(() => {
		let params = {};
		if (type === DataControls.MEAL && mealType !== MealTypes.ALL) {
			params = {
				type: mealType,
			};
		}
		api[type].getAll(params).then((items) => {
			const length = items.length;
			setTotal(length);
			setData(items.slice(0, itemsPerPage));
			setDisabled(itemsPerPage >= length);
		});
	}, [mealType]);

	const loadMore = () => {
		const newPage = page + 1;

		let params = {
			_page: newPage,
			_limit: itemsPerPage,
		};

		if (type === DataControls.MEAL && mealType !== MealTypes.ALL) {
			params.type = mealType;
		}

		api[type].getAll(params).then((items) => {
			setData([...data, ...items]);
			setPage(newPage);
			setDisabled((newPage * itemsPerPage) >= total);
    });
	};

	return {
		loadMore,
		data,
		disabled,
	};
};