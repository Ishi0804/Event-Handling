import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToggleComponent from './App'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleComponent/>
  </StrictMode>,
)
