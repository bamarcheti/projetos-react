import React, { useState } from 'react';
import Counter from '../../components/Counter/Counter';
import Raffle from '../Raffle/Raffle';
import './Header.css';

function Header() {
	const [resultado, setResultado] = useState('');
	
	const resultadoAtualizado = () => {
		setResultado(Raffle(1, 100));
	}

	return (
		<div className='Header'>
			<div className='HeaderBody'>
				<Counter />
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