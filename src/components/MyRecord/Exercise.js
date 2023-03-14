import './styles/Exercise.scss';

export default function Exercise({title, time, kcal}) {
	return (
		<div className='exercise'>
			<div className='w-100'>
				<div className='d-flex justify-content-between'>
					<div>{title}</div>
					<div className='time'>{time}</div>
				</div>
				<div className='kcal'>{kcal}</div>
			</div>
		</div>
	)
}
