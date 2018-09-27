import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../library/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch,  
  faCheckCircle,
  faUser,
  faTv
} from '@fortawesome/free-solid-svg-icons'
import { 
  BrowserRouter as Router,
  Route } from 'react-router-dom'
import Header from './header/headercontainer'
import Search from './search'
import Login from './login/logincontainer'

library.add(faCheckCircle, faSearch, faTv, faUser)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
