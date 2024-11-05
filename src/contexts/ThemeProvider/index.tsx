import { ThemeContext } from 'src/contexts'

import { useTheme } from 'src/hooks/useTheme'

const ThemeProvider = ({ ...props }): JSX.Element => {
  const themeData = useTheme()

  if (!themeData.theme) return <div />

  return <ThemeContext.Provider value={themeData} {...props} />
}

export default ThemeProvider
