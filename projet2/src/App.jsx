import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Adminpage from "./pages/Adminpage";
import Loginpage from "./pages/Loginpage"
import Gridpage from './pages/Gridpage';

function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='*' element={<Homepage/>} />
      <Route path='/admin' element={<Adminpage/>}/>
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/furnitures' element={<Gridpage/>} />

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
