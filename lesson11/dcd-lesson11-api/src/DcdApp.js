import { useEffect, useState } from "react";
import "./App.css";
import DcdCategoryList from "./components/DcdCategoryList";
import DcdCategoryForm from "./components/DcdCategoryForm";
import DcdApi from "./api/DcdApi";
import axios from 'axios'
function DcdApp() {
  // Lấy dữ liệu từ API     
  const [dcdCategories, setDcdCategories] = useState([]);
  const getCategories = async () => {
    try{ 
        const dcdCateResponse = await DcdApi.get("/DcdCategory");
      setDcdCategories(dcdCateResponse.data);}
     catch (error) {
      console.error("Error fetching data:", error);
    } 
 
  }
  useEffect(() => {
    getCategories();
  
  }, [])
  console.log(dcdCategories)
  // Trạng thái form
  const [dcdCategoryIsForm, setDcdCategoryIsForm] = useState(false);
  //dữ liệu form :add /edit
  const [dcdCategoryEdit, setDcdCategoryEdit] = useState("");

  const dcdHandleAddNew = (param)=> {
    setDcdCategoryIsForm(param);
  }
  const dcdHandleCloseForm = (param) => {
    setDcdCategoryIsForm(param);
  }
  const dcdHandleCategorySubmit = (param) => {
    dcdCategories.push(param);
    setDcdCategories((prev) => {
      return [...prev];
    })
    setDcdCategoryIsForm(false);
  }
  //hàm sử lý sưj kiện xóa 1 đối tượng category
  const dcdHandleDelete =(dcdId)=>{
    console.log("App-Delete-dcdId",dcdId);
    //xóa trên api
    const dcdResponse = axios.delete(`https://667297e26ca902ae11b0ea9b.mockapi.io/dcdApi/dcd/DcdCategory/${dcdId}`);
    console.log("dcdResponse-Delete",dcdResponse);
    let dcdDelete = dcdCategories.filter(x=>x.dcdId !== dcdId);
    setDcdCategories(dcdDelete);
    console.log("Deleted:",dcdDelete);
  }
//sửa category
const dcdHandleEdit =(dcdCategory)=>{
  setDcdCategoryIsForm(true);
  setDcdCategoryEdit(dcdCategory)
}
  return (
    <div className="container border my-3">
      <h1>Đinh Công Định - Call API</h1>

      <DcdCategoryList renderDcdCategories = {dcdCategories}
        onAddNew = {dcdHandleAddNew}
        onDcdDelete ={dcdHandleDelete}
        onDcdEdit ={dcdHandleEdit}
      />
      <hr />
      {
        dcdCategoryIsForm === true? <DcdCategoryForm 
                            renderDcdCategory ={dcdCategoryEdit}
                            onCloseForm = {dcdHandleCloseForm}
                            onDcdCategorySubmit = {dcdHandleCategorySubmit}

        />:""
      }
    </div>
  );
}

export default DcdApp;
