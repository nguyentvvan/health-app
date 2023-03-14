import Exercise from './Exercise';

import './styles/ExerciseList.scss';

const EXERCISES = [{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
},{
	title: '家事全般（立位・軽い',
	time: '10 min',
	kcal: '26kcal',
}];

export default function ExerciseList() {
	return (
		<div className='exercise-list my-5'>
			<div className='section-title d-flex'>
				<div className='title'>MY EXERCISE</div>
				<div className='date'>2021.05.21</div>
			</div>
			<div className='exercises d-flex flex-wrap justify-content-between'>
			{EXERCISES.map((exercise, index) =>
				<Exercise key={index} {...exercise}/>
			)}
			</div>
		</div>
	)
}
