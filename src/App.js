import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      string: 'Hello Andrew'
    }
  }


  render() {
   return (
     <div>
        <p>{this.state.string}</p>
        <p>{this.state.string}</p>
        <button onClick={()=> this.setState({string: 'Huylo'})}  >change text</button>
     </div>
    
   )
  }
}

export default App;
