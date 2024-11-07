import AppToggleLanguage from 'src/features/AppToggleLanguage'
import Container from 'src/components/Container'

const Setting = (): JSX.Element => {
  return (
    <Container>
      <div className="text-2xl font-bold mb-6">Settings</div>
      <div className="mt-6">
        <div className="mb-3 text-lg font-medium">
          <AppToggleLanguage />
        </div>
      </div>
    </Container>
  )
}

export default Setting
