import React, { useState } from "react"
import axios from "axios"
const GoFloatersCommunityAssistance = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [BusinessName, setBusinessName] = useState("")
  const [City, setCity] = useState("")
  const [Impacted, setImpacted] = useState("")
  const [Intersted, setIntersted] = useState("")
  const [Button, SetButton] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()

    if (
      Name !== "" &&
      Email !== "" &&
      City !== "" &&
      Phone !== "" &&
      Intersted !== "" &&
      BusinessName !== "" &&
      Impacted !== ""
    ) {
      SetButton(true)
      setErrorMessage("")
      axios
        .post(`https://gofloaters.firebaseapp.com/website/sendemail`, {
          templateId: "communityassistance",
          messageData: {
            name: Name,
            email: Email,
            phone: Phone,
            city: City,
            businessname: BusinessName,
            impacted: Impacted,
            interested: Intersted,
          },
        })
        .then(res => {
          setSuccessMessage("show")
          setName("")
          setEmail("")
          setPhone("")
          setCity("")
          setBusinessName("")
          setImpacted("")
          setIntersted("")
          SetButton(false)
        })
    } else {
      setErrorMessage("Please fill all the mandatory Fields")
    }
  }
  return (
    <form action="#">
      <div className="form-group">
        <label htmlFor="Name">Your Name *:</label>
        <input
          type="text"
          className="form-control"
          value={Name}
          onChange={e => {
            setName(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address *:</label>
        <input
          type="email"
          className="form-control"
          value={Email}
          onChange={e => {
            setEmail(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Phone">Phone *:</label>
        <input
          type="text"
          className="form-control"
          value={Phone}
          onChange={e => {
            setPhone(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="City">Name of your business *:</label>
        <input
          type="text"
          className="form-control"
          value={BusinessName}
          onChange={e => {
            setBusinessName(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Locality">City in which you are based *:</label>
        <input
          type="text"
          className="form-control"
          value={City}
          onChange={e => {
            setCity(e.currentTarget.value)
            setErrorMessage("")
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="SpaceName">
          How has your business been impacted by COVID-19 *:
        </label>
        <textarea
          type="text"
          className="form-control"
          value={Impacted}
          onChange={e => {
            setImpacted(e.currentTarget.value)
            setErrorMessage("")
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Which offering">
          Which offering are you interested in *
        </label>
        <select
          name
          value={Intersted}
          onChange={e => {
            setIntersted(e.currentTarget.value)
            setErrorMessage("")
          }}
          className="form-control"
        >
          <option value="">---</option>
          <option value="WorkPods">WorkPods</option>
          <option value="Discounted shared office">
            Discounted shared office
          </option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        disabled={Button}
        className="btn btn-default"
      >
        Submit
      </button>
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

export default GoFloatersCommunityAssistance
