import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'

const Layout = () => {
  return (
    <div>
    <Header/>
    <Outlet/>

    </div>
  )
}

export default Layout