import { GlobalStyle } from '../styles/GlobalStyle'
import { withThemesProvider } from "themeprovider-storybook";
import {themes} from '../styles/theme.ts'
import { addDecorator } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

addDecorator(withThemesProvider(themes))



export const decorators = [

 (Story) =>{
    return 	<>
    <GlobalStyle/> 
    <Story />    
      </>
  }
  
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
