import axios from "axios";
import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import Chart2 from "./Chart2";

const Main = () => {
  const [stateData, setStateData] = useState([]);
  const [report, setReport] = useState(false);
  const [expire, setExpire] = useState(false);

  const fetchApi = () => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        if (res) {
          setReport(res.data.confirmed.value);
          setExpire(res.data.deaths.value);
        } else {
          setReport(false);
          setExpire(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Data = async () => {
    const getData = await fetch(
      " https://api.covidtracking.com/v1/states/info.json"
    );
    setStateData(await getData.json());
  };

  useEffect(() => {
    Data();
    fetchApi();
  }, []);

  return (
    <main>
      <div className="containers">
        <div className="row">
          {/* <h1>hellow world</h1> */}

          <div className="sidebar col-md-2 mt-2  ">
            <div className="sidebar_head">
              <h2>Select States</h2>
            </div>
            <div className="sidebar_menu">
              <div className="form-check">
                {stateData.map((elem) => {
                  return (
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        {elem.state}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="menus col-md-9">
            <div className="cards">
              <div className="card_inner">
                <p className="text-primary-p">SELECTED STATES</p>
                <span className="font-bold text-title">56</span>
              </div>
            </div>
            <div className="cards">
              <div className="card_inner">
                <p className="text-primary-p">TESTED</p>
                <span className="font-bold text-title"> 356714976</span>
              </div>
            </div>
            <div className="cards">
              <div className="card_inner">
                <p className="text-primary-p">CONFIRMED</p>
                <span className="font-bold text-title">{report}</span>
              </div>
            </div>
            <div className="cards">
              <div className="card_inner">
                <p className="text-primary-p">DEATHS</p>
                <span className="font-bold text-title">{expire}</span>
              </div>
            </div>

            <div className="graphs">
              <h3>GRAPHICAL REPRESENTATION</h3>
            </div>

            <div className="charts ">
              <div className="row">
                <div className="left_chart col-md-5">
                  <Chart />
                </div>
                <div className="right_chart col-md-5">
                  <Chart2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
