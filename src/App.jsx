import './App.css'
import { useState, useEffect } from 'react'
import authService from "./appwrite/auth"
import {useDispatch, useSelector } from "react-redux"
import {login, logout} from './store/authSlice'
import {Header,Footer, Loading} from './components'
import { Outlet } from 'react-router-dom'

import { hideLoading } from './store/loadingSlice'
import {toggleDarkMode} from './store/darkSlice'

function App() {
  // const [loading, setLoading] = useState(true);
  const loading = useSelector((state) => state.loading.isLoading)
  const isDarkMode = useSelector((state) => state.dark.isDarkMode);
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
    .finally(() => dispatch(hideLoading()))
  },[dispatch])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
        <Header />
          <main>
            {loading && <Loading/>}
            <Outlet />
          </main>
        <Footer />
    </>
  );
}

export default App
