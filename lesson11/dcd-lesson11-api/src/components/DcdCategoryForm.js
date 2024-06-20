import React, { useState,useEffect } from "react";
import axios from "../api/DcdApi";

export default function DcdCategoryForm({ onCloseForm, onDcdCategorySubmit,renderDcdCategory }) {
  const [dcdId,setDcdId]=   useState("0");
  const [dcdCategoryName, setDcdCategoryName] = useState("");
  const [dcdCategoryStatus, setDcdCategoryStatus] = useState("true");
  useEffect(()=>{
    setDcdId(renderDcdCategory.dcdId)
    setDcdCategoryName(renderDcdCategory.dcdCategoryName)
    setDcdCategoryStatus(renderDcdCategory.dcdCategoryStatus)
  })
  const dcdHandleClose = (event) => {
    event.preventDefault();
    onCloseForm(false);
  }

  const dcdHandleSubmit = async (event) => {
    event.preventDefault();
    let dcdCategory = {
      dcdId: 0,
      dcdCategoryName: dcdCategoryName,
      dcdCategoryStatus: dcdCategoryStatus,
    };
    console.log("Add: ", dcdCategory);
    
    const response = await axios.post("/DcdCategory", dcdCategory);
    const newCategory = response.data;

    onDcdCategorySubmit(newCategory);
  }

  return (
    <div>
      <form onSubmit={dcdHandleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Category Name
          </span>
          <input
            type="text"
            name="dcdCategoryName"
            value={dcdCategoryName}
            onChange={(ev) => setDcdCategoryName(ev.target.value)}
            className="form-control"
            placeholder="Category Name"
            aria-label="Category Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={dcdCategoryStatus}
            name="dcdCategoryStatus"
            onChange={(ev) => setDcdCategoryStatus(ev.target.value)}
          >
            <option value="" disabled hidden>
              Lựa chọn trạng thái
            </option>
            <option value={true}>Hiển thị</option>
            <option value={false}>Tạm khóa</option>
          </select>
        </div>
        <button className="btn btn-success" type="submit">Ghi lại</button>
        <button className="btn btn-danger" onClick={dcdHandleClose}>Đóng</button>
      </form>
    </div>
  );
}
