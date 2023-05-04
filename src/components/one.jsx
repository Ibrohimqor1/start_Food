import React from "react";
import "./one.css";
const one = () => {
  return (
    <div>
      <div className="one">
        <div className="item">
          <img
            className="item_img"
            src="https://cdn-icons-png.flaticon.com/512/7133/7133312.png"
            alt=""
          />
        </div>
        <div className="item">
          <img
            className="item_img"
            src="https://cdn-icons-png.flaticon.com/512/5573/5573827.png"
            alt=""
          />
        </div>
        <div className="item">
          <img
            className="item_img"
            src="https://cdn-icons-png.flaticon.com/512/7133/7133312.png"
            alt=""
          />
        </div>

        <div className="item">
          <img
            className="item_img"
            src="https://cdn-icons-png.flaticon.com/512/5573/5573827.png"
            alt=""
          />
        </div>
        
      </div>
      






<form action="" method="post">
  <div class="form-row">
  <input name="name_1" placeholder="Your name" type="text">
  </div>

  <br>

  <div class="form-row">
  <input name="surname_1" placeholder="Your surname" type="text">
  </div>

  <br>

  <div class="form-row">
    <div class="g-recaptcha" data-sitekey="__Site_key__"></div>
  </div>

  <br>

  <input name="sendEmail" type="submit" value="Call me back">

  <br>

  <h4 id="response"></h4>
  </form>

    <script src='https://www.google.com/recaptcha/api.js'></script>
  

    </div>
  );
};

export default one;
