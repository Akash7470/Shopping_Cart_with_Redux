import { React, useEffect, useState } from "react";
import axios from "axios";
import { actionCreators } from "../service/AllActionCreators";
import { useDispatch } from "react-redux";

export default function ShoppingHomepage() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let productDetails = await axios.get("http://localhost:5000/products");
    setData(productDetails.data);
  };

  return (
    <>
      {data?.map((element, i) => {
        return (
          <div
            key={i}
            className="card"
            style={{ width: "18rem", margin: "1rem", height: "35rem" }}
          >
            <img
              src={element?.image}
              className="card-img-top"
              alt="NAhi dikh rhi h"
              style={{ width: "285px", height: "330px" }}
            />
            <div className="card-body">
              <h1>$ {element?.price}</h1>
              <h5 className="card-title">{element?.title.substring(0, 20)}</h5>
              <p className="card-text">
                {element?.description.substring(0, 54)}
              </p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch(
                    actionCreators.addToCartButton({
                      element,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
