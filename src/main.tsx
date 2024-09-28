import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/App.css'
import './css/index.css'
import PixelVillage from './components/pixel-village.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PixelVillage />
  </StrictMode>,
)
