import { BrouserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/About'

export default function App() {
  return (
    <div>
      <BrouserRouter>
        <routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<Signin />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/" element={<About/>}/>
          <Route path="/profile" element={<Profile />}/>
        </routes>
      </BrouserRouter>
    </div>
  )
}
