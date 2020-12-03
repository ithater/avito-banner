import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

#root {
	height: 100vh;
	overflow: hidden;
}

body {
	font-family: 'Roboto', sans-serif;
	background: #fff;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

p {
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
}

img {
	width: 100%;
}


`;

export default GlobalStyle;
