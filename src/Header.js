import React from 'react';
import './Header.css';
import Sorteador from './Sorteador';

function Header(props) {
	return (
		<div className="Header">
			<div className="HeaderMenu">
				<a href=''>Home</a>
				<a href=''>Sobre</a>
			</div>
			<div className='HeaderBody'>
				<div className="HeaderLogo">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JsBdeiWUw9ycrjwAlkquD_WKKOffr4zmMADw-jm8rN1EVqxfnVwUkouwyBWTlngEbYQ&usqp=CAU" alt="" />
					<img src="logo192.png" alt="" ></img>
				</div>
				<div className='HeaderCorpo'>
					<h2>Sortear 1 número: </h2>
					<h2><Sorteador /></h2>
				</div>
			</div>

		</div>
	);
}

export default Header;