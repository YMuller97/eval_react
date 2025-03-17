import './App.css'
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AddMovie from './components/AddMovie/AddMovie.jsx';
import Header from './components/Header/Header.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div>
          <Header/>
          <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/add-movie' element={<AddMovie/>}/>
          </Routes>
          
      </div>
    </>
  )
}

export default App
