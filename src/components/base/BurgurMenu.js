import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import Icons from 'constants/icons';
import Icon from './Icon';

import './styles/BurgurMenu.scss';

export default function BurgurMenu() {
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	const userMenuItems = useSelector(state => state.global.header.userMenu.items);

	useEffect(() => {
		const clickOutsideBurgurMenu = (e) => {
			const burgurMenu = ref.current;
			if (burgurMenu && !burgurMenu.contains(e.target)) {
				setVisible(false);
			}
		};
		window.addEventListener('click', clickOutsideBurgurMenu);

		return () => {
			window.removeEventListener('click', clickOutsideBurgurMenu);
		};
	}, []);


	return (
		<div id="burgur-menu">
			<button
				type="button"
				className="btn burgur-menu-btn"
				onClick={() => setVisible(true)}
				ref={ref}
			>
				<Icon icon={Icons.BURGURBUTTON} />
			</button>
			<div className={cn("burgur-menu-items", visible ? 'd-block' : 'd-none')}>
			{userMenuItems.map((item, index) => 
				<div key={index} className="burgur-menu-item">
					<NavLink to={item.urlPath}>
						{item.text}
					</NavLink>
				</div>
			)}
			</div>
		</div>
	)
}
