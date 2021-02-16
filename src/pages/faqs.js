import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import HeaderBanner from "../components/headerbanner"
import SEOHeader from "../components/seo-header"

export default () => (
  <div>
    <SEOHeader
      title="FAQ | Frequently Asked Questions On Booking, Cancellation etc."
      description="Here are some of the questions that you may have in mind. We are always around over chat, phone or email if you have other questions."
      socialURL="https://assets.gofloaters.com/socialimage/homepage.jpg"
      pinterest="true"
    ></SEOHeader>
    <Helmet>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
        defer
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
        defer
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"
        defer
      ></script>

      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is GoFloaters?","acceptedAnswer":{"@type":"Answer","text":"GoFloaters is a platform that helps you find work and meeting spaces that can be booked instantly."}},{"@type":"Question","name":"What do people use GoFloaters for?","acceptedAnswer":{"@type":"Answer","text":"Our customers use our spaces for everyday work, meetings, interviews, small events, workshops, training, meet-ups, client meetings, etc. Teams use our spaces for meeting & collaborating frequently."}},{"@type":"Question","name":"Who uses GoFloaters?","acceptedAnswer":{"@type":"Answer","text":"We help thousands of early-stage start-ups, freelancers, SMB’s, independent professionals, solopreneurs, digital nomads, remote workers, media professionals, YouTubers, mompreneurs, sales, and enterprise teams to find plug-and-play work and meeting spaces."}},{"@type":"Question","name":"How many spaces are listed on the platform?","acceptedAnswer":{"@type":"Answer","text":"Our spaces are available on-demand and you only pay for what you use. We have 1200+ spaces across 12 cities and we are adding more every week!"}},{"@type":"Question","name":"Which cities do you serve?","acceptedAnswer":{"@type":"Answer","text":"We are currently operational in Chennai, Bangalore, Coimbatore, Hyderabad, Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Kochi, Mumbai & Pune. But we’ll be in your city very soon, so hold on."}},{"@type":"Question","name":"What amenities are included?","acceptedAnswer":{"@type":"Answer","text":"High-speed WiFi, power points, and a safe & comfortable atmosphere is included in our pricing. Other amenities vary by space. You can check the individual listings on our app for more details."}},{"@type":"Question","name":"What other benefits do I get from GoFloaters?","acceptedAnswer":{"@type":"Answer","text":"With GoFloaters you get access to hyperlocal and neighborhood spaces to work from, access to communities, and Community Partners. In our endeavor to create a significant impact and create touchpoints with our partners, we organize, co-host & conduct events and activities enabling networking & learning opportunities. visit https://gofloaters.com/events/ to know more about our events."}},{"@type":"Question","name":"What and who are your Community Partners? ","acceptedAnswer":{"@type":"Answer","text":"Our Community Partnerships include products, brands, and services that provide incredible benefits to our customers. You can redeem over ₹1 Crore in community rewards (in the form of credits, discounts) from our partners like Amazon Web Services, Google Cloud, Freshworks, Uber, and many others. visit https://gofloaters.com/our-community-perks to know more about our community partners."}},{"@type":"Question","name":"Can I register my business using GoFloater’s address or use the space address for communication?","acceptedAnswer":{"@type":"Answer","text":"We do allow businesses to be registered with some of our spaces. If you are interested please get in touch with our support team using chat or call us at +91-7338730800. We would be happy to assist you."}},{"@type":"Question","name":"Do you provide virtual office services?","acceptedAnswer":{"@type":"Answer","text":"We provide virtual office services through our partners. If you are interested please get in touch with our support team using chat or call us at +91-7338730800. We would be happy to assist you!\n"}},{"@type":"Question","name":"How do I book a GoFloaters space?","acceptedAnswer":{"@type":"Answer","text":"You can book GoFloaters spaces using our web app (  https://app.gofloaters.com/ ) or mobile apps. You can download the GoFloaters app from Google PlayStore or Apple AppStore ."}},{"@type":"Question","name":"What are the working hours for GoFloaters spaces?","acceptedAnswer":{"@type":"Answer","text":"Each space has different operation times which is mentioned on the detail page of the individual listings. Most of the spaces are open from 9 AM to 7 PM."}},{"@type":"Question","name":"Can I bring a guest or a friend to a GoFloaters space?","acceptedAnswer":{"@type":"Answer","text":"Sorry, we don’t allow guests to accompany you."}},{"@type":"Question","name":"What is the cancellation policy?","acceptedAnswer":{"@type":"Answer","text":"Daily office space bookings - If canceled 6 hours in advance, will be refunded in the form of future credits. If canceled within 6 hours, it is non-refundable.\nIn the case of meeting spaces - If canceled 2 days in advance, will be refunded fully in the form of future credits. If canceled within 2 days, it is non-refundable.\n"}},{"@type":"Question","name":"Why is my booking space request under process and not confirmed yet?","acceptedAnswer":{"@type":"Answer","text":"Please give us some lead time to confirm your booking. Our team will look into your booking and confirm the booking at the earliest. Depending on the volume of requests, sometimes it is possible that we have not been able to get your booking within 30 minutes. If your booking is still not confirmed after 30 mins of your booking, then kindly reach out to our team through chat or call us at +91-7338730800. Upon booking confirmation, you will get an SMS and E-mail confirmation. The status will also reflect in the App."}},{"@type":"Question","name":"What payment options does GoFloaters accept?","acceptedAnswer":{"@type":"Answer","text":"GoFloaters accepts most payment methods available on Razorpay such as Net banking, UPI, GPay, Debit, and Credit-Cards."}},{"@type":"Question","name":"Do I pay at the space?","acceptedAnswer":{"@type":"Answer","text":"NO. You have to make the payment to GoFloaters through our web app or through our mobile app while booking the space. Payments will not be collected at the space. Bookings will only be processed once payment is completed"}},{"@type":"Question","name":"Can I pay by cash?","acceptedAnswer":{"@type":"Answer","text":"We don’t accept cash. We accept most forms of online payment including net-banking, credit card, debit card, UPI, and many wallets."}},{"@type":"Question","name":"Does the price include GST?","acceptedAnswer":{"@type":"Answer","text":"The rates mentioned in our app and website do not include GST. 18% GST will be added to the final booking amount."}},{"@type":"Question","name":"Will I get a GST invoice?","acceptedAnswer":{"@type":"Answer","text":"Yes, you will get a GST invoice for your payment. Please reach out to the support team with your business details and GSTIN to get a GST invoice."}}]}
    `}
      </script>
    </Helmet>
    <Layout>
      <HeaderBanner>
        <h1>FAQs</h1>
      </HeaderBanner>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <div className="col-md-12 text-center">
            <p>
              Here are some of the questions that you may have in mind. We are
              always around over chat, phone or email if you have other
              questions.
            </p>
          </div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                General
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#price">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu2">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu3">
                Payments
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              {" "}
              <br />
              <br />
              <br />
              <p>
                <strong>What is GoFloaters?</strong>
                <br />
                GoFloaters is a platform that helps you find work and meeting
                spaces that can be booked instantly.
                <br />
                <br />
                <strong> What do people use GoFloaters for?</strong>
                <br />
                Our customers use our spaces for everyday work, meetings,
                interviews, small events, workshops, training, meet-ups, client
                meetings, etc. Teams use our spaces for meeting &amp;
                collaborating frequently.
                <br />
                <br />
                <strong> Who uses GoFloaters?</strong>
                <br />
                We help thousands of early-stage start-ups, freelancers, SMB’s,
                independent professionals, solopreneurs, digital nomads, remote
                workers, media professionals, YouTubers, mompreneurs, sales, and
                enterprise teams to find plug-and-play work and meeting spaces.
                <br />
                <br />
                <strong> How many spaces are listed on the platform?</strong>
                <br />
                Our spaces are available on-demand and you only pay for what you
                use. We have 1200+ spaces across 12 cities and we are adding
                more every week!
                <br />
                <br />
                <strong> Which cities do you serve?</strong>
                <br />
                We are currently operational in Chennai, Bangalore, Coimbatore,
                Hyderabad, Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Kochi,
                Mumbai &amp; Pune. But we’ll be in your city very soon, so hold
                on.
                <br />
                <br />
                <strong> What amenities are included?</strong>
                <br />
                High-speed WiFi, power points, and a safe &amp; comfortable
                atmosphere is included in our pricing. Other amenities vary by
                space. You can check the individual listings on our app for more
                details.
                <br />
                <br />
                <strong> What other benefits do I get from GoFloaters?</strong>
                <br />
                With GoFloaters you get access to hyperlocal and neighborhood
                spaces to work from, access to communities, and Community
                Partners. In our endeavor to create a significant impact and
                create touchpoints with our partners, we organize, co-host &amp;
                conduct events and activities enabling networking &amp; learning
                opportunities. Click <Link to="/events">here</Link> to know more
                about our events.
                <br />
                <br />
                <strong> What and who are your Community Partners?</strong>
                <br />
                Our Community Partnerships include products, brands, and
                services that provide incredible benefits to our customers. You
                can redeem over ₹1 Crore in community rewards (in the form of
                credits, discounts) from our partners like Amazon Web Services,
                Google Cloud, Freshworks, Uber, and many others. Click
                <Link to="/our-community-perks"> here</Link> to know more about
                our community partners.
                <br />
                <br />
                <strong>
                  {" "}
                  Can I register my business using GoFloater’s address or use
                  the space address for communication?
                </strong>
                <br />
                We do allow businesses to be registered with some of our spaces.
                If you are interested please get in touch with our support team
                using chat or call us at +91-7338730800. We would be happy to
                assist you.
                <br />
                <br />
                <strong> Do you provide virtual office services?</strong>
                <br />
                We provide virtual office services through our partners. If you
                are interested please get in touch with our support team using
                chat or call us at +91-7338730800. We would be happy to assist
                you!
                <br />
                <br />
              </p>
              <p> </p>
              <p> </p>
            </div>
            <div id="price" className="container tab-pane">
              {" "}
              <br />
              <br />
              <br />
              <p>
                <strong>Do you have any subscription plans or packages?</strong>
                <br />
                No - We have negotiated the lowest possible rates with all our
                space partners and you are already getting the benefits of a
                typical premium tier plan
                <br />
                <br />
              </p>
              <p> </p>
              <p> </p>
            </div>
            <div id="menu2" className="container tab-pane fade">
              {" "}
              <br />
              <br />
              <p>
                <strong>How do I book a GoFloaters space?</strong>
                <br />
                You can book GoFloaters spaces using our{" "}
                <a
                  href="https://app.gofloaters.com/"
                  target="_blank"
                  rel="nofollow"
                >
                  web app
                </a>{" "}
                or mobile apps. You can download the GoFloaters app from{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.gofloaters.app&hl=en_IN"
                  target="_blank"
                  rel="nofollow"
                >
                  Google PlayStore
                </a>{" "}
                or{" "}
                <a
                  href="https://apps.apple.com/in/app/gofloaters/id1446010118"
                  target="_blank"
                  rel="nofollow"
                >
                  Apple AppStore
                </a>
                .
                <br />
                <br />
                <strong>
                  What are the working hours for GoFloaters spaces?
                </strong>
                <br />
                Each space has different operation times which is mentioned on
                the detail page of the individual listings. Most of the spaces
                are open from 9 AM to 7 PM.
                <br />
                <br />
                <strong>
                  Can I bring a guest or a friend to a GoFloaters space?
                </strong>
                <br />
                Sorry, we don’t allow guests to accompany you.
                <br />
                <br />
                <strong>What is the cancellation policy?</strong>
                <br />
                <ul>
                  <li>
                    <b>Daily office spaces</b>: If canceled 6 hours in advance,
                    will be refunded in the form of future credits. If canceled
                    within 6 hours, no refunds.
                  </li>
                  <li>
                    <b>Meeting spaces</b>: If canceled 2 days in advance, will
                    be refunded fully in the form of future credits. If canceled
                    within 2 days, no refunds.
                  </li>
                </ul>
                <br />
                <strong>
                  Why is my booking space request under process and not
                  confirmed yet?
                </strong>
                <br />
                Please give us some lead time to confirm your booking. Our team
                will look into your booking and confirm the booking at the
                earliest. Depending on the volume of requests, sometimes it is
                possible that we have not been able to get your booking within
                30 minutes. If your booking is still not confirmed after 30 mins
                of your booking, then kindly reach out to our team through chat
                or call us at +91-7338730800. Upon booking confirmation, you
                will get an SMS and E-mail confirmation. The status will also
                reflect in the App.
                <br />
                <br />
              </p>
            </div>
            <div id="menu3" className="container tab-pane fade">
              <br />
              <br />
              <p>
                <strong>What payment options does GoFloaters accept?</strong>
                <br />
                GoFloaters accepts most payment methods available on Razorpay
                such as Net banking, UPI, GPay, Debit, and Credit-Cards.
                <br />
                <br />
                <strong>Do I pay at the space?</strong>
                <br />
                NO. You have to make the payment to GoFloaters through our web
                app or through our mobile app while booking the space. Payments
                will not be collected at the space. Bookings will only be
                processed once payment is completed
                <br />
                <br />
                <strong>Can I pay by cash?</strong>
                <br />
                We don’t accept cash. We accept most forms of online payment
                including net-banking, credit card, debit card, UPI, and many
                wallets.
                <br />
                <br />
                <strong>Does the price include GST?</strong>
                <br />
                The rates mentioned in our app and website do not include GST.
                18% GST will be added to the final booking amount.
                <br />
                <br />
                <strong>Will I get a GST invoice?</strong>
                <br />
                Yes, you will get a GST invoice for your payment. Please reach
                out to the support team with your business details and GSTIN to
                get a GST invoice.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
)
