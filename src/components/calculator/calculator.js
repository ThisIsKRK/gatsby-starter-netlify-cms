import React, { useState } from "react"
import RangeSlider from "react-bootstrap-range-slider"
import Tooltip from "react-simple-tooltip"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
const Calculator = () => {
  const [teamsize, setteamsize] = useState(5)
  const [days, setdays] = useState(5)
  const [monthlyrent, setmonthlyrent] = useState(teamsize * 7000)
  function changeValue(value) {
    setteamsize(value)
    setmonthlyrent(value * 7000)
  }
  return (
    <div className="row teamMinPadding teamForm calculator">
      <div className="col-md-12">
        <h4>Calculate how much you can save with us</h4>
        <br></br>
      </div>
      <div className="col-md-8">
        <div className="container">
          <div className="row">
            <div className="col-md-6 paddingTop20">
              <label>
                Team Size{" "}
                <Tooltip
                  border="#000"
                  background="#000"
                  content="What is your team size?"
                >
                  <i className="fa fa-info-circle"></i>
                </Tooltip>{" "}
              </label>
              <RangeSlider
                value={teamsize}
                onChange={changeEvent => {
                  changeValue(changeEvent.target.value)
                }}
                step="5"
                min="0"
                max="100"
              />{" "}
              {teamsize}
            </div>
            <div className="col-md-6 paddingTop20">
              <label>
                Work together days / month{"  "}
                <Tooltip
                  border="#000"
                  background="#000"
                  content="How many days do you plan to work together as a team"
                >
                  <i className="fa fa-info-circle"></i>
                </Tooltip>{" "}
              </label>
              <RangeSlider
                value={days}
                onChange={changeEvent => setdays(changeEvent.target.value)}
                min="5"
                max="20"
              />{" "}
              {days}
            </div>
            <div className="col-md-6 paddingTop20">
              <label>
                Current Monthly Rent {"  "}
                <Tooltip
                  border="#000"
                  background="#000"
                  content="How much monthly rent you pay now for your office"
                >
                  <i className="fa fa-info-circle"></i>
                </Tooltip>{" "}
              </label>
              <input
                className="form-control"
                value={monthlyrent}
                onChange={changeEvent =>
                  setmonthlyrent(changeEvent.target.value)
                }
              ></input>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-4 leftBorder">
        <div className="container">
          <div className="row">
            <div className="col-md-12 paddingTop20 text-center">
              <h3 style={{ fontWeight: "bold" }}>Annual Savings</h3>
              <p
                style={{
                  fontSize: "38px",
                  lineHeight: "32px",
                  fontWeight: "600",
                  color: "#18191f",
                  paddingTop: "15px",
                }}
              >
                {" "}
                ₹{" "}
                {(Number(monthlyrent * 12) - Number(teamsize * 12 * days * 200))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
            <div className="col-md-12 text-center">
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  fontWeight: "600",
                  color: "#18191f",
                  paddingTop: "15px",
                }}
              >
                {" "}
                GoFloaters Space Fee = ₹ 200 / pp / day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Calculator
