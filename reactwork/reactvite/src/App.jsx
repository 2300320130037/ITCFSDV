import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Gallery from './component/gallery'

function App() {
  return (
    <>
    <div className='container' >
     <h2 >Gallary</h2>
     <Gallery/>

     </div>
    </>
  )
}
export default App