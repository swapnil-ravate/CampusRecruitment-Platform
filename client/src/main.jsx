import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import reduxStore from './redux/store.js'


import { ErrorBoundary } from './components/ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
        <Provider store={reduxStore}>
          <App />
        </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
