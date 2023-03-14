import './styles/Diary.scss';

export default function Diary({date, time, content}) {
	return (
		<div className='diary'>
			<div className='date'>{date}</div>
			<div className='time'>{time}</div>
			<div className='content'>{content}</div>
		</div>
	)
}
