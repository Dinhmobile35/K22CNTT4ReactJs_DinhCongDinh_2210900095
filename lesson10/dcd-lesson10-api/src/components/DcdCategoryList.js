import React from 'react'

export default function DcdCategoryList({renderDcdCategories}) {
    console. log("renderDcdCategories: ", renderDcdCategories);
    let dcdCategoryElement = renderDcdCategories.map((dcdCategory, index)=>{
    return(
    <tr key={index}>
    <th>{index+1}</th>
    <td>{dcdCategory.dcdId}</td>
    <td>{dcdCategory.dcdCategoryName}</td>
    <td>{dcdCategory.dcdCategoryStatus === true?"Hiển thị": "Tạm khóa"}</td>
    </tr>
    
    )
    })
    const dcdHandleAdd =()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2> Danh Sách Loại Sản Phẩm</h2>
            <table className='table table-bordered'>
                <thead>

                    <tr>

                        <th>#</th>
                        <th>Mã loại</th>
                        <th>Tên loại</th>
                        <th>Trang thai</th>
                        <th>Chức nang</th>
                    </tr>
                </thead>
                <tbody>
               {dcdCategoryElement}
                </tbody>
            </table>
            <button className='btn btn primary' onClick={dcdHandleAdd}>Thêm mới</button>
        </div>
    )
}
