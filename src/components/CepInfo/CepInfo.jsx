import React, { useContext } from 'react';
import CepContext from '../../providers/cepProvider';
import { CepData, CepForm, CepInfoDiv } from './styles';

const Cep = () => {
	const { cep } = useContext(CepContext)
	const cepDatas = ['Rua', 'Bairro', 'Cidade', 'Estado'];
	return (
		<CepInfoDiv>
			<CepForm>
				{cepDatas.map(cepData => {
					const lowerCaseCepData = cepData.toLowerCase()
					return <CepData type='text' name={lowerCaseCepData} placeholder={cepData} value={cep[lowerCaseCepData]} />
				})}
			</CepForm>
		</CepInfoDiv>
	);
};

export default Cep;
