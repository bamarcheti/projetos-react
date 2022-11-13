import axios from 'axios';
import React, { useState } from 'react';
import Raffle from '../Raffle/Raffle';
import './UserList.css';

function UserList() {
	const [resultado, setResultado] = useState('');

	const gerarNomeUsuarios = () => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${Raffle(1, 10)}`)
			.then(res => {
				setResultado(res.data);
			});
	}

	return (
		<div className='userPainel'>
			<p>Clique no botão para ver os dados dos usuários:</p>
			<button onClick={gerarNomeUsuarios}>Próximo</button>
			<div className='list'>
				<div className='listLeft'>
					<h3 className='id'>{resultado.id}</h3>
					<h3 className='h3'>Nome:</h3>
					<h4 className='result'>{resultado.name}</h4>
					<h3 className='h3'>Sobrenome:</h3>
					<h4 className='result'>{resultado.username}</h4>
					<h3 className='h3'>Email:</h3>
					<h4 className='result'>{resultado.email}</h4>
					<h3 className='h3'>Endereço:</h3>
					<h4 className='result'>{resultado.address?.street} {resultado.address?.suite} <br />
						{resultado.address?.city} {resultado.address?.zipcode}</h4>
				</div>

				<div className='listRight'>
					<h3 className='h3'>Geolocalização:</h3>
					<h4 className='result'>{resultado.geo?.lat} {resultado.geo?.lng}</h4>
					<h3 className='h3'>Telefone:</h3>
					<h4 className='result'>{resultado.phone}</h4>
					<h3 className='h3'>Site:</h3>
					<h4 className='result'>{resultado.website}</h4>
					<h3 className='h3'>Empresa:</h3>
					<h4 className='result'>{resultado.company?.name}</h4>
					<h4 className='result'> {resultado.company?.catchPhrase}</h4>
					<h4 className='result'> {resultado.company?.bs}</h4>
				</div>
			</div>
		</div>
	)
}

export default UserList;