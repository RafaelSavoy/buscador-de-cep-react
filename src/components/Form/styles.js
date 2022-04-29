import styled from 'styled-components'

const FormDiv = styled.div`
	display: flex;
	justify-content: center;
`
const Title = styled.h1`
	font-size: 3rem;
	color: rgb(0, 102, 255);
`
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 500px;
	text-align: center;
	border: 1px solid rgb(67, 67, 132);
	padding: 15px;
	border-radius: 8px;
	margin: 10px;
`
const CepNumber = styled.input`
	border: 1px solid ${props => props.error ? 'red' : 'blue'};
	border-radius: 5px;
	color: black;
	padding: 5px;
	outline: none;
	background:none;
	font-size: 1.4rem;
	
	transition: all 1s ease-in-out;
`
const SubmitButton = styled.input.attrs({ type: 'submit' })`
	background: rgb(0, 102, 255);
	color: white;
	outline: none;
	font-size: 1.5rem;
	padding: 5px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	:active{
		transform: translateY(1px)
	}
`

export {FormDiv,Title,StyledForm,CepNumber,SubmitButton}