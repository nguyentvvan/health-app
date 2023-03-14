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

			<ExerciseList />

			<SectionListControl
				items={diaries}
				type={Controls.DIARY}
			/>
		</div>
	)
}
