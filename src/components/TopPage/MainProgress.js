import { useSelector } from 'react-redux';

import CircleProgressBar from 'components/base/CircleProgressBar';
import getImageURL from 'helpers/getImageURL';

import './styles/MainProgress.scss';

export default function MainProgress() {
	const {
		image,
		date,
		percentage,
	} = useSelector(state => state.userInfo.mainProgress);

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
