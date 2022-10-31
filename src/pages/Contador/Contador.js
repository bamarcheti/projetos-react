import React, { useState } from 'react';
import './Contador.css';

function Contador() {
	const [count, setCount] = useState(0);

	return (
		<div className='ContadorBody'>
			<h2>Voce clicou {count} vezes</h2>
			<button onClick={() => setCount(count + 1)}>
				Clique aqui
			</button>
		</div>
	)
}

export default Contador;