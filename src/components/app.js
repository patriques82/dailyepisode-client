// Styling
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch,  
  faCheckCircle,
  faUser,
  faTv
} from '@fortawesome/free-solid-svg-icons'

// Components
import React, { Component } from 'react'
import Header from './header/headercontainer'
import Search from './search'
import Login from './login/logincontainer'
import { 
  BrowserRouter as Router,
  Route } from 'react-router-dom'

library.add(faCheckCircle, faSearch, faTv, faUser)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
