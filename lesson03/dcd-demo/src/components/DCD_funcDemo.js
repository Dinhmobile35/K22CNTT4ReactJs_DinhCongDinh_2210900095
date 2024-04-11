import React from 'react'

export default function DCD_funcDemo(props) {
  return (
    <div>
      <hr/>
      <h2> function component Demo</h2>
      <h3> Sử dụng thuộc tính từ props</h3>
      <p>UserName:{props.userName}</p>
      <p>FullName:{props.fullName}</p>
      <p>UserName:{props.userName}</p>
    </div>
  )
}
