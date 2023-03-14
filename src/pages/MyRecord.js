import { useSelector } from 'react-redux';

import SectionList from "components/base/SectionList";
import { DataControls, SectionControls } from "constants/controls";
import ExerciseList from "components/MyRecord/ExerciseList";
import LineChart from "components/Charts/LineChart";
import DataList from 'components/base/DataList';

export default function MyRecord() {
	const records = useSelector(state => state.userInfo.records);

	return (
		<div className='content-wrapper min-vh-50'>
			<SectionList
				items={records}
				type={SectionControls.RECORD}
				className="my-5"
			/>

			<LineChart 
				className='my-4'
				title={
					<div className='section-title d-flex'>
						<div className='title'>BODY RECORD</div>
						<div className='date'>2021.05.21</div>
					</div>
				}
				showLegends
				height={304} 
			/>

			<ExerciseList />

			<DataList
				title="MY DIARY"
				type={DataControls.DIARY}
			/>
		</div>
	)
}
