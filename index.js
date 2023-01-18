import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './src/App'
import './styles.less'

ReactDOM.createRoot(document.getElementById('app-range-slider')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
