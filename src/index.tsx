import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './store'

import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from './styled/Global.styled'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <HashRouter>
      <GlobalStyle />
      <App />
      <ToastContainer />
    </HashRouter>
  </Provider>
)
