import React from "react";
import { useCart } from "react-use-cart";
import axios from "axios";
import "../components/end.css";

const Korzinka = () => {
  let total = 0;

  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();
  const postTest = () => {
    const userCheck = JSON.parse(localStorage.getItem("auth"));
    if (userCheck) {
      axios.post(
        `https://api.telegram.org/bot:5965095346:AAEXQvzRcP8v4NGOgNsxth5ZCsawoS6-8vA/sendMessage?chat_id=-1001654400509&text=${encodeURIComponent(
          `<b>Details:</b>
      
          <b>The operation was completed successfully!</b>
          <b>our couriers will contact you soon!</b>
          <b> Call Center: +998 99 855 73 85 </b>
        
          ${items
            .map((item) => {
              return ` <b>${item.name}</b> ${item.count} x ${item.price} som = ${item.count} `;
            })
            .join("")} <b>Total:</b> ${total} $`
        )}&parse_mode=html`
      );
    } else {
      window.location.replace("/register");
    }
  };

  return (
    <>
      <div className="container">
        {isEmpty ? <h1 className="ddd"> Yoq hc </h1> : null}

        {items.map((item) => {
          const prCount = item.count * item.price;
          total += prCount;

          if (item.count >= 1) {
            return (
              <div className="iiii">
                <div className="cardd" key={item.id}>
                  <div className="left">
                    {/* <img className="img" src={item.image} alt="" /> */}
                  </div>
                  <div className="right">
                    <div className="text">
                      <h6 className="h1">{item.name}</h6>

                      <hr />

                      <p className="texts_price">{item.price} $</p>
                    </div>
                    <div className="clicks">
                      <div className="btns">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.count++)
                          }
                          className="btn_plus"
                        >
                          +
                        </button>

                        <p className="p">{prCount} $</p>
                        <button
                          className="btn_plus"
                          onClick={() =>
                            updateItemQuantity(item.id, item.count--)
                          }
                        >
                          -
                        </button>
                      </div>
                      <h6
                        onClick={() => removeItem(item.id)}
                        className="delete"
                      >
                        <img
                          className="musr"
                          src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
                          alt=""
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            removeItem(item.id);
          }
        })}
        <div className="btnd">
          {/* <img className="h11" src="https://cdn.cookielaw.org/logos/3851eaea-a64c-4a2c-99e2-907f52d98962/e15a3e99-622e-4a6c-805b-673bee177911/edf28e1e-e1bf-494e-a4e3-be7d3e6cc37b/TrailFX_Logo_Standard.png" alt="" /> */}
          <div className="oplata">
            <h1 className="hh1"> Hammasi - </h1>
            <h1 className="obshi">{total} $</h1>
          </div>

          <button
            className="zakaz_btn"
            onClick={() => {
              postTest();
            }}
          >
            {" "}
            Zakaz berish
          </button>
        </div>
      </div>
    </>
  );
};

export default Korzinka;

// import React from 'react';
// import { useCart } from 'react-use-cart';

// const Basket = () => {
//   const { items, updateItemQuantity, removeItem, totalItems, totalCost } = useCart();

//   const handleIncrease = (itemId) => {
//     updateItemQuantity(itemId, items[itemId].quantity + 1);
//   };

//   const handleDecrease = (itemId) => {
//     if (items[itemId].quantity === 1) {
//       removeItem(itemId);
//     } else {
//       updateItemQuantity(itemId, items[itemId].quantity - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Basket</h1>
//       {Object.keys(items).map((itemId) => (
//         <div key={itemId}>
//           <h3>{items[itemId].name}</h3>
//           <p>Price: {items[itemId].price}$</p>
//           <p>Quantity: {items[itemId].quantity}</p>
//           <button onClick={() => handleIncrease(itemId)}>+</button>
//           <button onClick={() => handleDecrease(itemId)}>-</button>
//         </div>
//       ))}
//       <h3>Total Items: {totalItems}</h3>
//       <h3>Total Cost: {totalCost}$</h3>
//     </div>
//   );
// };

// export default Basket;
