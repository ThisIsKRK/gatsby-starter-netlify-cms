import React, { useState } from "react"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"
const ListYourSpaces = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Message, setMessage] = useState("")
  const [City, setCity] = useState("")
  const [CafeBusiness, setCafeBusiness] = useState("")
  const [Locality, setLocality] = useState("")
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
  const handleSubmit = e => {
    e.preventDefault()
    if (Name !== "" && Email !== "") {
      SetButton(true)
      setErrorMessage("")
      axios
        .post(`https://bigin.zoho.com/crm/WebToContactForm`, {
          xnQsjsdp:
            "a854f9059d790695017d3c4ff4579a262e58324bb2304e16c3b065342359f000",
          zc_gad: "",
          xmIwtLD:
            "73f4525508bb3339e7d15b9ea5cb5eb6593296bc4cd461205e64d7842d7476b7",
          actionType: "Q29udGFjdHM=",
          returnURL: "https://gofloaters.com/thanks/",
          First_Name: Name,
          Last_Name: Name,
          Email: Email,
          Mobile: Phone,
          City: City,
          Description: Message,
          Locality: Locality,
          Type_of_Space: CafeBusiness,
          Account_Name: SpaceName,
        })
        .then(res => {
          setSuccessMessage("show")
          setName("")
          setEmail("")
          setPhone("")
          setCity("")
          setLocality("")
          setCafeBusiness("")
          setSpaceName("")
          setErrorMessage("")
          SetButton(false)
        })
    } else {
      setErrorMessage("Please fill all the mandatory Fields")
    }
  }
  if (Name !== "" && Email !== "") {
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
        style={{ display: "none" }}
        name="xnQsjsdp"
        value="a854f9059d790695017d3c4ff4579a262e58324bb2304e16c3b065342359f000"
      />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input
        type="text"
        style={{ display: "none" }}
        name="xmIwtLD"
        value="73f4525508bb3339e7d15b9ea5cb5eb6593296bc4cd461205e64d7842d7476b7"
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
        value="https://gofloaters.com/thanks/"
      />
      <div className="form-group">
        <label htmlFor="Name">First Name *:</label>
        <input
          type="text"
          className="form-control"
          value={Name}
          name="First Name"
          onChange={e => {
            setName(e.currentTarget.value)
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Name">Last Name *:</label>
        <input type="text" className="form-control" name="Last Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address *:</label>
        <input
          type="email"
          className="form-control"
          value={Email}
          name="Email"
          onChange={e => {
            setEmail(e.currentTarget.value)
            var pattern = new RegExp(
              /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            )
            if (!pattern.test(e.currentTarget.value)) {
              SetdisableClass(true)
            } else {
              SetdisableClass(false)
            }
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
            var pattern = new RegExp(/^[0-9\b]+$/)
            if (!pattern.test(e.currentTarget.value)) {
              SetdisableClass(true)
            } else if (e.currentTarget.value.length != 10) {
              SetdisableClass(true)
            } else {
              SetdisableClass(false)
            }
            setErrorMessage("")
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Account Name">Space Name *:</label>
        <input
          type="text"
          className="form-control"
          name="Account Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="City">City *:</label>
        <input
          type="text"
          className="form-control"
          name="CONTACTCF1"
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
          name="CONTACTCF2"
          onChange={e => {
            setLocality(e.currentTarget.value)
            setErrorMessage("")
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="SpaceName">
          What type of space is this (Coworking space, Office space etc.) *
        </label>
        <select
          name="CONTACTCF3"
          type="text"
          className="form-control"
          value={CafeBusiness}
          onChange={e => {
            setCafeBusiness(e.currentTarget.value)
            setErrorMessage("")
          }}
        >
          <option value="-None-">-None-</option>
          <option value="Coworking Space">Coworking Space</option>
          <option value="Business Center">Business Center</option>
          <option value="Office Space">Office Space</option>
          <option value="Meeting Space">Meeting Space</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="YourMessage">Your Message:</label>
        <textarea
          type="text"
          className="form-control"
          name="Description"
          value={Message}
          onChange={e => setMessage(e.currentTarget.value)}
          id="YourMessage"
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
        Thank you for contacting us – we will get back to you soon!
      </div>
      <br></br>
    </form>
  )
}

export default ListYourSpaces
