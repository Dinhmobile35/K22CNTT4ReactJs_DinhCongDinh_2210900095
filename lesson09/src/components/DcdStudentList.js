import React from 'react'

export default function DcdStudentList({renderDcdStudentList}) {
    console.log("Data:",renderDcdStudentList);
    let dcdElement = renderDcdStudentList.map((dcdStudent, index)=>{
        return (
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{dcdStudent.dcdId}</td>
        <td>{dcdStudent.dcdName}</td>
        <td>{dcdStudent.dcdAge}</td>
        <td>{dcdStudent.dcdPhone}</td>
        <td>{dcdStudent.dcdEmail}</td>
        <td>{dcdStudent.dcdStatus}</td>
       <td>
        Edit / Delete
        </td>
        </tr>
        
        )
    });
    return (
        <div>
            <h2>Danh sách sinh viên </h2>
            <table className="table table bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
        
                    </tr>
                </thead>
                <tbody>
               {dcdElement}
                </tbody>
            </table>
        </div>
    )
}
