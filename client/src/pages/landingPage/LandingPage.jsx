import React from "react";
import "./home.css";
import moneySVG from "../../assets/images/money.svg";
import syncIcon from "../../assets/images/sync.svg";
import arrowUp from "../../assets/images/arrow-up.svg";
import arrowDown from "../../assets/images/arrow-down.svg";


const LandingPage = () => {
  return (
    <div className="dashboard_main_container">
      <div className="sideNav"></div>
      <div className="dashboard_container">
        <h1>Dashboard</h1>
        <div class="grid">
          <div class="item-1">
            <div>
              <p>Overview</p>
              <div>
                <img src={moneySVG} alt="" />
                <div>
                  <p>income</p>
                  <p>$9,876.33</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item-2">
            <div>
              <div>
                <div>
                  <img src={syncIcon} alt="" />
                  <p>Total Transactions</p>
                  <p>$20,850</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={arrowDown} alt="" />
                  <p>Total Income</p>
                  <p>$20,850</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={arrowUp} alt="" />
                  <p>Expenses</p>
                  <p>$20,850</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={arrowDown} alt="" />
                  <p>Total Income</p>
                  <p>$20,850</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item-3">
            <p>item-3</p>
          </div>
          <div class="item-4">
            <p>item-4</p>
          </div>
          <div class="item-5">
            <p>item-5</p>
          </div>
          <div class="item-6">
            <p>item-6</p>
          </div>
          <div class="item-7">
            <p>item-7</p>
          </div>
          <div class="item-8">
            <p>item-8</p>
          </div>
          <div class="item-9">
            <p>item-9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
