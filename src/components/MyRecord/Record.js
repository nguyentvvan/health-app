import getImageURL from 'helpers/getImageURL';
import './styles/Record.scss';

export default function Record({title, text, image}) {
	return (
		<div className='record'>
			<img className='w-100 h-100' src={getImageURL(image)} alt='record' />
			<div className='info w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
				<div className='title'>{title}</div>
				<div className='text'>{text}</div>
			</div>
		</div>
	)
}
