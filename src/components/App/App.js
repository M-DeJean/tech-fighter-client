import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import MainMenu from '../../routes/MainMenu/MainMenu'
import Contestants from '../../routes/Contestants/Contestants'
import FightPage from '../../routes/FightPage/FightPage'
import HowToPlay from '../../routes/HowToPlay/HowToPlay'
import Statistics from '../../routes/Statistics/Statistics'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <main className='App'>
        {/* <header className='App_header'>
          <Header />
        </header> */}

        <Switch>
          <Route
          exact
          path={'/'}
          component={MainMenu} 
          />
          <Route
            exact
            path={'/contestants'}
            component={Contestants}
          />
          <Route 
            path={'/contestants/:id/fight-page'}
            component={FightPage}
          />
          <Route 
            path={'/statistics'}
            component={Statistics}
          />
          <Route 
            path={'/how-to-play'}
            component={HowToPlay}
          />
        </Switch>
      </main>

    )
  }
}

export default App;