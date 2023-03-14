import Images from 'constants/images';
import './styles/FilterButtons.scss';

const FILTER_BUTTONS = [{
	image: 'knife',
	text: 'Morning'
},{
	image: 'knife',
	text: 'Lunch'
},{
	image: 'knife',
	text: 'Dinner'
},{
	image: 'cup',
	text: 'Snack'
}];

export default function FilterButtons() {
	return (
		<div className='filter-buttons'>
			{FILTER_BUTTONS.map((button, index) =>
				<div className='filter-button' key={index}>
					<img src={Images[button.image.toUpperCase()]} alt={button.image} />
					{button.text}
				</div>
			)}
		</div>
	)
}
