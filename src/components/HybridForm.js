import React, { useState } from "react"
import axios from "axios"
const HybridForm = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [TeamSize, setTeamSize] = useState("")
  const [City, setCity] = useState("")
  const [Button, SetButton] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const records = {
      name: Name,
      email: Email,
      teamsize: TeamSize,
      city: City,
      contacttype: "Hybrid Space",
    }
    if (Name !== "" && Email !== "") {
      SetButton(true)
      setErrorMessage("")
      axios
        .post(`https://spotcloud.in/mail/listyourspace.php`, {
          records,
        })
        .then(res => {
          setSuccessMessage("show")
          setName("")
          setEmail("")
          setTeamSize("")
          setCity("")
          SetButton(false)
        })
    } else {
      setErrorMessage("Please fill all the mandatory Fields")
    }
  }
  return (
    <form action="#">
      <div className="form-group">
        <label htmlfor="Name">Your Name *:</label>
        <input
          type="text"
          value={Name}
          onChange={e => {
            setName(e.currentTarget.value)
            setErrorMessage("")
          }}
          placeholder="Your name"
          className="input-field form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlfor="email">Email address *:</label>
        <input
          type="email"
          value={Email}
          onChange={e => {
            setEmail(e.currentTarget.value)
            setErrorMessage("")
          }}
          placeholder="Work Email"
          className="input-field form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlfor="Phone">Team Size *:</label>
        <input
          type="text"
          placeholder="Team Size"
          className="input-field form-control"
          value={TeamSize}
          onChange={e => {
            setTeamSize(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlfor="City">City *:</label>
        <input
          type="text"
          className="form-control"
          value={City}
          onChange={e => {
            setCity(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
          placeholder="City"
          className="input-field form-control"
        />
      </div>

      <div className="text-center" style={{ marginTop: "20px" }}>
        <button
          className="btn btn-hybrid text-white"
          type="submit"
          onClick={handleSubmit}
          disabled={Button}
        >
          GO HYBRID NOW
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

export default HybridForm
