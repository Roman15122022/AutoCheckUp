import AppRoutes from 'src/features/AppRoutes'

//only layout
function App(): JSX.Element {
  return (
    <div>
      <div className="text-center text-3xl">Hello team</div>
      <AppRoutes />
    </div>
  )
}

export default App
