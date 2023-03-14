import { NavLink } from 'react-router-dom';

import Icon from './Icon';
import Icons from 'constants/icons';
import Images from 'constants/images';

import './styles/Header.scss';
import BurgurMenu from './BurgurMenu';

const NAV_ITEMS = [{
	path: '/my-record',
	text: '自分の記録',
	icon: 'PROFILE'
},{
	path: '/challenge',
	text: 'チャレンジ',
	icon: 'CHALLENGE'
},{
	path: '/info',
	text: 'お知らせ',
	icon: 'INFO'
}];

export default function Header() {
	return (
		<header>
			<div className='header-navigation content-wrapper d-flex justify-content-between'>
				<div className="d-flex align-items-center">
					<NavLink exact to="/">
						<img src={Images.LOGO} alt='logo' />
					</NavLink>
				</div>
				
				<nav className="d-flex justify-content-end">
					{NAV_ITEMS.map((item, index) =>
						<div className='nav-item' key={index}>
							<NavLink exact={item.exact} to={item.path}>
								<Icon icon={Icons[item.icon]} />
								{item.text}
							</NavLink>
						</div>
					)}
					<div className='burgur-button'>
						<BurgurMenu />
					</div>
				</nav>
			</div>
		</header>
	)
}
