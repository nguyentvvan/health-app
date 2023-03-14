import SectionListControl from "components/base/SectionListControl";
import FilterButtons from "components/TopPage/FilterButtons";
import MainProgress from "components/TopPage/MainProgress";
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
		<div className="min-vh-50">
			<div className="row">
				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 p-0">
					<MainProgress
						image='d01.jpg'
						percentage={75}
					/>
				</div>
				<div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 p-0">
					<div className="w-100 h-100" />
				</div>
			</div>
			<div className="content-wrapper">
			<FilterButtons />
			<SectionListControl
				items={MEALS}
				type={Controls.MEAL}
			/>
			</div>
		</div>
	)
}
