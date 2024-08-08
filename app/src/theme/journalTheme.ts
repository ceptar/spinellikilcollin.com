import { DefaultTheme } from 'styled-components'

export const journalTheme = (theme: DefaultTheme): DefaultTheme => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      background: theme.colors.highlightLow,
    },
  }
}
