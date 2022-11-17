// Class Component

import './App.css';
import  { Component } from 'react' ;

class App extends Component {
  constructor (){
    super()
    this.state = { 
     monsters : [
      {
        id: "1",
        name: "kawtar"
      },
      {
        id: "2",
        name: "Houda"
      },
      {
        id: "3",
        name: "Nada"
      }
     ]
    }
      
  }
  render() { 
    return (
      <div className="App">
      <header className="App-header">
        {
          this.state.monsters.map ( (monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>               
            
          } )
        }      
      </header>
    </div>
    );
  }


}

export default App;




// Functionnal Component
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;