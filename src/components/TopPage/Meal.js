import getImageURL from 'helpers/getImageURL';

import './styles/Meal.scss';

export default function Meal ({image, date, meal}) {
	return (
		<div className='meal'>
			<img src={getImageURL(image)} alt='meal' />
			<span>{date}.{meal}</span>
		</div>
	)
}

