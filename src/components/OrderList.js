import React from "react";

 const OrderList = (props) => {
  return (
   <div className="container">
    <table className="table w-50">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Ship Name</th>
          <th scope="col">Customer Id</th>
          <th scope="col">Employee Id</th>
          <th scope="col">freight</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {props.orders.map((s) => (
          <tr key={s.id}>
            <th scope="row">{s.id}</th>
            <td>{s.shipName}</td>
            <td>{s.customerId}</td>
            <td>{s.employeeId}</td>
            <td>{s.freight}</td>
            <td>{s.shipAddress.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default OrderList