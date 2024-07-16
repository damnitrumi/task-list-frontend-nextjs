import type { Preview } from "@storybook/react";
import {theme} from "../src/lib/styled-components/theme"
import {GlobalStyles} from "../src/lib/styled-components/global-styles"
import "../src/app/styles/globals.css"

import {  withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
      themes: {
          // nameOfTheme: 'dataAttributeForTheme',
          light: theme,
          dark: theme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
  })]
};

export default preview;
