/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import Sorteador from '../Sorteador/Sorteador';

function UserList() {
	const [resultado, setResultado] = useState('');

	const gerarNomeUsuarios = () => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${Sorteador(1, 10)}`)
			.then(res => {
				setResultado(res.data);
			});
	}

	return (
		<div className='user-painel'>
			<button onClick={gerarNomeUsuarios}>AQUI</button>
			<h3 className='h3'>{resultado.id}</h3>
			<h1 className='h1'>Nome: {resultado.name}</h1>
			<h3 className='h3'>Sobrenome: {resultado.username}</h3>
			<h3 className='h3'>Email: {resultado.email}</h3>
			<h3 className='h3'>Endereço: {resultado.address?.street}, {resultado.address?.suite}</h3>
			<h3 className='h3'>{resultado.address?.city}, {resultado.address?.zipcode}</h3>
			<h3 className='h3'>Geolocalização: {resultado.geo?.lat}, {resultado.geo?.lng}</h3>
			<h3 className='h3'>Telefone: {resultado.phone}</h3>
			<h3 className='h3'>Site: {resultado.website}</h3>
			<h3 className='h3'>Empresa: {resultado.company?.name}</h3>
			<h3 className='h3'> {resultado.company?.catchPhrase}</h3>
			<h3 className='h3'> {resultado.company?.bs}</h3>
		</div>
	)
}

export default UserList;