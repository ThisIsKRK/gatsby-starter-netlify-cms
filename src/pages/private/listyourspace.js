import React, { useEffect } from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import PrivateForm from "../../components/PrivateForm"
import { navigate } from "gatsby"
const ListYourSpace = () => {
  useEffect(() => {
    navigate("/dont-let-space-go-to-waste/")
  }, [])
  return (
    <div>
      <Helmet>
        <title>Private Form</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Layout>
        <div className="header-banner makemoney">
          <h1 style={{ color: "#fff" }}>Private List Your Space form</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center"></div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <PrivateForm></PrivateForm>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ListYourSpace
