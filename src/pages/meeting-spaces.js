import React, { useEffect } from "react"
import { navigate } from "gatsby"
const PageRedirect = () => {
  useEffect(() => {
    navigate("/meeting-rooms/")
  }, [])
  return <div>GoFloaters</div>
}
export default PageRedirect
