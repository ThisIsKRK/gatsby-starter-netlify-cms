import React, { useState } from "react"
import axios from "axios"
const ContactForm = () => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Message, setMessage] = useState("")
  const [Button, SetButton] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()

    if (Name !== "" && Email !== "" && Phone !== "") {
      SetButton(true)
      setErrorMessage("")
      axios
        .post(`https://gofloaters.firebaseapp.com/website/sendemail`, {
          templateId: "contactus",
          messageData: {
            name: Name,
            email: Email,
            phone: Phone,
            message: Message,
          },
        })
        .then(res => {
          setSuccessMessage("show")
          setName("")
          setEmail("")
          setPhone("")
          setMessage("")
          setErrorMessage("")
          SetButton(false)
        })
    } else {
      setErrorMessage("Please fill all the mandatory Fields")
    }
  }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Name">Your Name *:</label>
        <input
          type="text"
          name="name"
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
          name="email"
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
          name="phone"
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
        <label htmlFor="YourMessage">Your Message:</label>
        <textarea
          type="text"
          name="message"
          className="form-control"
          value={Message}
          onChange={e => {
            setMessage(e.currentTarget.value)
            setErrorMessage("")
          }}
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
    </form>
  )
}

export default ContactForm
