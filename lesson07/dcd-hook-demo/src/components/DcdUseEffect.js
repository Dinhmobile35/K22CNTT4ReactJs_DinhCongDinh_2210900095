import React, { useDeferredValue, useState } from 'react'

export default function DcdUseEffect() {
    //State :count
    const [count, setCount]= useState(0);
    // Hàm sử lý sự kiệ click me
    const dcdHandleClick =()=>{
        setCount(prev => prev +1);
    }
    // sử dụng hàm useEffect để cập nhật lại title
    DcdUseEffect(()=>{
        document.title ='Đinh Công Định: You clicked ${count} time';
        console.log('you clicked ${count} time');
    });
    //useEffect: tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("Chạy lần đầu tiên- một lần");
    })
  return (
    <div>
      <h2>Demo-useEffect:</h2>
    <button onClick={(dcdHandleClick)=> setCount(count +1)}>
        Click me</button>  
    </div>
  )
}
