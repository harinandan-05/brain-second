import Dashboard from './Pages/Dashboard'
import { Signin } from './Pages/Signin'
import { Signup } from './Pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/Signin' element={<Signin />}/>
    <Route path='/Signup' element={<Signup />}/>
    <Route path='/Dashboard' element={<Dashboard />}/>
  </Routes>
  </BrowserRouter>
  </>
  )
  }
export default App

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjBkMTBkYzA5MThiYWZjZDNlZGYyMSIsImlhdCI6MTc1MTI4MjM2Nn0.6RNcSn_eKvpG3mKnJW_0VgXmJ8czG1iQ9FdCQU6uPaU