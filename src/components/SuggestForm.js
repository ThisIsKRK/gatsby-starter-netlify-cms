import React, { useState } from "react"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"
const SuggestForm = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Name, setName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Message, setMessage] = useState("")
  const [City, setCity] = useState("")
  const [Locality, setLocality] = useState("")
  const [CafeBusiness, setCafeBusiness] = useState("")
  const [SpaceName, setSpaceName] = useState("")
  const [Button, SetButton] = useState(false)
  const [disableClass, SetdisableClass] = useState(true)
  function onChange(value) {
    console.log("Captcha value:", value)
    if (value) {
      SetdisableClass(false)
    } else {
      SetdisableClass(true)
    }
  }

  if (
    Name !== "" &&
    Email !== "" &&
    City !== "" &&
    Phone !== "" &&
    Locality !== "" &&
    SpaceName !== ""
  ) {
    SetdisableClass(true)
  }
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
    <form
      action="https://bigin.zoho.com/crm/WebToContactForm"
      name="CMIGNITEWebToContacts"
      method="POST"
      acceptCharset="UTF-8"
    >
      <input
        type="text"
        name="zc_gad"
        id="zc_gad"
        value=""
        style={{ display: "none" }}
      />
      <input
        type="text"
        style={{ display: "none" }}
        name="xnQsjsdp"
        value="a854f9059d790695017d3c4ff4579a262e58324bb2304e16c3b065342359f000"
      />

      <input
        type="text"
        style={{ display: "none" }}
        name="xmIwtLD"
        value="73f4525508bb3339e7d15b9ea5cb5eb6ff1e5feb5e7a3bd6d66b8850f2243836"
      />
      <input
        type="text"
        style={{ display: "none" }}
        name="actionType"
        value="Q29udGFjdHM="
      />
      <input
        type="text"
        style={{ display: "none" }}
        name="returnURL"
        value="https://gofloaters.com/suggestthanks/"
      />
      <div className="form-group">
        <label htmlFor="Name">First Name *:</label>
        <input type="text" className="form-control" name="First Name" />
      </div>
      <div className="form-group">
        <label htmlFor="Name">Last Name *:</label>
        <input type="text" className="form-control" name="Last Name" />
      </div>
      <div className="form-group">
        <label htmlFor="SpaceName">Space Name *:</label>
        <input type="text" className="form-control" name="Account Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address *:</label>
        <input type="email" className="form-control" name="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="Phone">Phone *:</label>
        <input type="text" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="City">City *:</label>
        <input
          name="CONTACTCF1"
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Locality">Locality *:</label>
        <input type="text" name="CONTACTCF2" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="SpaceName">Type of Space *</label>
        <select name="CONTACTCF2" type="text" className="form-control">
          <option value="-None-">-None-</option>
          <option value="Cafe or Restaurant">Cafe or Restaurant</option>
          <option value="Coworking Space">Coworking Space</option>
          <option value="Office Space">Office Space</option>
          <option value="Meeting or Event Space">Meeting or Event Space</option>
        </select>
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
      <ReCAPTCHA
        sitekey="6LfeE8gZAAAAAJyawsFSisrZuiasCQudfimFLb7j"
        onChange={onChange}
      />
      <br></br>
      <button type="submit" className="btn btn-default" disabled={disableClass}>
        Submit
      </button>
      <p>
        <br></br>
      </p>
      <p style={{ color: "red", fontWeight: "bold" }}>{ErrorMessage}</p>
      <div className={"message " + SuccessMessage}>
        Space Partner has been notified. They will get in touch with you shortly
      </div>
      <br></br>
    </form>
  )
}

export default SuggestForm
