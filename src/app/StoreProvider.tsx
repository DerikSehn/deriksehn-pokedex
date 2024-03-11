/* Faça a store para pokedex */
import React from 'react'
import store from '../store'

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}


