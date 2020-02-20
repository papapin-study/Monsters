import React , {Component} from 'react';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {name: "Drakula",
          id: 1
      },
        { name: "Zombie" ,
          id: 2
      },
        { name: "Putin",
          id: 3
      },
        { name: "Stalin",
          id: 4
      }
      ]
    }
  }


  render() {
   return (
    
    <div className="App">

    {  this.state.monsters.map(monster =>  

    <h1 key={monster.id}>
      { monster.name }
    </h1>
      
    )  }

    </div>  
    
   )
  }
}

export default App;
