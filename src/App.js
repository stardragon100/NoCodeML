import './App.css';
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Main_area from './components/main_area.jsx';
import Login from './components/Login.js'
import Signup from './components/Signup.js';
import Info from './components/Info.jsx';
import CodeGeneration from './components/CodeGeneration';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/main_area' element={<Main_area/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/codegeneration' element={<Main_area/>}/>
      </Routes>
    </Router>
    // <div className="App">
    //   <Main_area />
    // </div> , {path='/home' element={<Main_area/>}}
  );
}

export default App;
