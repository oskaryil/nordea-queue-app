import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { persistStore } from 'redux-persist'
import Router from './router'
import Header from './components/header'
import './assets/styles/styles.css'

class AppProvider extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="app-wrapper">
            {/*<Header />*/}
            <Router />
          </div>
        </Provider>
    )
  }
}

export default AppProvider
