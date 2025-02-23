import { Route, Routes } from "react-router-dom"
import UserSignIn from "./pages/UserSignIn"
import UserSignUp from "./pages/UserSignUp"
import CaptionSignIn from "./pages/CaptionSignIn"
import CaptionSignUp from "./pages/CaptionSignUp"
import Home from "./pages/Home"




function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/user-login" element={<UserSignIn/>} />
    <Route path="/user-signup" element={<UserSignUp/>} />
    <Route path="/caption-login" element={<CaptionSignIn/>} />
    <Route path="/caption-signup" element={<CaptionSignUp/>} />
  </Routes>
  )
  

}

export default App