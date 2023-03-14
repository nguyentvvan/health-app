import getImageURL from 'helpers/getImageURL';

import './styles/Meal.scss';

export default function Meal ({image, date, type}) {
	return (
		<div className='meal'>
			<img src={getImageURL(image)} alt='meal' />
			<span>{date}.{type}</span>
		</div>
	)
}

