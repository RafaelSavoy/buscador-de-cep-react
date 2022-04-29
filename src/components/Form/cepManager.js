import axios from 'axios'

const api = axios.create({
	baseURL: 'https://viacep.com.br/'
})


async function cepManager(cepNumber) {
	try {
		const generatedCep = await api.get(`ws/${cepNumber}/json`)
		const cepInfo = generatedCep.data
		return {
			cepInfo,
			hasCepError: cepInfo.hasOwnProperty('erro') ? true : false
		}
	} catch (e) {
		console.log(e)
	}
}

export default cepManager