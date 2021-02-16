import React, { useState } from "react"
import axios from "axios"
const TeamForm = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Email, setEmail] = useState("")
  const [Button, SetButton] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const records = {
      email: Email,
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
          SetButton(false)
        })
    } else {
      setErrorMessage("Please enter you email id")
    }
  }
  return (
    <form action="#">
      <div className="form-group">
        <label htmlfor="email"></label>
        <input
          type="email"
          value={Email}
          onChange={e => {
            setEmail(e.currentTarget.value)
            setErrorMessage("")
          }}
          placeholder="Your Work Email"
          className="input-field form-control"
          required
        />
      </div>

      <div className="text-center" style={{ marginTop: "20px" }}>
        <button
          className="btn btn-hybrid text-white"
          type="submit"
          onClick={handleSubmit}
          disabled={Button}
        >
          Let's Chat
        </button>
      </div>

      <p>
        <br></br>
      </p>
      <p style={{ color: "red", fontWeight: "bold" }}>{ErrorMessage}</p>
      <div className={"message " + SuccessMessage}>
        Thank you for contacting us – we will get back to you soon!
      </div>
      <br></br>
    </form>
  )
}

export default TeamForm
