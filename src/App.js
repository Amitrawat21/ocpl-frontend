
import './App.css';

import Register from './Component/Auth/Register';
import Login from './Component/Auth/Login';
import {ToastContainer} from "react-toastify"
import SaveNote from './Component/Note/Note';
import { Route , Routes} from "react-router-dom"

function App() {
  return (

  <>
 
  <Routes>
    <Route path = "/" element = {<Register/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/Notes" element = {<SaveNote/>}/>
  </Routes>


  </>
  )
}

export default App;
