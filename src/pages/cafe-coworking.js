import React, { useEffect } from "react"
import { navigate } from "gatsby"
const PageRedirect = () => {
  useEffect(() => {
    navigate("/coworking-spaces/")
  }, [])
  return <div>GoFloaters</div>
}
export default PageRedirect
