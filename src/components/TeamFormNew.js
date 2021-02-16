import React, { useState } from "react"
import axios from "axios"
const TeamFormNew = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Email, setEmail] = useState("")
  const [TeamSize, setTeamSize] = useState("")
  const [Mobile, setMobile] = useState("")
  const [EmailError, setEmailError] = useState("")
  const [TeamSizeError, setTeamSizeError] = useState("")
  const [Button, SetButton] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const records = {
      email: Email,
      teamsize: TeamSize,
      mobile: Mobile,
    }
    if (Email === "") {
      setEmailError("Please enter you email id")
    }
    if (TeamSize === "") {
      setTeamSizeError("Please select team size")
    }
    if (Email !== "") {
      SetButton(true)
      setErrorMessage("")
      axios
        .post(`https://spotcloud.in/mail/team.php`, {
          records,
        })
        .then(res => {
          setSuccessMessage("show")
          setEmail("")
          setTeamSize("")
          setMobile("")
          SetButton(false)
        })
    } else {
    }
  }
  return (
    <form action="#" className="row">
      <div className="col-md-3">
        <input
          type="email"
          value={Email}
          onChange={e => {
            setEmail(e.currentTarget.value)
            setEmailError("")
          }}
          placeholder="Your work email *"
          className="input-field form-control"
          required
        />
        <p style={{ color: "red", fontWeight: "bold", fontSize: "10px" }}>
          {EmailError}
        </p>
      </div>
      <div className="col-md-3 col-6">
        <input
          type="text"
          className="form-control"
          value={Mobile}
          name="Mobile"
          placeholder="Mobile"
          onChange={e => {
            setMobile(e.currentTarget.value)
            setErrorMessage("")
          }}
        ></input>
      </div>

      <div className="col-md-3 col-6">
        <select
          type="text"
          className="form-control"
          placeholder="Team size*"
          value={TeamSize}
          onChange={e => {
            setTeamSize(e.currentTarget.value)
            setTeamSizeError("")
          }}
        >
          <option value="">Select Team Size</option>
          <option value="10-50">10-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">201-500</option>
          <option value="< 500">&gt; 500</option>
        </select>
        <p style={{ color: "red", fontWeight: "bold", fontSize: "10px" }}>
          {TeamSizeError}
        </p>
      </div>

      <div className="col-md-3">
        <button
          type="submit"
          className="btn  btn-hybrid text-white"
          type="submit"
          onClick={handleSubmit}
          disabled={Button}
        >
          Get in touch
        </button>
      </div>

      <div className="col-md-12">
        <p style={{ color: "red", fontWeight: "bold" }}>{ErrorMessage}</p>
        <div className={"teams message " + SuccessMessage}>
          Thank you for contacting us, we will get back to you within the next
          12 hours.
        </div>
      </div>
      <br></br>
    </form>
  )
}

export default TeamFormNew
