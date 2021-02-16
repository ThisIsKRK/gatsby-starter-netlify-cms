import React, { useState, useEffect } from "react"
import axios from "axios"

const EnquiryForm = props => {
  const [SuccessMessage, setSuccessMessage] = useState("hide")
  const [FormContainer, setFormContainer] = useState("show")
  const [ErrorMessage, setErrorMessage] = useState("")
  const [modalTitle, setmodalTitle] = useState("Enquire Now")
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Seats, setSeats] = useState("")
  const [BookFrom, setBookFrom] = useState("")
  const [Button, SetButton] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (
      Name !== "" &&
      Email !== "" &&
      Phone !== "" &&
      Seats !== "" &&
      BookFrom !== ""
    ) {
      var myDate = BookFrom
      myDate = myDate.split("-")
      var newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0]
      var datefrom = new Date(newDate).getTime()

      SetButton(true)
      setErrorMessage("")
      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded")
      var urlencoded = new URLSearchParams()
      urlencoded.append("name", Name)
      urlencoded.append("source", "API")
      urlencoded.append("date", datefrom)
      urlencoded.append("email", Email)
      urlencoded.append("phone", Phone)
      urlencoded.append("spaceId", props.spaceId)
      urlencoded.append("numberOfSeats", Seats)
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      }
      fetch("https://gofloaters.firebaseapp.com/spaces/enquiry", requestOptions)
        .then(response => {
          response.text()
          setSuccessMessage("show")
          setFormContainer("hide")
          setName("")
          setEmail("")
          setPhone("")
          setSeats("")
          setBookFrom("")
          setErrorMessage("")
          setmodalTitle("")
          SetButton(false)
        })
        .then(result => console.log(result))
        .catch(error => console.log("error", error))
    } else {
      setErrorMessage("Please fill all the mandatory Fields")
    }
  }
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {modalTitle}
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className={"formContainer " + FormContainer}>
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
                type="tel"
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
              <label htmlFor="Phone">No.of Seats *:</label>
              <input
                type="number"
                name="seats"
                className="form-control"
                value={Seats}
                onChange={e => {
                  setSeats(e.currentTarget.value)
                  setErrorMessage("")
                }}
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Book From *:</label>
              <input
                type="date"
                name="bookfrom"
                className="form-control"
                value={BookFrom}
                onChange={e => {
                  setBookFrom(e.currentTarget.value)
                  setErrorMessage("")
                }}
                min="1"
                required
              />
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
          </div>
          <p style={{ color: "red", fontWeight: "bold" }}>{ErrorMessage}</p>
          <div className={"text-center message " + SuccessMessage}>
            <p>
              Thanks for your interest! Our space partner has been notified and
              you shall hear from them shortly.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EnquiryForm
