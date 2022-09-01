// rfc
import React, { useState } from "react";
import BaiTapChonXe from "./BaiTapChonXe";

export default function UseStateDemo() {
  const [like, setLike] = useState(1);
  return (
    <div className="container">
      <div className="card w-25">
        <img src="https://i.pravatar.cc?=1" alt="..." />
        <div className="card-body">
          <h3>Ho ten: Pham Xuan Binh</h3>
          <p>Tuoi: 18 </p>
          <p>Like: {like}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>

      <hr />
      <BaiTapChonXe></BaiTapChonXe>
    </div>
  );
}
