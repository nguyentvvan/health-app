import SectionListControl from "components/base/SectionListControl";
import FilterButtons from "components/TopPage/FilterButtons";
import Controls from "constants/controls";

const MEALS = [{
	image: 'm01.jpg',
	date: '05.21',
	meal: 'Morning',
},{
	image: 'l03.jpg',
	date: '05.21',
	meal: 'Morning',
},{
	image: 'd01.jpg',
	date: '05.21',
	meal: 'Dinner',
},{
	image: 'l01.jpg',
	date: '05.21',
	meal: 'Snack',
},{
	image: 'm01.jpg',
	date: '05.20',
	meal: 'Morning',
},{
	image: 'l02.jpg',
	date: '05.20',
	meal: 'Lunch',
},{
	image: 'd02.jpg',
	date: '05.20',
	meal: 'Dinner',
},{
	image: 's01.jpg',
	date: '05.21',
	meal: 'Snack',
}];

export default function TopPage() {
	return (
		<div className="content-wrapper min-vh-50">
			<FilterButtons />
			<SectionListControl
				items={MEALS}
				type={Controls.MEAL}
			/>
		</div>
	)
}
