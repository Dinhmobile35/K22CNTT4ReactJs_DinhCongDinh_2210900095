import React from "react";

export default function DcdCategoryList({ renderDcdCategories, onAddNew,onDcdDelete,onDcdEdit}) {
  let dcdCategoryElement = renderDcdCategories.map((dcdCategory, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{dcdCategory.dcdId}</td>
        <td>{dcdCategory.dcdCategoryName}</td>
        <td>
          {dcdCategory.dcdCategoryStatus === true ? "Hiển thị" : "Tạm khóa"}
        </td>
        <td>
          <button className="btn btn-danger" onClick={()=>dcdHandleDelete(dcdCategory.dcdId)}>
            Delete
            </button>
            <button className="btn btn-success" onClick={()=>dcdHandleEdit(dcdCategory)}>
            Edit</button>
        </td>
      </tr>
    );
  })
  const dcdHandleAdd = ()=> {
    onAddNew(true);
  }
  //hàm xử lý sự kiện xóa
const dcdHandleDelete = (dcdId)=>{
  
  if(window.confirm('bạn có thực sự muốn xóa Category có mã['+dcdId+']không?')){
  console.log("Delete:" ,dcdId);
  onDcdDelete(dcdId)
}else{

  }
  
}
//Xử lý sự kiện nút sửa
const dcdHandleEdit = (dcdCategory)=>{
  onDcdEdit(dcdCategory);
}
  return (
    <div className="container m-2">
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>{dcdCategoryElement}</tbody>
      </table>
      <button className="btn btn-primary" onClick={dcdHandleAdd}>Thêm mới</button>
    </div>
  );
}
