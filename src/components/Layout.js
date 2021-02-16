import React from "react"
import "../assets/bootstrap.min.css"
import "../styles/style.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className={props.type ? props.type : ""}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout
