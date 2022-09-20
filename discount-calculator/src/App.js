import React, { useState, useEffect } from "react";
import "./App.css";

function DiscountCalculator() {
  useEffect(() => {
    document.title = "Discount Calculator!";
  }, []);

  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState("");
  const [pay, setPay] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeDiscount = (event) => {
    setDiscount(event.target.value);
  };

  const calculateDiscount = () => {
    const result = price * (discount / 100).toFixed(2);
    setResult(result);
    const pay = (price - result).toFixed(2);
    setPay(pay);
    setIsActive(true);
  };

  const reset = () => {
    setPrice("");
    setDiscount("");
    setPay("");
    setResult("");
    setIsActive(false);
  };

  return (
    <div className="App">
      <div className="discount-calculator">
        <div className="calculator-header"> Discount Calculator</div>
        <div className="calculator-input-price">
          <div className="price-text"> Original Price </div>
          <div className="price-input">
            <input
              className="input-price-value"
              type="number"
              value={price}
              onChange={handleChangePrice}
            ></input>
          </div>
        </div>
        <div className="calculator-input-discount">
          <div className="discount-text"> Discount </div>
          <div className="discount-button">
            <div className="discount-button1">
              <button
                className="discount-buttons"
                value={10}
                onClick={handleChangeDiscount}
              >
                10%
              </button>
            </div>
            <div className="discount-button2">
              <button
                className="discount-buttons"
                value={15}
                onClick={handleChangeDiscount}
              >
                15%
              </button>
            </div>
            <div className="discount-button3">
              <button
                className="discount-buttons"
                value={20}
                onClick={handleChangeDiscount}
              >
                20%
              </button>
            </div>
            <div className="discount-input">
              <div className="discount-input-value">
                <input
                  className="discount-input-input"
                  type="number"
                  onChange={handleChangeDiscount}
                  value={discount}
                ></input>
                <div className="discount-percentage">%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="calculate-button">
          <button className="calculate-calculate" onClick={calculateDiscount}>
            Calculate
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
        <div
          className="calculate-display"
          style={{ display: isActive ? "flex" : "none" }}
        >
          <div className="final-price"> Final Price: {pay} </div>
          <div className="display-save"> You save {result} rupees!</div>
        </div>
      </div>
    </div>
  );
}

export default DiscountCalculator;
