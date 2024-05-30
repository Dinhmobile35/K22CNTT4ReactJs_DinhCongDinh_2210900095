import './App.css';
import {React,useState} from'react'
import DcdListProduct from './components/DcdListProduct';
import DcdProductAddOrEdit from './components/DcdProductAddOrEdit';
function DcdApp() {
  //mock data 
  const dcd_Products = [
    {
      dcd_productId:"2210900095"      
       ,dcd_productName:"Đinh Công Định"      
       ,dcd_quantity:15       
       ,dcd_price:1000
    },
    {
      dcd_productId:"P002"
        , dcd_productName:"IPhone 12"
        , dcd_quantity:20
        , dcd_price:1250
    },
    {
      dcd_productId:"P003"
        , dcd_productName:"IPhone 13"
        ,  dcd_quantity:10
        , dcd_price:1500
    },
]

//sử dụng hàm useState của hook
const [dcdListProduct , setDcdListProduct] = useState(dcd_Products)
 const dcdHandleSubmit=(dcdProduct)=>{
  console.log("AddOrEdit:",dcdProduct);
  //thêm vào dcdListProduct
  setDcdListProduct((dcdPrev)=>{
    return[
      ...dcdPrev,
    dcdProduct
  ]
  }
  )
}
  return (
    <div className="container border mt-5 p-3">
    <h1 className="text-center my-3">Sử lý chức năng CRUD-Hook</h1>
    <hr/>
    <DcdListProduct renderDcdProducts={dcdListProduct} />
    <hr/>
  <DcdProductAddOrEdit dcdOnSubmit={dcdHandleSubmit}/>
    </div>
  );
}

export default DcdApp;
