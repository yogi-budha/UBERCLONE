import { Route, Routes } from "react-router-dom"
import UserSignIn from "./pages/User/UserSignIn"
import UserSignUp from "./pages/User/UserSignUp"
import CaptionSignIn from "./pages/Caption/CaptionSignIn"
import CaptionSignUp from "./pages/Caption/CaptionSignUp"

import StartPage from "./pages/StartPage"
import Home from "./pages/User/Home"
import UserWrapper from "./pages/User/UserWrapper"
import UserLogout from "./pages/User/UserLogout"
import CaptionHome from "./pages/Caption/CaptionHome"
import CaptionLogout from "./pages/Caption/CaptionLogout"
import CaptionWrapper from "./pages/Caption/CaptionWrapper"
import Payment from "./pages/Payment"
import CaptionRading from "./pages/Caption/CaptionRading"




function App() {
  return (

    <Routes>
    <Route path="/" element={<StartPage/>}/>
    <Route path="/user-login" element={<UserSignIn/>} />
    <Route path="/user-signup" element={<UserSignUp/>} />
    <Route path="/caption-login" element={<CaptionSignIn/>} />
    <Route path="/caption-signup" element={<CaptionSignUp/>} />
    <Route path="/caption-Riding" element={<CaptionRading/>}/>
    <Route path="/payment" element={<Payment/>} />
    <Route path="/home" element = {
      <UserWrapper>

        <Home/>
      </UserWrapper>
      
      }/>

      <Route path="/user/logout" element = {
        <UserWrapper>
          <UserLogout/>
        </UserWrapper>
        
        }/>

        <Route path = "/captionHome" element={
          <CaptionWrapper>
            <CaptionHome/>
          </CaptionWrapper>
          
          }/>

          <Route path="/caption/logout" element={
            <CaptionWrapper>
              <CaptionLogout/>
            </CaptionWrapper>
          }/>
  </Routes>

 
   
  )
  

}

export default App