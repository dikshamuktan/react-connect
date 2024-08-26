import { useState } from 'react'
import HomePage from './pages/homepage'
import Header from './component/navigation'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginForm from './pages/loginpage'
import RegisterForm from './pages/registerpage'
import CountryForm from './pages/contributepage'
import CountryList from './pages/countryList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route path="/" element={<HomePage /> } />
    <Route path="/Login" element={<LoginForm/>}/>
    <Route path="/register" element={<RegisterForm/>}/>
    <Route path="/contribute" element={<CountryForm/>}/>
    <Route path="/countryList" element={<CountryList/>}/>
    </Routes>
    </BrowserRouter>
   </div>

  )
}

export default App
