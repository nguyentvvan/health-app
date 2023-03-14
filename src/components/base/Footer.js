import './styles/Footer.scss';

const FOOTER_TEXTS = [
	'会員登録',
	'運営会社',
	'利用規約',
	'個人情報の取扱について',
	'特定商取引法に基づく表記',
	'お問い合わせ',
];

export default function Footer() {
	return (
		<footer>
			<div className='content-wrapper d-flex'>
				{FOOTER_TEXTS.map((text, index) => 
					<div className='footer-text' key={index}>{text}</div>
				)}
			</div>
		</footer>
	)
}
