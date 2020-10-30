import React from "react";

function Table (props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}
export default Table;
