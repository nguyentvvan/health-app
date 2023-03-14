import React from 'react';
import Images from 'constants/images';
import './styles/GoToTopButton.scss';

export default function GoToTopButton() {
	const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

	return (
		<div className='go-to-top-button' onClick={scrollToTop}>
			<img src={Images.GOTOTOPBUTTON} alt='go to top' />
		</div>
	)
}
