import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Icon from './Icon';
import Icons from 'constants/icons';
import Images from 'constants/images';
import BurgurMenu from './BurgurMenu';

import './styles/Header.scss';

export default function Header() {
	const navItems = useSelector(state => state.global.header.navigations);

	return (
		<header>
			<div className='header-navigation content-wrapper d-flex justify-content-between'>
				<div className="d-flex align-items-center">
					<NavLink exact to="/">
						<img src={Images.LOGO} alt='logo' />
					</NavLink>
				</div>
				
				<nav className="d-flex justify-content-end">
					{navItems.map((item, index) =>
						<div className='nav-item' key={index}>
							<NavLink exact={item.exact} to={item.path}>
								<Icon icon={Icons[item.icon.toUpperCase()]} />
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
