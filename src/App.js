import './App.css';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
export const SessionContext = createContext({});

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
       <SessionContext.Provider value={{ users, setUsers}}>
       <div className='App-header'>
      <h1>React-Axios-Task</h1>
      </div>
      <Home/>
       </SessionContext.Provider>
      
    </div>
  );
}

export default App;
