import React, { useState } from 'react';
import Contador from '../Contador/Contador';
import Sorteador from '../Sorteador/Sorteador';
import './Header.css';

function Header() {
	const [resultado, setResultado] = useState('');

	const resultadoAtualizado = () => {
		setResultado(Sorteador());
	}

	return (
		<div className='Header'>
			<div className='HeaderBody'>
				<Contador />
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