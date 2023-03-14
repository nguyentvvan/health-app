import { useSelector } from 'react-redux';

import SectionListControl from "components/base/SectionListControl";
import FilterButtons from "components/TopPage/FilterButtons";
import MainProgress from "components/TopPage/MainProgress";
import Controls from "constants/controls";

export default function TopPage() {
	const meals = useSelector(state => state.userInfo.meals);

	return (
		<div className="min-vh-50">
			<div className="row">
				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 p-0">
					<MainProgress />
				</div>
				<div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 p-0">
					<div className="w-100 h-100" />
				</div>
			</div>
			<div className="content-wrapper">
			<FilterButtons />
			<SectionListControl
				items={meals}
				type={Controls.MEAL}
			/>
			</div>
		</div>
	)
}
