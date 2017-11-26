import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { route } from 'preact-router'; 
import Router from './router'
import './assets/styles/styles.css'
import store from './store'

class AppProvider extends Component {

	isLoggedIn() {
		const token = localStorage.getItem('token');
		if(token !== null || token !== undefined) {
			route('/home', true);
		}
	}

  render() {
		this.isLoggedIn();
    return (
        <Provider store={store}>
          <div className="app-wrapper">
            <Router />
          </div>
        </Provider>
    )
  }
}

export default AppProvider
