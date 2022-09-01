import React from "react";
import { useState } from "react";

export default function BaiTapChonXe() {
  const [img, setImg] = useState("./img/products/red-car.jpg");
  const handleChangeColor = (color) => {
    setImg(`./img/products/${color}-car.jpg`);
  };
  return (
    <div>
      <h3>Bai tap chon xe</h3>
      <div className="row">
        <div className="col-6">
          <img src={img} alt="..." className="w-100" />
        </div>
        <div className="col-6">
          <button
            className="btn"
            style={{ background: "red", color: "#fff" }}
            onClick={() => {
              handleChangeColor("red");
            }}
          >
            Red
          </button>
          <button
            className="btn"
            style={{ background: "silver", color: "#fff" }}
            onClick={() => {
              handleChangeColor("silver");
            }}
          >
            Silver
          </button>
          <button
            className="btn"
            style={{ background: "black", color: "#fff" }}
            onClick={() => {
              handleChangeColor("black");
            }}
          >
            Black
          </button>
          <button
            className="btn"
            style={{ background: "#eee", color: "#fff" }}
            onClick={() => {
              handleChangeColor("steel");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
}
