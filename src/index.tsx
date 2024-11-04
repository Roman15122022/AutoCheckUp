import ReactDOM from 'react-dom/client'

import 'index.css'
import App from 'src/App'

import AppProviders from 'src/features/AppProviders'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AppProviders>
    <App />
  </AppProviders>,
)
