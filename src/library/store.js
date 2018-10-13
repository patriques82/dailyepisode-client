import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as admin } from '../ducks/admin'
import { reducer as user } from '../ducks/user'
import { reducer as search } from '../ducks/search'
import { reducer as subscription } from '../ducks/subscription'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ admin, user, search, subscription })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}