import React, { useEffect, useState } from "react";
import API from "../../contexts/API";

export default function Basket() {
  const [shoppingItems, setShoppingItems] = useState("");
  useEffect(() => {
    API.getBasket()
      .then((response) => {
        console.log(response.data);
        setShoppingItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeBasket = (event) => {
    const id = event.target.value;
    API.basketDetele(id).
    then(() => API.getBasket().then((response) => {
      setShoppingItems(response.data);
    })
    .catch((error) => {
      console.log(error);
    }))
  }

  return (
    <div className="container">
      {shoppingItems &&
        shoppingItems.map((item) => (
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Product</th>
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
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">${item.price}</td>
                <td className="actions" data-th="">
                  <button onClick={removeBasket} value={item._id} className="btn btn-danger btn-sm">
                    remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      <tfoot>
        <tr>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fa fa-angle-left"></i> Continue Shopping
            </a>
          </td>
          <td colSpan="2" className="hidden-xs"></td>
          <td className="hidden-xs text-center">
            <strong>Total $1.99</strong>
          </td>
          <td>
            <a href="#" className="btn btn-success btn-block">
              Checkout <i className="fa fa-angle-right"></i>
            </a>
          </td>
        </tr>
      </tfoot>
    </div>
  );
}
