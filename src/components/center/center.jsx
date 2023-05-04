import React from "react";
import { MaksiBoks } from "../data";
import "../center/center.css";
import { useCart } from "react-use-cart";
const HotDog = () => {
  const newarray = MaksiBoks.filter((el) => el.category === "doma");
  const { addItem, getItem, removeItem } = useCart();
  return (
    <div>
      <header>
        <div id="HotDog" className="container">
          <h1 className="btn1">Mahsulotlar</h1>
          <div className="parent">
            {newarray.map((el) => {
              return (
                <div className="cardss">
                  <div className="card">
                    <div className="img_container">
                      <img className="img" src={el.image} alt="" />
                    </div>

                    <h1 className="h1">{el.name}</h1>
                    <p className="p">{el.price} so'm</p>
                    {!getItem(el.id) ? (
                      <button
                        className="btn3 btn-warning "
                        onClick={() => addItem(el)}
                      >
                        Add to Card
                      </button>
                      
                    ) : (
                      <button
                        className="btn2 btn-danger "
                        onClick={() => removeItem(el.id)}
                      >
                        Remove Item
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
};

export default HotDog;
