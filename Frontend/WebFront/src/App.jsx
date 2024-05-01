
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import NewRegister from './Pages/NewRegistration';
import ExistingRegistration from './Pages/ExistingRegistration'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/new-student-register' element={<NewRegister/>}/>
          <Route path='/existing-student-register' element={<ExistingRegistration/>}/>
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App; 
