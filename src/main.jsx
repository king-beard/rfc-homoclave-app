import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RfcHomoclaveApp } from './RfcHomoclaveApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RfcHomoclaveApp />
  </StrictMode>,
)
