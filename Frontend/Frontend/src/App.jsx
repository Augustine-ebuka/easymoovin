import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Profile from './pages/profile'
import About from './pages/profile'
import Header from './components/header'
function App() {
  return ( 
   <BrowserRouter>
  <Header />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/signin' element={<Signin />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    <Route path='/about' element={<About />}></Route>
   </Routes>
   </BrowserRouter>
   );
}

export default App;