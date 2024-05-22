import React,{useState} from 'react'

export default function DcdUseState() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount]= useState(10);
    // Mảng
    const [list,setList]=useState([1,5]);
    // hàm sử lý sự kiện "thêm ngẫu nhiên"
     const dcdHandleList = ()=>{
      // sinh ngẫu nhiên một giá trị số
      let num = parseInt(Math.random()*100);
      //cập nhật lại state: list 
      setList([
        ...list,
        num
      ])
    }
    return(
    <div>
      <p>You clicked {count} times</p>
        <button onclick={() => setCount(count + 1)}>
            Click me
        </button>
        <hr/> 
        <h3>List: {list.toString()}</h3>
        <button onClick={dcdHandleList}>Thêm ngẫu nhiên </button>
    </div>
  )
}
