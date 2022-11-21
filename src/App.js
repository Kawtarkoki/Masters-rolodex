import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';


const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([])
  
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( (response) => response.json())
      .then( (users) => setMonsters(users))
  }, [])

  useEffect( () => {
    const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })
  setfilteredMonsters(newFilteredMonsters)
  
  }, [monsters, searchField])

  const onSearChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return(
    <div className="App">
        
    <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
        className='monsters-search-box'
        placeholder='tape to search'
        onChangeHandler={onSearChange}
        />
        <CardList monsters={filteredMonsters}/>

    </div>
  );
};

export default App;

// Class Component

// class App extends Component {
//   constructor (){
//     super()
//     this.state = { 
//       monsters : [],
//       searchField: '',
//     };
//   }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then( (response) => response.json())
  //     .then( (users) => this.setState( () => {
  //       return { monsters : users}
  //     },
  //     // () => {
  //     //   console.log(this.state);
  //     // }
  //     ));
  // }

//   onSearChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() { 
    
//     const { monsters, searchField} = this.state
//     const { onSearChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">
        
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//         className='monsters-search-box'
//         placeholder='tape to search'
//         onChangeHandler={onSearChange}
//         />

//         <CardList monsters={filteredMonsters}/>
        
//     </div>
//     );
//   }


// }

// export default App;




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