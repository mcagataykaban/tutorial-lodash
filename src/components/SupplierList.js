import React from "react";
import _ from 'lodash'

 const SupplierList = (props) => {
     const deleteHandler = (id) => {
        props.setSuppliers(_.remove(props.suppliers, function(n) {
            return n.id != id;
          })  ) }
  return (
   <div className="container">
    <table className="table w-50">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Company Name</th>
          <th scope="col">Contact Name</th>
          <th scope="col">Contact Title</th>
          <th scope="col">City</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.suppliers.map((s) => (
          <tr key={s.id}>
            <th scope="row">{s.id}</th>
            <td>{s.companyName}</td>
            <td>{s.contactName}</td>
            <td>{s.contactTitle}</td>
            <td>{s.address.city}</td>
            <td><button onClick={()=> (deleteHandler(s.id))} className="btn btn-danger">x</button></td>

          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default SupplierList