import React, { Component } from 'react';
import ItemList from './components/ItemList'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ItemList />
        </Provider>
    );
  }
}

export default App;
