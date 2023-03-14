import cn from "classnames";

import Post from "components/CollumnPage/Post";
import Meal from "components/TopPage/Meal";
import Diary from "components/MyRecord/Diary";
import LoadMoreButton from "./LoadMoreButton";

import { useLoadMore } from "hooks/useLoadMore";

const controls = {
	Post,
	Meal,
	Diary,
};

export default function DataList({className, title, type, mealType}) {
	const Control = controls[type];

	const { loadMore, data, disabled } = useLoadMore({type, mealType});

	return (
		<>
			{title && title}
			<div className={cn("d-flex flex-wrap justify-content-start", className)}>
				{data.map((item) =>
					<Control {...item} key={item.id} />
				)}
			</div>
			<LoadMoreButton
				onClick={loadMore}
				disabled={disabled}
			/>
		</>
	)
}
