import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Basket() {
  const [shoppingItems, setShoppingItems] = useState("");
  let arrayItems = [];
  useEffect(() => {
    let keys = Object.keys(localStorage);
    keys.forEach((item) => {
      var json_str = localStorage.getItem(item);
      try {
        const objectItems = JSON.parse(json_str);
        arrayItems.push(objectItems[0]);
        setShoppingItems(arrayItems)
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const removeBasket = (event) => {
    const id = event.target.value;
    localStorage.removeItem(id);
    shoppingItems.filter((basket) => basket._id !== id);
    window.location.reload()
  };

  return (
    <div className="container">
      <h2>Shopping Basket</h2>
      {shoppingItems.length > 0
        ? shoppingItems.map((item, index) => (
          <Link to={`/${item._id}`} >
            <table key={item._id} id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>Product {index + 1}</th>
                  <th style={{ width: "10%" }}>Price</th>
                  <th style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-sm-2 hidden-xs">
                        <img
                          src={item.selectedPic}
                          alt="..."
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-sm-10">
                        <h4 className="nomargin">{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">${item.price}</td>
                  <td className="actions" data-th="">
                    <Link to={`/${item._id}`}>
                  <button
                      className="btn btn-success btn-sm"
                    >
                      bid
                    </button>
                    </Link>
                    <button
                      onClick={removeBasket}
                      value={item._id}
                      className="btn btn-danger btn-sm"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </Link>
          ))
        : ""}
      <tfoot>
        <tr>
          <td>
            <a href="/" className="btn btn-warning">
              <i className="fa fa-angle-left"></i> Continue Shopping
            </a>
          </td>
          <td colSpan="2" className="hidden-xs"></td>
          <td className="hidden-xs text-center">
            <strong>
              Total: $
              {shoppingItems.length > 0
                ? shoppingItems
                    .map((p) => parseInt(p.price))
                    .reduce((acc, num) => {
                      return acc + num;
                    })
                : ""}
            </strong>
          </td>
        </tr>
      </tfoot>
    </div>
  );
}
