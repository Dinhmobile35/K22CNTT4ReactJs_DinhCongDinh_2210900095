import React from "react";

export default function DcdCategoryList({ renderDcdCategories, onAddNew }) {
  let dcdCategoryElement = renderDcdCategories.map((dcdCategory, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{dcdCategory.dcdId}</td>
        <td>{dcdCategory.dcdCategoryName}</td>
        <td>
          {dcdCategory.dcdCategoryStatus === true ? "Hiển thị" : "Tạm khóa"}
        </td>
        <td>Edit | Del</td>
      </tr>
    );
  })
  const dcdHandleAdd = ()=> {
    onAddNew(true);
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
