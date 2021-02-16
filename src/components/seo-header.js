import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import favicon from "../img/favicon.png"
const SEOHeader = props => {
  const { pathname } = useLocation()
  const siteUrl = "https://gofloaters.com"

  const socialTitle = ""
  if (props.socialTitle === "") {
    socialTitle = props.title
  }
  var socialimage = ""
  if (props.socialURL === "") {
    socialimage = siteUrl + props.socialLocalURL
  } else {
    socialimage = props.socialURL
  }
  let imgUrl = "https://gofloaters.com"

  return (
    <Helmet>
      <title>{props.title}</title>
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl + pathname} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={socialimage} />
      <link
        rel="alternate"
        href="android-app://com.gofloaters.app/https/gofloaters.com/"
      />
      <meta name="twitter:app:country" content="in" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={socialimage} />
      <meta name="twitter:image:alt" content={props.title} />
      <meta name="twitter:creator" content="@gofloaters" />
      <meta name="twitter:site" content="@gofloaters" />
      <meta name="twitter:domain" content="gofloaters.com" />
      <meta name="pinterest-rich-pin" content={props.pinterest} />
    </Helmet>
  )
}

export default SEOHeader
