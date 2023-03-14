import getImageURL from 'helpers/getImageURL';
import './styles/Post.scss';

export default function Post({image, date, time, description, hashTags}) {
	return (
		<div className='post'>
			<div className='image'>
				<img src={getImageURL(image)} alt='post' />
				<span className='date-time'>{date} {time}</span>
			</div>
			<div className='description'>{description}</div>
			<div className='hash-tags'>{hashTags}</div>
		</div>
	)
}
