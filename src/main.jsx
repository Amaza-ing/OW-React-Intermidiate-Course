import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PokemonProviderWrapper } from './context/pokemon.context.jsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProviderWrapper>
        <App />
      </PokemonProviderWrapper>    
    </BrowserRouter>
  </React.StrictMode>
)
