import 'assets/styles.css'

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {persistStore} from 'redux-persist'
import Router from './router'
import Header from './components/header'

class AppProvider extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Header />
            <Router />
          </div>
        </Provider>
    )
  }
}

export default AppProvider
