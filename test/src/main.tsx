import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HashRouter } from 'react-router-dom';
import { MainRoutes } from './routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter> 
      <MainRoutes/>
    </HashRouter>
  </React.StrictMode>,
)