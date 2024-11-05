import { useApp } from 'src/hooks/useApp'

function App(): JSX.Element {
  const { locale } = useApp()

  return <div>{locale.setting}</div>
}

export default App
