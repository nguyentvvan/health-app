import cn from "classnames";

import Recommend from "components/CollumnPage/Recommend";
import Record from "components/MyRecord/Record";

const controls = {
  Recommend,
	Record,
};

export default function SectionList({className, items, type}) {
	const Control = controls[type];

	return (
		<div className={cn("d-flex flex-wrap justify-content-between", className)}>
			{items.map((item, index) =>
				<Control {...item} key={index} />
			)}
		</div>
	)
}
