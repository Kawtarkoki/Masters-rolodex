// Class Component

import './App.css';
import  { Component } from 'react' ;

class App extends Component {
  constructor (){
    super()
    this.state = { 
      name : "kawtar"
     } 
  }
  
  
  render() { 
    return (
      <div className="App">
      <header className="App-header">
      {this.state.name}
      <button onClick={() => {
        
        //this.setState(() => {} , () => {});

        this.setState(() => {
          return {
            name : "Houda"
          }
        }, () => {
          console.log("name", this.state.name);
        });
   
      }}>
        Change name
      </button>
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
