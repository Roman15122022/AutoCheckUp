import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

import 'index.css'
import { setupStore } from './store'
import App from './App'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
