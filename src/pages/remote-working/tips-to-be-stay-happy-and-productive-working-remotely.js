import React, { useEffect } from "react"
import { navigate } from "gatsby"
const BlogRedirect = () => {
  useEffect(() => {
    navigate("/blog/tips-to-be-stay-happy-and-productive-working-remotely/")
  }, [])
  return <div>GoFloaters</div>
}
export default BlogRedirect
