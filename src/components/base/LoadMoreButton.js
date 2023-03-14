import cn from 'classnames';
import './styles/LoadMoreButton.scss';

export default function LoadMoreButton({className}) {
	return (
		<div className={cn('load-more-button text-center my-3', className)}>
			<button
				type='button'
			>
				記録をもっと見る
			</button>
		</div>
	)
}