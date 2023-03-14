import CircleProgressBar from 'components/base/CircleProgressBar';
import getImageURL from 'helpers/getImageURL';

import './styles/MainProgress.scss';

const USER_PROGRESS = {
	image: 'd01.jpg',
	percentage: 75,
	date: '05/21',
};

export default function MainProgress() {
	const {
		image,
		percentage,
		date,
	} = USER_PROGRESS;
	return (
		<div className='main-progress d-flex justify-content-center justify-items-center'>
			<img src={getImageURL(image)} alt='meal' />
			<CircleProgressBar circleWidth={181} percentage={percentage} />
			<div className='progress-text'>
				<span className='date'>{date}</span>
				<span className='percentage'>{percentage}%</span>
			</div>
		</div>
	)
}
