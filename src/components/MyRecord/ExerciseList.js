import { useSelector } from 'react-redux';

import Exercise from './Exercise';

import './styles/ExerciseList.scss';

export default function ExerciseList() {
	const exercises = useSelector(state => state.userInfo.exercises);

	return (
		<div className='exercise-list my-5'>
			<div className='section-title d-flex'>
				<div className='title'>MY EXERCISE</div>
				<div className='date'>2021.05.21</div>
			</div>
			<div className='exercises d-flex flex-wrap justify-content-between'>
			{exercises.map((exercise, index) =>
				<Exercise key={index} {...exercise}/>
			)}
			</div>
		</div>
	)
}
