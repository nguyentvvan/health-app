import './styles/CircleProgressBar.scss';

export default function CircleProgressBar({percentage, circleWidth}) {
	const radius = 85;
	const strokeWidth = 5;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * percentage) / 100;
	return (
		<div className='circle-progress-bar'>
			<svg
				width={circleWidth}
				height={circleWidth}
				viewBox={`0 0 ${circleWidth} ${circleWidth}`}
			>
				<circle
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth={strokeWidth}
					r={radius}
					className='circle-background'
				/>
				<circle
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth={strokeWidth}
					r={radius}
					className='circle-progress'
					style={{
						strokeDasharray: dashArray,
						strokeDashoffset: dashOffset,
					}}
					transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}
				/>
			</svg>
		</div>
	)
}
