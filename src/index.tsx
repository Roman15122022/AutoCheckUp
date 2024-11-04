import ReactDOM from 'react-dom/client'

import 'index.css'
import AppProviders from './features/AppProviders'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AppProviders>
    <App />
  </AppProviders>,
)
