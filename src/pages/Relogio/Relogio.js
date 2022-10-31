import { React, useEffect, useState } from 'react';
import './Relogio.css';

function Relogio() {
	const [hora, setHora] = useState();
	const [minuto, setMinuto] = useState();
	const [segundo, setSegundo] = useState();

	const resultado = valor => 10 > valor ? '0' + valor : valor;

	var data = new Date();
	useEffect(() => {
		const interval = setInterval(() => {
			setHora(resultado(data.getHours()));
			setMinuto(resultado(data.getMinutes()));
			setSegundo(resultado(data.getSeconds()));
		}, 1000);

		return () => clearInterval(interval);
	})

	return (
		<h2 className='timer'>{hora} : {minuto} : {segundo}</h2>
	);
}

export default Relogio;