import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Header from './components/Header/Header.jsx'
import CardInner from './components/CardInner/CardInner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      {/* <CardInner /> */}
    </main>
  </StrictMode>,
)
