import { useState } from 'react'
import {
  Routes, Route,Link
} from'react-router-dom'
import './App.css'

// ! import from components
import Wellcome from './assets/components/Wellcome'
import Say from './assets/components/say'
import Red from './assets/components/Red'
import Number from './assets/components/Number'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Wellcome/>}/>
      <Route path='/number/:num/' element={<Number/>}/>
      <Route path='/say/:word/' element={<Say/>}/>
      <Route path='/:word/:color' element={<Red/>}/>
    </Routes>
    </>
  )
}

export default App
