import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { FavoritesProvider } from './context/FavoritesContext' // 1. Lo importamos
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        {/* 2. Envolvemos la App también con Favoritos */}
        <FavoritesProvider> 
          <App />
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)