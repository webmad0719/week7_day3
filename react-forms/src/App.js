import React, { Component } from 'react'
import './App.css'

import DynamicMoviesList from './components/Dynamic-list'

class App extends Component {
  render() {
    return (
      <div className="App container">

        <h2>Aplicación de películas</h2>

        <ul className="movies">
          <DynamicMoviesList />
        </ul>

      </div>
    )
  }
}


export default App;