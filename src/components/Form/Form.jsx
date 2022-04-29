import React, { useContext, useState } from 'react';
import CepContext from '../../providers/cepProvider';
import cepManager from './cepManager';
import { CepNumber, FormDiv, StyledForm, SubmitButton, Title } from './styles';

const Form = () => {
	const [cepNumber, setCepNumber] = useState(0)
	const { cep, setCep } = useContext(CepContext)

	function isValidCepNumber(num) {
		const isNumber = num => /^[0-9]+$/.test(num)
		const isValidNumberLenght = num => num.length == 8

		return isNumber(num) && isValidNumberLenght(num)
	}

	const formatCep = cep => cep.replace(/[^0-9]/g,'')

	const handleChange = e => {
		setCepNumber(formatCep(e.target.value))
	}

	const handleCepError = e => setCep({error: true})

	function updateCep(cepInfo) {
		setCep({
			rua: cepInfo.logradouro,
			bairro: cepInfo.bairro,
			cidade: cepInfo.localidade,
			estado: cepInfo.uf,
			error: false
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (!isValidCepNumber(cepNumber)) {
			handleCepError()
			return;
		}
		const cepData = await cepManager(cepNumber)

		if (!cepData.hasCepError) {
			updateCep(cepData.cepInfo)
		} else {
			handleCepError();
		}
	}

	return (
		<FormDiv>
			<StyledForm onSubmit={handleSubmit}>
				<Title>Insira o CEP</Title>
				<CepNumber type='text' name='cep' onChange={handleChange} error={cep.error} mask='99999-999' value={cepNumber}/>
				<SubmitButton value='Pesquisar endereço' />
			</StyledForm>
		</FormDiv>
	);
};

export default Form;