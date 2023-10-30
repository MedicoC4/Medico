import React from "react";
import "./style.css";

const Statistics = () => {
  return (
    <div>
      <div className="big___container___statistics">
        <div className="title___stat___photo">
          <div className="title___stat">Pharmacy Statistics</div>
          <div className="photo___statistics">
            <div className="container___img___stat">
              <img className="image___statistcs" src="" alt="ggggg"></img>
            </div>
          </div>
        </div>
        <div className="statistic___cont___parent">
          <div className="container___left___stat">
            <div className="two___container___prodSales">
              <div className="stat___prod___container___all">
                <div className="title___prod___stat">
                  <div className="title___img_prodStat">
                    <div className="title___prod">Total products</div>
                    <div className="icon___prod___stat">a</div>
                  </div>
                </div>
                <div className="products___number___stat">1,256</div>
                <div className="container___btn___stat">
                  <button className="btn___addProd___stat">
                    Add new product
                  </button>
                </div>
              </div>
              <div className="stat___prod___container___all">
                <div className="title___prod___stat">
                  <div className="title___img_prodStat">
                    <div className="title___prod">Total products</div>
                    <div className="icon___prod___stat">a</div>
                  </div>
                </div>
                <div className="products___number___stat">1,256</div>
                <div className="container___btn___stat">
                  <button className="btn___addProd___stat">
                    Add new product
                  </button>
                </div>
              </div>
            </div>
            <div className="stat___graph1">
              <div className="container___title___filter">
                <h1 className="title___graph">Total Sales By Week</h1>
                <div className="filter___btns">
                  <button className="filter___year">Year</button>
                  <button className="filter___year">Month</button>
                  <button className="filter___week">Week</button>
                </div>
              </div>
              <div className="container___reslt___avrg">
                <h1 className="rsl___title___graph">37,000</h1>
                <div className="container___onlyAvrg___graph">
                  <div className="avrg___graph">Avg. 2500 units/week</div>
                </div>
              </div>
            </div>
            <div className="stat___graph1">
              <div className="container___title___filter">
                <h1 className="title___graph">Total Sales By Year</h1>
                <div className="filter___btns">
                  <button className="filter___year">Year</button>
                </div>
              </div>
              <div className="container___reslt___avrg">
                <h1 className="rsl___title___graph">37,000</h1>
                <div className="container___onlyAvrg___graph">
                  <div className="avrg___graph">Avg. 2500 units/year</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container___right___stat">
            <div className="top___selling___prod___country">
              <div className="container___title___filter">
                <h1 className="title___graph">Top Selling products</h1>
                <div className="filter___btns">
                  <button className="filter___year">Product</button>
                </div>
              </div>
              <div className="details___cont___topsell">
                <div className="details___top___selling___graph">
                  <p className="top___prod___sales___title">Product Name</p>
                  <div className="top___prod___sales">Total Sales</div>
                </div>
                <div className="line___between"></div>
              </div>
              <div className="details___cont___topsell">
                <div className="details___top___selling___graph">
                  <p className="top___prod___sales___title">Country</p>
                  <div className="top___prod___sales">Country Sales</div>
                </div>
                <div className="line___between"></div>
              </div>
              <div className="details___cont___topsell">
                <div className="details___top___selling___graph">
                  <p className="top___prod___sales___title">Country</p>
                  <div className="top___prod___sales">Country Sales</div>
                </div>
                <div className="line___between"></div>
              </div>
              <div className="details___cont___topsell">
                <div className="details___top___selling___graph">
                  <p className="top___prod___sales___title">Country</p>
                  <div className="top___prod___sales">Country Sales</div>
                </div>
                <div className="line___between"></div>
              </div>
            </div>
            <div className="stat___graph1">
              <div className="container___title___filter">
                <h1 className="title___graph">Total Sales By Condition</h1>
                <div className="filter___btns">
                  <button className="filter___week">Condition</button>
                </div>
              </div>
              <div className="container___reslt___avrg">
                <h1 className="rsl___title___graph">37,000</h1>
                <div className="container___onlyAvrg___graph">
                  <div className="avrg___graph">Avg. 2500 units/condition</div>
                </div>
              </div>
            </div>
            <div className="stat___graph1">
              <div className="container___title___filter">
                <h1 className="title___graph">Total Sales By Gender</h1>
                <div className="filter___btns">
                  <button className="filter___week">Gender</button>
                </div>
              </div>
              <div className="container___reslt___avrg">
                <h1 className="rsl___title___graph">37,000</h1>
                <div className="container___onlyAvrg___graph">
                  <div className="avrg___graph">Avg. 2500 units/gender</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rang___prod___statGraph___container">
          <div className="titles___cont___graphProd">
            <div className="title___buttom___graph">Name</div>
            <div className="title___buttom___graph">Name</div>
            <div className="title___buttom___graph">Name</div>
            <div className="title___buttom___graph">Name</div>
          </div>
          <div className="titles___contDetails___graphProd">
            <div className="title___buttom___graph">Name</div>
            <div className="cont___activeBtn">
              <div className="title___buttom___graph___active">Active</div>
            </div>
            <div className="title___buttom___graph">Stock count</div>
            <div className="cont___increase___graph">
              <div className="title___buttom___graph___white">Total Value</div>
              <div className="title___buttom___graph">increase</div>
            </div>
          </div>
          <div className="titles___contDetails___graphProd___black">
            <div className="title___buttom___graph">Name</div>
            <div className="cont___activeBtn">
              <div className="title___buttom___graph___inactive___black">
                Inactive
              </div>
            </div>
            <div className="title___buttom___graph">Stock count</div>
            <div className="cont___increase___graph">
              <div className="title___buttom___graph___black">Total Value</div>
              <div className="title___buttom___graph">increase</div>
            </div>
          </div>
          <div className="titles___contDetails___graphProd">
            <div className="title___buttom___graph">Name</div>
            <div className="cont___activeBtn">
              <div className="title___buttom___graph___active">Active</div>
            </div>
            <div className="title___buttom___graph">Stock count</div>
            <div className="cont___increase___graph">
              <div className="title___buttom___graph___white">Total Value</div>
              <div className="title___buttom___graph">increase</div>
            </div>
          </div>
          <div className="titles___contDetails___graphProd___black">
            <div className="title___buttom___graph">Name</div>
            <div className="cont___activeBtn___black">
              <div className="title___buttom___graph___inactive___black">
                Inactive
              </div>
            </div>
            <div className="title___buttom___graph">Stock count</div>
            <div className="cont___increase___graph">
              <div className="title___buttom___graph___black">Total Value</div>
              <div className="title___buttom___graph">increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
