
import { Route, Routes } from 'react-router-dom';
import './App.css';



import { Navbar } from './Components/Navbar';


import Api from './Components/Api';
import Add from './Components/Add';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     
      <Route path='/view' element={<Api/>}/>
      <Route path='/add' element={<Add/>}/>
      
      

      </Routes>
      
    </div>
  );
}

export default App;
