import { useEffect, useState } from "react";
import "./App.css";
import DcdCategoryList from "./components/DcdCategoryList";
import DcdCategoryForm from "./components/DcdCategoryForm";
import DcdApi from "./api/DcdApi";
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
  return (
    <div className="container border my-3">
      <h1>Đinh Công Định - Call API</h1>

      <DcdCategoryList renderDcdCategories = {dcdCategories}
        onAddNew = {dcdHandleAddNew}
      />
      <hr />
      {
        dcdCategoryIsForm === true? <DcdCategoryForm onCloseForm = {dcdHandleCloseForm}
          onDcdCategorySubmit = {dcdHandleCategorySubmit}
        />:""
      }
    </div>
  );
}

export default DcdApp;
