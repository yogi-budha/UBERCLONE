import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import {Toaster} from 'react-hot-toast'
import CaptionContext from './context/CaptionContext.jsx'

createRoot(document.getElementById('root')).render(
  <CaptionContext>

      <UserContext>
  <StrictMode>

       <BrowserRouter>
    
    <App /><Toaster />
    </BrowserRouter>
   
  </StrictMode>,
    </UserContext>
  </CaptionContext>

)
