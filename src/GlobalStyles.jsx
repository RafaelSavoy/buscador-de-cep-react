import { createGlobalStyle } from 'styled-components';
import Poppins from './assets/fonts/Poppins.ttf'

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Poppins';
		src: url(${Poppins});
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins';
	}
	html{
		font-size: 62.5%;	
	}
	body{
		overflow-x: hidden;
	}
	@media only screen and (max-width: 600px) {
		html {
			font-size: 50%;
		}
	}
	@media only screen and (max-width: 400px) {
		html {
			font-size: 45%;
		}
	}
	@media only screen and (max-width: 250px) {
		html {
			font-size: 35%;
		}
	}
`

export default GlobalStyles;