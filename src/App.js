// Class Component

import './App.css';
import  { Component } from 'react' ;

class App extends Component {
  constructor (){
    super()
    this.state = { 
      monsters : [],
    };
      
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( (response) => response.json())
      .then( (users) => this.setState( () => {
        return { monsters : users}
      },
      () => {
        console.log(this.state);
      }
      ));
  }
  render() { 
    return (
      <div className="App">

        <input
        className='search-box'
        type='search'
        placeholder='Tap to search for monsters'
        onChange={ (event) => {
          console.log(event.target.value)

          const searchString = event.target.value.toLocaleLowerCase()
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          })

          this.setState(() => {
            return { monsters: filteredMonsters };
          })

        }}
        />

        {
          this.state.monsters.map ( (monster) => {
            return <div key={monster.id}>
              <h4>{monster.name}</h4>
              </div>               
            
          } )
        }      
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