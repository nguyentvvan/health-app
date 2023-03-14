import SectionList from "components/base/SectionList";
import Controls from "constants/controls";
import SectionListControl from "components/base/SectionListControl";
import ExerciseList from "components/MyRecord/ExerciseList";

const RECORDS = [{
	title: 'BODY RECORD',
	text: '自分のカラダの記録',
	image: 'MyRecommend-1.jpg',
},{
	title: 'MY EXERCISE',
	text: '自分の運動の記録',
	image: 'MyRecommend-2.jpg',
},{
	title: 'MY DIARY',
	text: '自分の日記',
	image: 'MyRecommend-3.jpg',
}];

const DIARIES = [{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
},{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
},{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
},{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
},{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
},{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
},{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
},{
	date: '2021.05.21',
	time: '23:25',
	content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
}];

export default function MyRecord() {
	return (
		<div className='content-wrapper min-vh-50'>
			<SectionList
				items={RECORDS}
				type={Controls.RECORD}
				className="my-5"
			/>

			<ExerciseList />

			<SectionListControl
				items={DIARIES}
				type={Controls.DIARY}
			/>
		</div>
	)
}
