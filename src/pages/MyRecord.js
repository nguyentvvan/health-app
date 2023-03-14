import { useSelector } from 'react-redux';

import SectionList from "components/base/SectionList";
import Controls from "constants/controls";
import SectionListControl from "components/base/SectionListControl";
import ExerciseList from "components/MyRecord/ExerciseList";
import LineChart from "components/Charts/LineChart";

export default function MyRecord() {
	const records = useSelector(state => state.userInfo.records);
	const diaries = useSelector(state => state.userInfo.diaries);

	return (
		<div className='content-wrapper min-vh-50'>
			<SectionList
				items={records}
				type={Controls.RECORD}
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

			<SectionListControl
				items={diaries}
				type={Controls.DIARY}
			/>
		</div>
	)
}
