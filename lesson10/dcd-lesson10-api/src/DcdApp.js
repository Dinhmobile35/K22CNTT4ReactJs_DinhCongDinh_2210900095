import {useState,useEffect} from 'react';
import './App.css';
import DcdCategoryList from './components/DcdCategoryList';
import axios from './api/DcdApi';
import DcdCategoryForm from './components/DcdCategoryForm';

function DcdApp() {
  //lấy dữ liệu từ api
  const [dcdCategories, setDcdCategories] = useState([]);

  const getCategories = async ()=>{
  try {
  const dcdCateResponse = await axios.get("DcdCategory");
  setDcdCategories(dcdCateResponse.data);
  } catch (error) {
  console.log("lỗi:", error);
  }
  }
  
  useEffect(()=>{
  getCategories();
  console. log("dcdCategories:", dcdCategories);
  },[])
  //trạng thái form
  const [dcdCategoryIsForm, setDcdCategoryIsForm] = useState(false);
  const dcdHandleAddNew=(param)=>{
    setDcdCategoryIsForm(param);
  }
  const dcdHandleCateGoryCloseForm=(param)=>{
    setDcdCategoryIsForm(param);
  }
  return (
    <div className="container border my-3">
      <h1>Đinh Công Định-Call API</h1>
      <DcdCategoryList renderDcdCategories={dcdCategories}
      onAddNew={dcdHandleAddNew}/>
      <hr/>
     {
      dcdCategoryIsForm===true?<dcdCategoryForm onCloseForm={dcdHandleCateGoryCloseForm}/>:""
     }
    </div>
  );
}

export default DcdApp;
