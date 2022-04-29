import React, { useState } from 'react';
import { createContext } from 'react';

const DefaultValues = {
	state: {
		rua: '',
		bairro: '',
		cidade: '',
		estado: '',
		error: false
	},
	setState: () => { }
}

const CepContext = createContext(DefaultValues)

const CepContextProvider = (props) => {
	const [cep, setCep] = useState(DefaultValues.state)
	return (
		<CepContext.Provider value={{ cep, setCep }}>
			{props.children}
		</CepContext.Provider>
	)
}

export { CepContextProvider };
export default CepContext;