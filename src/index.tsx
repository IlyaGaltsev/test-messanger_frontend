import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyle } from './styled/Global.styled'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
    <ToastContainer />
  </BrowserRouter>
)
