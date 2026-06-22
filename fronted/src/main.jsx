import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserContext from '../src/context/UserContext.jsx'
import CaptainContext from '../src/context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <CaptainContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContext>
    </UserContext>
  </StrictMode>,
)
