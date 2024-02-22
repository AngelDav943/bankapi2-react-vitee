import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { InfoProvider } from './context/useInfo.jsx'

import './index.css'
import { ThemeProvider } from '@emotion/react'
import responsiveTheme from './theme/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveTheme}>
      <InfoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InfoProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
