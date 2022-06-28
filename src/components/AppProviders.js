import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'store'
import { store } from 'store'

const appProviders = ({ children }) => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
         { children }
    </PersistGate>    
    </Provider>
  )
}

export default appProviders