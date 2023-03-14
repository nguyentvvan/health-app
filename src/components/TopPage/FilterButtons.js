import { useSelector } from 'react-redux';

import Images from 'constants/images';

import './styles/FilterButtons.scss';

export default function FilterButtons() {
	const filterButtons = useSelector(state => state.userInfo.filterButtons);

	return (
		<div className='filter-buttons'>
			{filterButtons.map((button, index) =>
				<div className='filter-button' key={index}>
					<img src={Images[button.image.toUpperCase()]} alt={button.image} />
					{button.text}
				</div>
			)}
		</div>
	)
}
