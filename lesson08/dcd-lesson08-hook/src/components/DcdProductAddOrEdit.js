import React, { useState }from 'react'


export default function DcdProductAddOrEdit({dcdOnSubmit}) 
{
    const [dcd_productId, setdcd_productId] = useState('');
    const [dcd_productName, setdcd_productName] = useState('');
    const [dcd_quantity, setdcd_quantity] = useState('0');
    const [dcd_price, setdcd_price] = useState('0');
    const dcdHandleSubmit = (dcdEvent)=>{
        dcdEvent.preventDefault();
    let dcdProduct ={
        dcd_productId:dcd_productId,
        dcd_productName:dcd_productName,
        dcd_quantity:dcd_quantity,
        dcd_price:dcd_price,

    }
    dcdOnSubmit(dcdProduct)
}
  return (
    <div className='col-md-6'>
        <h2>Thêm mới sản phẩm / sửa đổi</h2>
        <hr/>
        <form>
           <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
                <input type="text" className="form-control" placeholder="Mã sản phẩm" 
                name='dcd_productId' value={dcd_productId}
                onChange={(ev)=>setdcd_productId(ev.target.value)}
                   aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
                <input type="text" className="form-control" placeholder="Tên sản phẩm" 
                  name='dcd_productName' value={dcd_productName}
                  onChange={(ev)=>setdcd_productName(ev.target.value)}
                   aria-describedby="basic-addon2"/>
          </div>
          <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm</span>
                <input type="number" className="form-control" placeholder="Số lượng sản phẩm" 
                   name='dcd_quantity' value={dcd_quantity}
                   onChange={(ev)=>setdcd_quantity(ev.target.value)}
                   aria-describedby="basic-addon3"/>
          </div>
          <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon4">Đơn giá</span>
                <input type="number" className="form-control" placeholder="Đơn giá" 
                    name='dcd_price' value={dcd_price}
                    onChange={(ev)=>setdcd_price(ev.target.value)}
                   aria-describedby="basic-addon4"/>
          </div>
          <button className='btn btn-primary' name ='dcdBtnAction'onClick={dcdHandleSubmit}>Thêm mới</button>
        </form>
    </div>
  )
}
