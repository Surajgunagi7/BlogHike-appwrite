import './App.css'
import { useState, useEffect } from 'react'
import authService from "./appwrite/auth"
import {useDispatch } from "react-redux"
import {login, logout} from './store/authSlice'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentAccount()
    .then((userData) => {
      if(userData) {        
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <>
        <Header />
          <main>
            <Outlet />
          </main>
        <Footer />
    </>
  ) : null;
}

export default App
