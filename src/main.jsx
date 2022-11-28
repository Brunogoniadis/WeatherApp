import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from "../src/styles/GlobalStyles"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <App />
  </React.StrictMode>
)
