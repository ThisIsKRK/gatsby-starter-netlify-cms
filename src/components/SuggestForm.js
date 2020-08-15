import React, { useState } from "react"
import axios from "axios"
const SuggestForm = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Message, setMessage] = useState("")
  const [City, setCity] = useState("")
  const [Locality, setLocality] = useState("")
  const [SpaceName, setSpaceName] = useState("")
  const [Button, SetButton] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()

    if (
      Name !== "" &&
      Email !== "" &&
      City !== "" &&
      Phone !== "" &&
      Locality !== "" &&
      SpaceName !== ""
    ) {
      SetButton(true)
      setErrorMessage("")
      axios
        .post(`https://gofloaters.firebaseapp.com/website/sendemail`, {
          templateId: "suggestaspace",
          messageData: {
            name: Name,
            email: Email,
            phone: Phone,
            city: City,
            message: Message,
            locality: Locality,
            spacename: SpaceName,
          },
        })
        .then(res => {
          setSuccessMessage("show")
          setName("")
          setEmail("")
          setPhone("")
          setCity("")
          setLocality("")
          setSpaceName("")
          setMessage("")
          setErrorMessage("")
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
        <label htmlFor="City">City *:</label>
        <input
          type="text"
          className="form-control"
          value={City}
          onChange={e => {
            setCity(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Locality">Locality *:</label>
        <input
          type="text"
          className="form-control"
          value={Locality}
          onChange={e => {
            setLocality(e.currentTarget.value)
            setErrorMessage("")
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="SpaceName">Space Name *:</label>
        <input
          type="text"
          className="form-control"
          value={SpaceName}
          onChange={e => {
            setSpaceName(e.currentTarget.value)
            setErrorMessage("")
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="YourMessage">Your Message:</label>
        <textarea
          type="text"
          className="form-control"
          id="YourMessage"
          value={Message}
          onChange={e => setMessage(e.currentTarget.value)}
        ></textarea>
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

export default SuggestForm
