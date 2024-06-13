import './App.css';
import {React,useEffect,useState} from'react'
import DcdStudentList from './components/DcdStudentList';
import axios from "axios";
function DcdApp() {
 
// Sử dụng hàm useState cua hook
const [dcdStudentList, setDcdStudentList]=useState([]);
// Get data from api
const dcdGetStudent = async () => {
try {
const response = await axios.get("https://666a9d687013419182d011ac.mockapi.io/api/dcdStudent");
setDcdStudentList(response.data);
} catch (error) {
console.error("Error fetching data:", error);
}
};
useEffect(() => {
  dcdGetStudent();
  }, []);
  return (
    <div className="container border mt-5 p-3">
    <h1 className="text-center my-3">Sử lý chức năng CRUD-Hook-API</h1>
    <DcdStudentList renderDcdStudentList ={dcdStudentList} />
    </div>
  );
}
export default DcdApp;
