import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storeConfig from '../library/store'
import { 
  BrowserRouter as Router,
  Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch,  
  faCheckCircle,
  faUser,
  faTv
} from '@fortawesome/free-solid-svg-icons'
import Header from './header/headercontainer'
import Home from './home/home'
import Search from './search/search'
import Login from './login/logincontainer'
import Profile from './profile/profilecontainer'
import ChangePassword from './changepassword/changepasswordcontainer'

const { store, persistor } = storeConfig()
library.add(faCheckCircle, faSearch, faTv, faUser)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/change-password" component={ChangePassword} />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
