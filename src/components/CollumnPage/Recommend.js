import './styles/Recommend.scss';

export default function Recommend({title, text}) {
	return (
		<div className='recommend'>
			<div className='title'>{title}</div>
			<hr />
			<div className='text'>{text}</div>
		</div>
	)
}
