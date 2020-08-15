import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
export default () => (
  <div>
    <Helmet>
      <title>
        FAQs | GoFloaters Frequently Asked Questions (FAQs) - GoFloaters
      </title>
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

      <meta
        name="description"
        content="Get answers to all your queries related to coworking cafe bookings from our FAQs page. You can find questions related to office space bookings, pricing, payments, etc here."
      ></meta>
      <meta name="keywords" content="gofloaters event spaces, event spaces" />
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is GoFloaters ?","acceptedAnswer":{"@type":"Answer","text":"GoFloaters is an on-demand work space provider for meetings and for work. We can provide you spaces for:\nWorking\nCustomer meetings\nInvestor meetings\nTraining\nInterviews\nWorkshops\nOur spaces are available by the hour and you only pay for what you use. We have 1000+ spaces across Chennai, Bangalore, Coimbatore, Hyderabad, Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Mumbai & Pune and we are adding more every week!"}},{"@type":"Question","name":"Why choose GoFloaters ?","acceptedAnswer":{"@type":"Answer","text":"GoFloaters is for those people who want an on-demand space for their business. Why pay monthly rents when you can get spaces by the hour on-demand. On-demand spaces are much more cost-effective. Our aim is to foster a dynamic and vibrant community of start-ups, entrepreneurs, freelancers and businesses professionals. GoFloaters partners with the finest cafes, restaurants and businesses to open their amazing spaces for work and meetings. In the process we are making work spaces 40% cheaper for you."}},{"@type":"Question","name":"How come you are charging so less ? What is the catch ?","acceptedAnswer":{"@type":"Answer","text":"There is no catch. Cafes and businesses have lean hours and excess capacity so GoFloaters partners with them. The cafe coworking rates start at Rs 35 per person per hour + GST. The rates for the shared offices and meeting spaces vary by space. Meeting spaces start at Rs 150 per hour + GST. The shared office spaces start at Rs 2500 per month per seat + GST."}},{"@type":"Question","name":"Which cities do you serve ?","acceptedAnswer":{"@type":"Answer","text":"We are currently operational in Chennai, Bengaluru, Hyderabad & Coimbatore. But we’ll be in your city very soon, so hold on !"}},{"@type":"Question","name":"Can I save even more on my GoFloaters bookings ?","acceptedAnswer":{"@type":"Answer","text":"Yes you can save even more by purchasing a FloaterPass ! FloaterPass brings prices down by 40%, to know more about the FloaterPass please click here. You can also save more by referring GoFloaters to a friend. "}},{"@type":"Question","name":"What amenities are included ?","acceptedAnswer":{"@type":"Answer","text":"WiFi, power points and comfortable atmosphere with seating is included into our pricing. Other amenities vary by space. You can check our app for more details on the space amenities."}},{"@type":"Question","name":"What other benefits do I get from GoFloaters ?","acceptedAnswer":{"@type":"Answer","text":"Apart from the space amenities GoFloaters also gives you access to our community partners. You can now redeem up-to $6000 in community rewards from our partners like Amazon Web Services, Google Cloud, Freshworks and many others. To know more about our community partners please click here. GoFloaters also conducts events every month that provide you with a platform to network, communicate and learn from our events. You can click here to know more about our events."}},{"@type":"Question","name":"Can I register by business using GoFloaters address or use the space address for communication ?","acceptedAnswer":{"@type":"Answer","text":"We do allow businesses to be registered with our space address in some of our spaces. If you are interested please get in touch with our support team using chat or call us at +91-7338730800. We would be happy to assist you. We also provide virtual office services through some of our partners."}},{"@type":"Question","name":"How do I book a GoFloaters space ?","acceptedAnswer":{"@type":"Answer","text":"You can book GoFloaters spaces using our web app or mobile apps. You can download the GoFloaters app from Google Playstore or Apple AppStore."}},{"@type":"Question","name":"Is there a lock in period or rental agreement that I must sign ?","acceptedAnswer":{"@type":"Answer","text":"GoFloaters is an on-demand space provider. We don’t lock you with any agreements. We believe in offering freedom to our users!! Hence we don’t do rental agreements and hence no lock in period."}},{"@type":"Question","name":"Is maintenance included in the rates ?","acceptedAnswer":{"@type":"Answer","text":"Yes, maintenance charges are included into the price. WiFi, power points and comfortable atmosphere with seating is included into our pricing. Other amenities vary by space. You can check our app for details."}},{"@type":"Question","name":"Why I am being charged for an extra hour ?","acceptedAnswer":{"@type":"Answer","text":"GoFloaters app rounds of the cafe coworking usage hours to the next higher number of hours. For example if you have used the space for 2 hours and 10 minutes it would be counted as 3 hours."}},{"@type":"Question","name":"What are the rates like ?","acceptedAnswer":{"@type":"Answer","text":"The cafe coworking rates start at Rs 35 per person per hour + GST. The rates for the shared offices and meeting spaces vary by space. Meeting spaces start at Rs 150 per hour + GST. The shared office spaces start at Rs 2500 per month per seat + GST."}},{"@type":"Question","name":"What are the working hours for GoFloaters spaces ?","acceptedAnswer":{"@type":"Answer","text":"Each space has different operation times which is mentioned on the detail page on the website and mobile app. Most of the spaces are open from 9AM to 7PM"}},{"@type":"Question","name":"Can I bring a guest or a friend to a GoFloaters space ?","acceptedAnswer":{"@type":"Answer","text":"All our spaces need to be pre booked in advance & we encourage you to add the guest through an additional booking. You get bonus points & food rewards for referring your friend as well !"}},{"@type":"Question","name":"What is the cancellation policy ?","acceptedAnswer":{"@type":"Answer","text":"Cafe coworking bookings can be cancelled through our web app or mobile app. You can't cancel the booking after you have checked in. In case of monthly-shared workspaces 1 week of advanced notice is required. In case of meeting rooms and conference rooms, cancellations made before 2 days of the booking date, money will be refunded fully. If a cancellation is made within 2 days of the booking date, money paid will not be refunded."}},{"@type":"Question","name":"Why is my booking space request under process and not confirmed yet ?","acceptedAnswer":{"@type":"Answer","text":"Please give us some lead time to confirm you booking. Our team will look into your booking and confirm the booking at the earliest. Depending on the volume of requests, sometimes it is possible that we have not been able to get to your booking within the 30 mins. If your booking is still not confirmed after 30 mins of your booking, then kindly reach out to our team through chat or call us at +91-7338730800. Upon booking confirmation you will get an SMS and email. The status will also reflect in the app."}},{"@type":"Question","name":"How does the check in and check out work ?","acceptedAnswer":{"@type":"Answer","text":"After reaching the Gofloaters Space you are supposed to check-in when you arrive and check out as you depart. The billing is done on the basis of the check in and check out time."}},{"@type":"Question","name":"What happens if i check in or check out late ?","acceptedAnswer":{"@type":"Answer","text":"You will be charged from the time you check-in to the time of checkout. Please bear in mind that all spaces have set coworking hours"}},{"@type":"Question","name":"What happens if i check-out before one hour ?","acceptedAnswer":{"@type":"Answer","text":"Regardless of the minutes used the booking charges will be rounded off to the next whole hour strictly for billing purpose."}},{"@type":"Question","name":"Do you provide virtual office services ?","acceptedAnswer":{"@type":"Answer","text":"We provide virtual office services through our partners. If you are interested please get in touch with our support team using chat or call us at +91-7338730800. We would be happy to assist you."}},{"@type":"Question","name":"How do I make the payment ?","acceptedAnswer":{"@type":"Answer","text":"You make the payment for the space through our web app or our mobile apps. For cafe coworking you make the payment after using the space. When you check out you will be taken to a screen where you will be asked to make the payment based on the number of hours used. For meeting spaces and shared offices you will have to make the payment before using the space. You will see a Pay to Confirm button on the booking in the main screen."}},{"@type":"Question","name":"What payment options does GoFloaters accept ?","acceptedAnswer":{"@type":"Answer","text":"Gofloaters accepts most payment methods available on Razorpay such as Net banking, UPI , Gpay, Debit and Credit Cards"}},{"@type":"Question","name":"Do I pay at the space ?","acceptedAnswer":{"@type":"Answer","text":"No. You have to make the payment to GoFloaters through our web app or through our mobile app. Payment will not be collected at the space."}},{"@type":"Question","name":"Can I pay by cash ?","acceptedAnswer":{"@type":"Answer","text":"We don’t accept cash. We accept most forms of online payment including net-banking, credit card, debit card, UPI and many wallets."}},{"@type":"Question","name":"Does the price include taxes ?","acceptedAnswer":{"@type":"Answer","text":"The rates mentioned in our app and website does not include GST. 18% GST would be applicable on the rates as per government policy."}},{"@type":"Question","name":"Will I get a GST invoice ?","acceptedAnswer":{"@type":"Answer","text":"Yes you will get a GST invoice for your payment. Please reach out to the support team with your business details and GSTIN to get a GST invoice."}},{"@type":"Question","name":"What is a Floater pass & what benefits can I avail with the pass ?","acceptedAnswer":{"@type":"Answer","text":"FloaterPass gets you a bundle of  cafe coworking hours that brings down the price to Rs 25 + GST. FloaterPass gets you instant access to Food Credits, you can enjoy 20% cashback on  food and beverage items across our partner locations."}},{"@type":"Question","name":"What are the different Floater Pass available ?","acceptedAnswer":{"@type":"Answer","text":"There are three FloaterPasses with prices starting at INR 600  –\n\nSilver\nGold \nPlatinum\nTo know more about these passes please click here."}},{"@type":"Question","name":"How does the cashback work ?","acceptedAnswer":{"@type":"Answer","text":"Cashback is awarded based on the amount spend on the food wallet recharge. 20% instant cashback is credited to your account in the form of food credits. Food credits can be redeemed at all participating spaces."}},{"@type":"Question","name":"How do food credits work ?","acceptedAnswer":{"@type":"Answer","text":"Food credits can be used to settle your food & beverage orders at a space location. Simply scan the QR code using the Goflors app and pay. Please bear in mind that Food credits are only available for FloaterPass members."}},{"@type":"Question","name":"My need exceeds the existing pass can I have an organisation specific pass with longer duration ?","acceptedAnswer":{"@type":"Answer","text":"Yes we can tailor a custom package based on your specific needs and requirements , Just reach out to us on +91-7338730800 or email at info@gofloaters.com ."}},{"@type":"Question","name":"What happens if I exhaust my food credits ?","acceptedAnswer":{"@type":"Answer","text":"Gofloaters does not make ordering food a compulsion . Food credits are only available to our pass holders as they can avail 20% cashback on the food credit recharge . In order to avail this cashback you will have to recharge your food credit wallet to match the bill amount"}}]}
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
              <a className="nav-link" data-toggle="tab" href="#menu1">
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
              <br></br>
              <br />
              <p>
                <strong>What is GoFloaters ?</strong>
                <br />
                GoFloaters is a first of its kind on-demand work, meeting and
                event space App.
              </p>
              <p>
                We help thousands of early-stage start-ups, freelancers,
                SMB&rsquo;s, independent professionals, solopreneurs, digital
                nomads, remote workers, media professionals, YouTubers,
                mompreneurs, sales and enterprise teams to find affordable
                plug-and-play work, meeting &amp; event spaces.
              </p>
              <p>We provide spaces for:</p>
              <ul>
                <li>Work</li>
                <li>Meetings</li>
                <li>Trainings</li>
                <li>Presentations</li>
                <li>Interviews</li>
                <li>Workshops</li>
                <li>Meet-ups</li>
                <li>Events</li>
              </ul>
              <p>
                Our spaces are available on demand and you only pay for what you
                use. We have 600+ spaces across Chennai, Bengaluru, Hyderabad
                &amp; Coimbatore and we are adding more every week!
              </p>
              <p>
                <strong>Why choose GoFloaters?</strong>
                <br />
                GoFloaters is for those people who want cost effective on-demand
                spaces. Our aim is to foster a dynamic and vibrant community of
                start-ups, entrepreneurs, freelancers and businesses
                professionals. GoFloaters partners with the finest cafes,
                restaurants, Coworking spaces and other businesses to open their
                amazing spaces for work, meetings and events.
              </p>
              <p> </p>
              <p>
                <strong>Which cities do you serve?</strong>
                <br />
                We are currently operational in Chennai, Bangalore, Coimbatore,
                Hyderabad, Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Mumbai
                & Pune. But we&rsquo;ll be in your city very soon, so hold on.
              </p>
              <p> </p>
              <p>
                <strong>What amenities are included?</strong>
                <br />
                High speed WiFi, power points and a comfortable atmosphere with
                seating is included into our pricing. Other amenities vary by
                space. You can check the individual listings on our app for more
                details on the space amenities.
              </p>
              <p> </p>
              <p>
                <strong>What other benefits do I get from GoFloaters?</strong>
              </p>
              <p>
                With GoFloaters you get access to hyperlocal and neighbourhood
                spaces to work from, outreach to communities and Community
                Partners who enable businesses. In our endeavor to create
                significant impact and create touchpoints with our partners, we
                organize, co-host &amp; conduct events and activities enabling
                networking, opportunities and great learning. You can click 
                <a href="https://gofloaters.com/events/">here</a> to know more
                about our events.
              </p>
              <p> </p>
              <p>
                <strong>What and who are Community Partners?</strong>
                <br />
                Our Community Partnerships are well-designed and well-researched
                networking of startups, brands and services who provide
                incredible benefits for our customers. These partnerships enable
                you to forge, nurture and drive your passions to the next level.
                With Community Partners one can redeem over Rs. 1 Crore in
                community rewards (in the form of credits, discounts) from our
                partners like Amazon Web Services, Google Cloud, Freshworks,
                Uber and many others.
              </p>
              <p>
                To know more about our community partners please 
                <a href="https://gofloaters.com/our-community-partners/">
                  click here.
                </a>
              </p>
              <p> </p>
              <p>
                <strong>
                  Can I register by business using GoFloaters address or use the
                  space address for communication?
                </strong>
                <br />
                We do allow businesses to be registered with some of our spaces.
                If you are interested please get in touch with our support team
                using chat or call us at +91-7338730800. We would be happy to
                assist you. We also provide virtual office services through some
                of our partners.
              </p>
              <p> </p>
              <p>
                <strong>How do I book a GoFloaters space ?</strong>
                <br />
                You can book GoFloaters spaces using our 
                <a href="https://app.gofloaters.com/">web app</a> or mobile
                apps. You can download the GoFloaters app from 
                <a href="https://play.google.com/store/apps/details?id=com.gofloaters.app&hl=en_IN">
                  Google PlayStore
                </a>
                 or 
                <a href="https://apps.apple.com/in/app/gofloaters/id1446010118">
                  Apple AppStore.
                </a>
              </p>
              <p> </p>
              <p> </p>
            </div>
            <div id="menu1" className="container tab-pane fade">
              {" "}
              <br></br>
              <p>
                <strong>
                  What&rsquo;s the pricing and is there any catch?
                </strong>
                <br />
                There is no catch. Cafes and businesses have lean hours and
                excess capacity so GoFloaters partners with them &amp; help
                monetize their space. The work café rate is Rs 250 + GST (and
                you get Rs.250 back in Food Credits + 1 free visitor). The rates
                for the shared offices and meeting spaces vary by space. Meeting
                spaces start at Rs 150 per hour + GST. The shared office spaces
                start at Rs 2500 per month per seat + GST.
              </p>
              <p>
                <strong>
                  Is there a lock in period or rental agreement that I must sign
                  for office spaces?
                </strong>
                <br />
                GoFloaters is an on-demand space provider. We don&rsquo;t lock
                you with any agreements. We believe in offering freedom to our
                users! Hence, we don&rsquo;t do rental agreements and hence no
                lock in period.
              </p>
              <p>
                <strong>Is maintenance included in the rates?</strong>
                <br />
                Yes, maintenance charges are included into the price. WiFi,
                power points and comfortable atmosphere with seating is included
                into our pricing. Other amenities vary by space. You can check
                the individual listings on our app for more details.
              </p>
            </div>
            <div id="menu2" className="container tab-pane fade">
              {" "}
              <br></br>
              <p>
                <strong>
                  What are the working hours for GoFloaters spaces?
                </strong>
              </p>
              <p>
                Each space has different operation times which is mentioned on
                the detail page of the individual listings on the website and
                mobile apps. Most of the spaces are open from 9AM to 7PM.
              </p>
              <p> </p>
              <p>
                <strong>
                  Can I bring a guest or a fiend to a GoFloaters space?
                </strong>
                <br />
                Yes café coworking allows you to bring 1 additional guest for
                free.
              </p>
              <p> </p>
              <p>
                <strong>What is the cancellation policy?</strong>
              </p>
              <ul>
                <li>
                  In case of monthly office spaces, 1 week of advanced notice is
                  required.
                </li>
                <li>
                  In case of meeting spaces, training rooms and event spaces,
                  cancellations can made before 2 days of the booking date and
                  money will be refunded fully in the form of future credits. If
                  a cancellation is made within 2 days of the booking date,
                  there will be no refunds.
                </li>
                <li>
                  For Café coworking, booking can be cancelled anytime and the
                  money will be refunded fully in the form of future credits.
                </li>
              </ul>
              <p> </p>
              <p>
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
              </p>
              <p> </p>
              <p>
                <strong>What do I do once I reach the cafe?</strong>
                <br />
                After reaching the GoFloaters Space you are supposed to show
                your booking to the café staff who will then guide you to the
                assigned table.
              </p>
              <p> </p>
              <p>
                <strong>Do you provide virtual office services?</strong>
                <br />
                We provide virtual office services through our partners. If you
                are interested please get in touch with our support team
                using chat or call is at +91-7338730800. We would be happy to
                assist you!
              </p>
            </div>
            <div id="menu3" className="container tab-pane fade">
              <br></br>
              <p>
                <strong>How do I make the payment?</strong>
                <br />
                You will have to make the payment before using the space. You
                will see a pay to confirm button on the booking in the main
                screen. For Work Cafes you make the payment for the food through
                our mobile app. When you decide to leave the café, the waiter
                will give you the bill for the food (in case you had) that you
                will have to pay using Food Credits.
              </p>
              <p>
                <strong>Where are my Food Credits?</strong>
              </p>
              <p>
                You can see your balance In the Food Credits section under My
                Profile in the app anytime. You will be taken to a screen where
                you will just match the bill amount in the café. In case the
                bill amount exceeds the Food Credits you have, you can recharge
                &amp; pay the balance amount through the app and also get 20%
                cashback on that amount. Sweet deal, isn&rsquo;t it.
              </p>
              <p> </p>
              <p>
                <strong>
                  What if I&rsquo;m not hungry? Can I transfer the credits to my
                  next booking?
                </strong>
              </p>
              <p>
                Rs. 250 in Food Credits that you get with the booking are not
                transferrable and are active on the booking date, post which
                they will be deducted from your account. Only the cashback
                amount received for additional food spends above Rs. 250 can be
                used for your next booking.
              </p>
              <p> </p>
              <p>
                <strong>What payment options does GoFloaters accept? </strong>
                <br />
                GoFloaters accepts most payment methods available on Razorpay
                such as Net banking, UPI , GPay, Debit and Credit-Cards.
              </p>
              <p> </p>
              <p>
                <strong>Do I pay at the space?</strong>
                <br />
                NO. You have to make the payment to GoFloaters through our web
                app or through our mobile app. Payments will not be collected at
                the space. Bookings will only be processed once payment is
                completed
              </p>
              <p> </p>
              <p>
                <strong>Can I pay by cash?</strong>
                <br />
                We don&rsquo;t accept cash. We accept most forms of online
                payment including net-banking, credit card, debit card, UPI and
                many wallets.
              </p>
              <p> </p>
              <p>
                <strong>Does the price include taxes?</strong>
                <br />
                The rates mentioned in our app and website does not include GST.
                5% GST would be applicable on the rate will be applicable for
                café coworking and 18% GST would be applicable for office space,
                meeting space, training rooms and event spaces.
              </p>
              <p> </p>
              <p>
                <strong>Will I get a GST invoice?</strong>
                <br />
                Yes you will get a GST invoice for your payment. Please reach
                out to the support team with your business details and GSTIN to
                get a GST invoice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
)
