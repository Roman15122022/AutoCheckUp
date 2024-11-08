import AppToggleLanguage from 'src/features/AppToggleLanguage'
import Container from 'src/components/Container'

const Setting = (): JSX.Element => {
  return (
    <Container>
      <div>Settings</div>
      <AppToggleLanguage />
    </Container>
  )
}

export default Setting
