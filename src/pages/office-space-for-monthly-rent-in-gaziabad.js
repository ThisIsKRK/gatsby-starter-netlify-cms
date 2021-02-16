import React, { useEffect } from "react"
import { navigate } from "gatsby"
const PageRedirect = () => {
  useEffect(() => {
    navigate("/office-spaces-for-rent-in-gaziabad/")
  }, [])
  return <div>GoFloaters</div>
}
export default PageRedirect
