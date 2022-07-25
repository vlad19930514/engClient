import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`html {
body {  
  padding: 0;
  margin: 0;
  font-family: 'Taviraj', serif;
  background-color:${(props) => props?.theme?.colors.background};
  color:${(props) => props?.theme?.colors.primary};
}
svg {
  color:${(props) => props?.theme?.colors.svgColor};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
button{
  background-color: transparent;

	border: 1px solid transparent;
}
li{
  list-style:none;
  padding:0;
    margin:0;
}
}`
