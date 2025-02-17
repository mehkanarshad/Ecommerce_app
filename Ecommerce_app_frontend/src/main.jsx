import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import {store }from "./redux/store"
import React from 'react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
