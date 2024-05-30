import React from 'react'

export default function DcdListProduct({renderDcdProducts}) {
    console.log("List Product: ",renderDcdProducts);
    let dcdTong=0;
    let dcdElementProduct = renderDcdProducts.map((DcdProduct,index)=>{
        dcdTong += DcdProduct.dcd_quantity*DcdProduct.dcd_price;
     return(
        <>
        <tr key={index}>
        <td>{index+1}</td>
        <td>{DcdProduct.dcd_productId}</td>
        <td>{DcdProduct.dcd_productName}</td>
        <td>{DcdProduct.dcd_quantity}</td>
        <td>{DcdProduct.dcd_price}</td>
        <td>{DcdProduct.dcd_quantity*DcdProduct.dcd_price}</td>
        <td>
            <button className='btn btn-success mx-1'>
            <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button className='btn btn-danger mx-1'>
            <i class="fa-solid fa-delete-left"></i>
            </button>
        </td>
       

    </tr>
        </>
     )
    })
  return (
    <div>
        <h2>Danh sách sản phẩm</h2>
    <table className='table table-border'>
     <thead>
    <tr>
        <th>#</th>
        <th>Mã sản phẩm</th>
        <th>tên sản phẩm</th>
        <th>Số lượng</th>
        <th>Đơn Giá</th>
        <th>Thành tiền</th>
        <th>Chức Năng</th>
    </tr>
     </thead>
     <tbody>
    {dcdElementProduct}
     </tbody>
     <tfoot>
        <tr>
            <th colSpan={5} className='text-end'>Tổng Cộng:</th>
            <th colSpan={2} className='text-start'>
                { dcdTong}
            </th>
        </tr>
     </tfoot>
    </table>
    </div>
  )
}
