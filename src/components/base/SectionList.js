import cn from 'classnames';

import Recommend from 'components/CollumnPage/Recommend';
import Post from 'components/CollumnPage/Post';
import Meal from 'components/TopPage/Meal';
import Record from 'components/MyRecord/Record';
import Diary from 'components/MyRecord/Diary';

const controls = {
  Recommend,
	Post,
	Meal,
	Record,
	Diary,
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
