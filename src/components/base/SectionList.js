import cn from 'classnames';

import Recommend from 'components/CollumnPage/Recommend';
import Post from 'components/CollumnPage/Post';
import Meal from 'components/TopPage/Meal';

const controls = {
  Recommend,
	Post,
	Meal,
};

export default function SectionList({className, items, type}) {
	const Control = controls[type];
	return (
		<div className={cn('d-flex flex-wrap justify-content-between', className)}>
			{items.map((item, index) => 
				<Control {...item} key={index} />
			)}
		</div>
	)
}
