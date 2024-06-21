import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { PokemonProviderWrapper } from './context/pokemon.context.jsx'
import { UserProviderWrapper } from './context/user.context.jsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviderWrapper>
        <PokemonProviderWrapper>
          <App />
        </PokemonProviderWrapper>    
      </UserProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
)
