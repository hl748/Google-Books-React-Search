import React from "react";

function Item (props) {
  return (
        <tr>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>
        <img alt="img" src={props.image}></img>
        </td>
        </tr>
  );
}
export default Item;