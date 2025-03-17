import './App.css'
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import AddMovie from './pages/AddMovie/AddMovie.jsx';
import Header from './components/Header/Header.jsx';
import Movies from './pages/Movies/Movies.jsx';
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
            <Route path='/movies' element={<Movies/>}/>
          </Routes>
          
      </div>
    </>
  )
}

export default App
