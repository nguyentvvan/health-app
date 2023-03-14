import MainProgress from "components/TopPage/MainProgress";
import LineChart from "components/Charts/LineChart";
import MealList from "components/TopPage/MealList";

export default function TopPage() {
	return (
		<div className="min-vh-50">
			<div className="row">
				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 p-0">
					<MainProgress />
				</div>
				<div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 p-0">
					<div className="w-100 h-100">
						<LineChart
							height={284}
						/>
					</div>
				</div>
			</div>
			<div className="content-wrapper">
			<MealList />
			</div>
		</div>
	)
}
