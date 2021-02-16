import React, { useEffect } from "react"
import { navigate } from "gatsby"
const PageRedirect = () => {
  useEffect(() => {
    navigate("/coworking-spaces-in-gurugram/")
  }, [])
  return <div>GoFloaters</div>
}
export default PageRedirect
