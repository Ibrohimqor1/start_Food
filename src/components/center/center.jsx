import React from "react";
import { MaksiBoks } from "../data";
import "../center/center.css";

const HotDog = () => {
  const newarray = MaksiBoks.filter((el) => el.category === "doma");
  return (
    <div>
      <header>
        <div id="HotDog" className="container">
          <h1 className="btn1">🌮HotDog</h1>
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
                    <button className="btn btn-warning">Add to card</button>
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
