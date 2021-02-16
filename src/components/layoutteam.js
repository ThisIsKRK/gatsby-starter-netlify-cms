import React from "react"
import "../assets/bootstrap.min.css"
import "../styles/style.scss"
import HeaderTeam from "./headerteam"
import Footer from "./footer"
import "../styles/teams.scss"
const LayoutTeam = props => {
  return (
    <div>
      <HeaderTeam />
      {props.children}
      <Footer />
    </div>
  )
}
export default LayoutTeam
