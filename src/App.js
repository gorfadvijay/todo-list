import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  state = {
    todos :[
      {
        id: 1,
        title: 'hello',
        completed:false

      },
      {
        id: 2,
        title: 'Learn Redux',
        completed:false

      },
      {
        id: 3,
        title: 'Take A rest',
        completed:false

      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
