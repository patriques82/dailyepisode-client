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
  faMinusCircle,
  faUser,
  faTv
} from '@fortawesome/free-solid-svg-icons'
import Header from './header/headercontainer'
import Home from './home/home'
import Login from './login/logincontainer'
import Search from './search/searchcontainer'
import Profile from './profile/profilecontainer'
import ChangePassword from './changepassword/changepasswordcontainer'
import Subscriptions from './subscriptions/subscriptionscontainer'
import Social from './social/socialcontainer'

const { store, persistor } = storeConfig()
library.add(faCheckCircle, faMinusCircle, faSearch, faTv, faUser)

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
              <Route path="/profile" component={Profile} />
              <Route path="/change-password" component={ChangePassword} />
              <Route path="/search" component={Search} />
              <Route path="/subscriptions" component={Subscriptions} />
              <Route path="/subscriptions/:userId" component={Subscriptions} />
              <Route path="/social" component={Social} />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
