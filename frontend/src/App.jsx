import { Route, Routes } from 'react-router'
import './index.css'
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import OnBoardingPage from "./pages/OnBoardingPage.jsx"
import NotificaitonsPage from "./pages/NotificationsPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import toast, {Toaster} from "react-hot-toast"
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from './lib/axios.js'

function App() {

  const {data,isLoading,error} = useQuery({
    queryKey:["todos"],
    queryFn: async()=>{
      const res= await axiosInstance.get("/auth/me")
      return res.data
    },
    retry:false,
  })

  console.log({data})
  console.log({isLoading})
  console.log({error})

  return (
    <> 
      <div className='h-screen' >
        <button onClick={()=>{toast.success("Hello World!")}}>+</button>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/chat" element={<ChatPage/>}/>
          <Route path="/onboarding" element={<OnBoardingPage/>}/>
          <Route path="/call" element={<CallPage/>}/>
          <Route path="/notifications" element={<NotificaitonsPage/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
