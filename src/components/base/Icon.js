import cn from 'classnames';
import './styles/Icon.scss';

export default function Icon(props) {
	return (
		<div className={cn(props.className, 'base-icon')}>
			<img src={props.icon} alt='' {...props} />
		</div>
	)
}