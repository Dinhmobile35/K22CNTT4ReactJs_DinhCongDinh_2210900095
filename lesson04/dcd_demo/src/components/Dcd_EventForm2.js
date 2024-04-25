import React from 'react'

export default function Dcd_EventForm2() {
    const handleEnvent=(content)=>{
        console.log('=====================')
        console.log(content)
        console.log('=====================')
    }
  return (
    <div>
      <h2>Event Demo - Function Component</h2>
      <button onClick={handleEnvent("Đinh Công Định")} >Gọi khi render</button>
      <button onClick={()=>handleEnvent("K22CNT4-ReactJs")}>Gọi khi Click</button>
    </div>
  )
}

