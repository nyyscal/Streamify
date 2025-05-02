import { Navigate, Route, Routes } from 'react-router'
import './index.css'
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import OnBoardingPage from "./pages/OnBoardingPage.jsx"
import NotificaitonsPage from "./pages/NotificationsPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import {Toaster} from "react-hot-toast"
import PageLoader from './components/PageLoader.jsx'
import useAuthUser from './hooks/useAuthUser.js'

function App() {

 const {isLoading,authUser} = useAuthUser()

  const isAuthenticated = Boolean(authUser)
  const isOnboarded = authUser?.isOnboarded

if(isLoading) return <PageLoader/>
  // console.log({isLoading})
  // console.log({error})

  return (
    <> 
      <div className='h-screen' >
        <Routes>
          <Route path="/" element={isAuthenticated && isOnboarded ? (<HomePage/>):( <Navigate to={!isAuthenticated ?"/login":"/onboarding"}/>)}/>
          <Route path="/signup" element={!isAuthenticated ? <SignUpPage/>: <Navigate to={isOnboarded ? "/":"/onboarding"}/>}/>
          <Route path="/login" element={!isAuthenticated ? <LoginPage/>: <Navigate to={isOnboarded ? "/":"/onboarding"}/>}/>
          <Route path="/chat" element={isAuthenticated ?<ChatPage/>: <Navigate to="/login"/>}/>
          <Route path="/onboarding" element={
            isAuthenticated ? (!isOnboarded ? (
            <OnBoardingPage/>
           ): (
            <Navigate to="/"/>
            ))
            :(
            <Navigate to="/login"/>
            )}
            />
          <Route path="/call" element={isAuthenticated ?<CallPage/>: <Navigate to="/login"/>}/>
          <Route path="/notifications" element={isAuthenticated ?<NotificaitonsPage/>: <Navigate to="/login"/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
