import './App.css'
import {BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { Main } from './Pages/Main'
import { Login } from './Pages/Login'
import { NavBar } from './Components/NavBar'
import { Createpost } from './Pages/CreatePosts/Createpost'


function App() {

  return (
      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/createpost' element={<Createpost/>} />
          </Routes>
        </Router>
      
      </div>
      
    
  )
}

export default App
