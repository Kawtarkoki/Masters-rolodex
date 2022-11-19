// Class Component

import './App.css';
import  { Component } from 'react' ;

class App extends Component {
  constructor (){
    super()
    this.state = { 
      monsters : [],
      searchField: '',
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

  onSearChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField };
    })
  }

  render() { 
    
    
    const { monsters, searchField} = this.state
    const { onSearChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <input
        className='search-box'
        type='search'
        placeholder='Tap to search for monsters'
        onChange={ onSearChange }
        />
        {
          filteredMonsters.map ( (monster) => {
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