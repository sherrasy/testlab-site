import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/app'
import '@styles/styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
