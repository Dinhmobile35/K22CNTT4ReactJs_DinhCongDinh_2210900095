import React from 'react'
import DcdListUser from './components/DcdListUser';
import axios from './api/dcdApi'
import { useEffect,useState}from 'react';
export default function DcdApp() {

  const [dcdListUsers, setDcdListUsers] = useState([]);

  // đọc dữ liệu từ api
  const dcdGetAllUsers = async ()=>{
  const dcdResponse = await axios.get("dcdUsers");
  console.log("Api Data:",dcdResponse.data);
  setDcdListUsers(dcdResponse.data)
  }
  useEffect(()=>{
  dcdGetAllUsers();
  console.log("State Data:", dcdListUsers);
  },[])
  return (
    <div className='container border my-3'>
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <DcdListUser renderDcdListUser={dcdListUsers}/>
      </div>
  )
}
