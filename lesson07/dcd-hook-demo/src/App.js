import React from 'react'
import DcdUseState from './components/DcdUseState'
import DcdUseEffect from './components/DcdUseEffect'
import DcdUseContexx from './components/DcdUseContexx'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Đinh Công Định - Hook</h1>
      <hr/>
      <DcdUseState/>
      <hr/>
      <DcdUseEffect/> 
      <hr/>
     <DcdUseContexx/>
    </div>
  )
}
