import React from 'react'

export default function DcdListUser({renderDcdListUsers}) {
    console.log("DcdListUsers:", renderDcdListUsers);
    // hiển thị dữ liệu
    let dcdElementUser = renderDcdListUsers.map((dcdUser, index) => {
        return (
            <>
                <tr>
                    <td>{dcdUser.id}</td>
                    <td>{dcdUser.UserName}</td>
                    <td>{dcdUser.Password}</td>
                    <td>{dcdUser.Email}</td>
                    <td>{dcdUser.Phone}</td>
                    <td>...</td>
                </tr>

            </>
        )
    })
  return (
    <div className='row'>
        <table className='table table-borderd'></table>
         <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chức Năng</th>
            </tr>
         </thead>
         <tbody>
           {dcdElementUser}
         </tbody>
    </div>
  )
}
