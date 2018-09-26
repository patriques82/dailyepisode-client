import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch,  
  faCheckCircle,
  faUser,
  faTv
} from '@fortawesome/free-solid-svg-icons'
import { 
} from '@fortawesome/free-regular-svg-icons'

import React, { Component } from 'react'
import Header from './header'
import Search from './search'
import { 
  BrowserRouter as Router,
  Link } from 'react-router-dom'

library.add(faCheckCircle, faSearch, faTv, faUser)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    )
  }
}

export default App;
