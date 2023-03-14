import { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Images from 'constants/images';

import './styles/FilterButtons.scss';

export default function FilterButtons({onSelectedTypeChange}) {
	const filterButtons = useSelector(state => state.userInfo.filterButtons);
	const [selectedType, setSelectedType] = useState('');

	return (
		<div className='filter-buttons'>
			{filterButtons.map((button, index) =>
				<div
					className={classNames('filter-button', selectedType === button.type ? 'active' : '')}
					key={index}
					onClick={() => {
						setSelectedType(button.type);
						onSelectedTypeChange(button.type);
					}}
				>
					<img src={Images[button.image.toUpperCase()]} alt={button.image} />
					{button.type}
				</div>
			)}
		</div>
	)
}
