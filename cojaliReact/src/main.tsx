import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS_React/StyleIDX.css'
import'./CSS_React/BodyIndex.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
