import styled from 'styled-components'


const CepInfoDiv = styled.div`
	display: flex;
	justify-content: center;
`

const CepForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 500px;
	text-align: center;
	border: 1px solid rgb(67, 67, 132);
	padding: 15px;
	border-radius: 8px;
	margin: 0 10px;
`

const CepData = styled.input.attrs({ disabled: true })`
	border: 1px solid ${props => props.error ? 'red' : 'blue'};
	border-radius: 5px;
	color: black;
	padding: 5px;
	outline: none;
	background:none;
	transition: all .5s ease-in-out;
	font-size: 1.4rem;
`

export { CepInfoDiv, CepForm, CepData }