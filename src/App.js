import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className='addTask'>
          <fieldset className='fildsetTask'>
            <legend>Digite as suas tarefas</legend>
            <label for='input-task'>Tarefa:</label>
            <input
              id='input-task'
              value={this.state.task}
              onChange={(e) => { this.setState({ task: e.target.value }) }} />
          </fieldset>

          <button className='buttonTask'>Salvar</button>
        </div>

        <h2>Todos: </h2>
        {this.state.task}
      </div>
    );
  }
}

export default App;
