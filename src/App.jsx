import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import AddNote from "./pages/addnote/AddNote";
import Updatenote from "./pages/updatenote/Updatenote";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/nopage/NoPage";
import { Toaster } from 'react-hot-toast';

// eslint-disable-next-line react-refresh/only-export-components
function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addnote' element={<AddNote/>}/>
        <Route path='/updatenote' element={<Updatenote/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<NoPage/>}/>
      </Routes>
      <Toaster /> 
    </Router>
  )
}

export default App;