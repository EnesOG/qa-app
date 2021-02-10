import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './Reducers';

const store = configureStore({
  reducer: rootReducer
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./Reducers', () => {
    const newRootReducer = require('./Reducers').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch

export default store