import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import MainMenu from '../../routes/MainMenu/MainMenu'
import Header from '../Header/Header'
import Contestants from '../../routes/Contestants/Contestants'
import FightPage from '../../routes/FightPage/FightPage'
import './App.css'

class App extends React.Component {
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
        </Switch>
      </main>

    )
  }
}

export default App;