import React from 'react'
import {Outlet} from 'react-router-dom'
import { Container } from './style'

const Main = ({children}) => {
  return (
    <main>
      {children}
      <Outlet/>
    </main>
  )
}

export default Main
