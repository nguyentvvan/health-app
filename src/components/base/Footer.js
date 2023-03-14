import { useSelector } from 'react-redux';

import './styles/Footer.scss';

export default function Footer() {
	const footerTexts = useSelector(state => state.global.footer.texts);

	return (
		<footer>
			<div className='content-wrapper d-flex'>
				{footerTexts.map((text, index) => 
					<div className='footer-text' key={index}>{text}</div>
				)}
			</div>
		</footer>
	)
}
