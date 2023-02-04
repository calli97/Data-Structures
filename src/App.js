import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import NavigationBar from './Components/NavegationBar';
import About from './Pages/About';
import Home from './Pages/Home';
import StructuresApp from './Pages/StructuresApp';
//import Sidebar from './Components/SideBar';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#C2E0FF",minHeight:"100vh"}} >
      <NavigationBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/app' element={<StructuresApp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
