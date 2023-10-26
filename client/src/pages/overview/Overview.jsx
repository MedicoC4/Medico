import React from "react";
import css from "./overview.css";
import BarCharty from "./BarChart";
import icon from "../../assets/images/goals.png";
import icon2 from "../../assets/images/star.png";
import icon3 from "../../assets/images/book.png";
import icon4 from "../../assets/images/hour.png";
import icon5 from "../../assets/images/done.png";

const Overview = () => {
  return (
    <div className="container">
      <p className="title">Pharmacy Overview</p>
      <div className="card1">
        <h1>Total Time Spent</h1>
        <h2>Total</h2>
        <div className="chart-container">
          <BarCharty />
        </div>
      </div>
      <div className="cards-container">
        <div className="card2">
          {/* <div className='icon'>
            <img src={icon} alt='icon' />
            <span>Goals</span>
          </div> */}
          <div className="subcard2">2/3 days</div>
        </div>
        <div className="card3">
          {/* <div className='icon'>
            <img src={icon2} alt='icon' />
            <span>streaks</span>
          </div> */}
          <div className="subcard3">103 days</div>
        </div>
      </div>
      <p className="title2">Performance</p>
      <div className="card4-container">
        <div className="card4">
          <div className="subcard4">
            <img className="icon4" src={icon3} alt="icon" />
          </div>
            <h3>Time spent</h3>
        </div>
        <div className="card4">
          <div className="subcard4">
          <img className="icon4" src={icon4} alt="icon" />
          </div>
          <h3>Average Hours/day</h3>
        </div>
        <div className="card4">
          <div className="subcard4">
          <img className="icon4" src={icon5} alt="icon" />
          </div>
          <h3>Completed Courses</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
