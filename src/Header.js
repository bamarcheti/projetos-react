import React, { useState } from 'react';
import './Header.css';
import Sorteador from './Sorteador';

function Header(props) {
	const [resultado, setResultado] = useState('');

	const resultadoAtualizado = () => {
		setResultado(Sorteador());
	}

	return (
		<div className="Header">
			<div className="HeaderMenu">
				<a href=''>Home</a>
				<a href=''>Sobre</a>
			</div>
			<div className='HeaderBody'>
				<div className="HeaderLogo">
					<img src="logo192.png" alt="" ></img>
				</div>
				<div className='HeaderCorpo'>
					<h2>Sorteie 1 número: </h2>
					<button onClick={resultadoAtualizado}>Sortear</button>
					<h3>{resultado}</h3>
				</div>
			</div>
		</div>
	);
}

export default Header;