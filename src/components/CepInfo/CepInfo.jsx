import React, { useContext } from 'react';
import CepContext from '../../providers/cepProvider';
import { CepData, CepForm, CepInfoDiv } from './styles';

const Cep = () => {
	const { cep } = useContext(CepContext)
	return (
		<CepInfoDiv>
			<CepForm>
				<CepData type='text' name='rua' placeholder='Rua' value={cep.rua} />
				<CepData type='text' name='bairro' placeholder='Bairro' value={cep.bairro} />
				<CepData type='text' name='cidade' placeholder='Cidade' value={cep.cidade} />
				<CepData type='text' name='estado' placeholder='Estado' value={cep.estado} />
			</CepForm>
		</CepInfoDiv>
	);
};

export default Cep;