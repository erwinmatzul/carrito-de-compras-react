import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/styles.css"

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <StrictMode>
      <CarritoApp />
    </StrictMode>,

  </BrowserRouter>
)


