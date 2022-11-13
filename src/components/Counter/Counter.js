import React, { useState } from 'react';
import './Counter.css';

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className='CounterBody'>
			<h2>Voce clicou {count} vezes</h2>
			<button onClick={() => setCount(count + 1)}>
				Clique aqui
			</button>
		</div>
	)
}

export default Counter;