import React from 'react'
import axios from '../api/DcdApi';
export default function DcdCategoryForm(onCloseForm) {
    //state
    const[dcdCategoryName,setDcdCategoryName]= useState ("");
    const[dcdCategoryStatus,setdcdCategoryStatus]= useState ("true");
    const dcdHandleClose =()=>{
        onCloseForm(false);
    }
    const dcdHandleSubmit= async(event)=>{
      event.preventDefault();
      let dcdCategory={
        dcdId:0,
        dcdCategoryName:dcdCategoryName,
        dcdCategoryStatus:dcdCategoryStatus

      }
      console.log("dcdCategory,dcdCategory");
      await axios.post("dcdCategory,dcdCategory");

    }
  return (
    <div>
        <form>
        <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Category Name</span>
                <input type="text" className="form-control" 
                name='dcdCategoryName' value={'dcdCategoryName'}
                onChange={(ev)=>setdcdCategoryName(ev.target.value)}
                  placeholder="Category Name " aria-lable ="Category Name"
                   aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Category Status</span>
               <select className='form-control'
               Name='dcdCategoryStatus'
               value={'dcdCategoryStatus'}>
                 onChange={(ev)=>setdcdCategoryStatus(ev.target.value)}
                <option value={true}>Hiển thị</option>
                <option value={false}>Tạm Khóa</option>
               </select>
          </div>
          <button className='btn btn-success' onClick={dcdHandleSubmit}>Ghi Lại </button>
          <button className='btn btn-danger' onclick={dcdHandleClose} >Đóng</button>
        </form>
    </div>
  )
}
