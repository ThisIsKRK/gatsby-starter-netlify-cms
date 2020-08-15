import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions - GoFloaters</title>
        <meta
          name="description"
          content="If you are a business affected by COVID-19 crisis then GoFloaters’ Community Assistance Program could be of help to you."
        ></meta>
        <meta name="keywords" content="terms conditions, gofloaters" />
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Meet The Team</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul>
                <li>
                  The availability of a space cannot be confirmed unless booked
                  in advance through the app.
                </li>
                <li>The rates are subject to revision without prior notice.</li>
                <li>
                  Coworking Cafe&rsquo;s may be blocked for events or may be
                  closed for maintenance. Prior notice shall not be provided for
                  such incidents.
                </li>
                <li>
                  GoFloaters or our space partners cannot be held responsible
                  for the loss or damage of personal property.
                </li>
                <li>
                  You agree to the ethical and legal usage of Internet
                  facilities provided to you and your team. You will be held
                  responsible for any violations.
                </li>
                <li>
                  Unlawful activities are not permitted at any of our partner
                  locations.
                </li>
                <li>
                  For users on the monthly shared workspace plan you are
                  expected to give 1-month prior notice if you intend to vacate
                  the place.
                </li>
                <li>
                  GST (India) or the respective tax laws will be applied on the
                  rates.
                </li>
                <li>
                  You agree that you will not cause or be a disturbance to other
                  users of the place.
                </li>
                <li>
                  Hours of operation of the host will have to be adhered to.
                </li>
                <li>
                  If a booking has to be cancelled, prior notice will have to be
                  provided. In case of café spaces 1-hour prior notice is
                  required. In case of monthly-shared workspaces 1 week of
                  advanced notice is required. In case of meeting rooms and
                  conference rooms, 2 days prior notice is required. If adequate
                  notice is not provided a cancellation fee of 50% of the amount
                  will be applied.
                </li>
                <li>
                  If a cancellation is made 2 days post the payment, money paid
                  will not be refunded. Instead the user will be credited with
                  equivalent amount of Floating Points, which can be redeemed
                  for future bookings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default TermsConditions
