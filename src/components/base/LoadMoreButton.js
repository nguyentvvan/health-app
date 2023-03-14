import cn from 'classnames';
import { useSelector } from 'react-redux';

import './styles/LoadMoreButton.scss';

export default function LoadMoreButton({className, onClick, disabled}) {
	const text = useSelector(state => state.initial.loadMoreButtonText);

	return (
		<div className={cn('load-more-button text-center mt-3 mb-5', className)}>
			<button
				type='button'
				onClick={onClick}
				disabled={disabled}
			>
				{text}
			</button>
		</div>
	)
}