import React from "react"
import Layout from "../components/layout"
import HeaderBanner from "../components/headerbanner"
import PartnerCard from "../components/Card/partnercard"

import SEOHeader from "../components/seo-header"

const CommunityParters = () => {
  return (
    <div>
      <SEOHeader
        title="Discounts & Perks from GoFloaters"
        description="GoFloaters doesn’t just save money on your workspaces, It can save money for your business. That’s right, get access to an ultimate curation of deals."
        socialURL="https://assets.gofloaters.com/socialimage/homepage.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        <HeaderBanner>
          <h1>Community Benefits</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>
                Deals and Discounts worth ₹1 Crore<br></br>
              </h1>
              <br></br>
              GoFloaters doesn’t just save money on your workspaces, It can save
              money for your business. That’s right, get access to an ultimate
              curation of deals from products & services that can help propel
              your business.<br></br>
              <br></br>
              How to claim these benefits? Click the button below to fill a form
              and receive the coupon on your inbox. Simple!
            </div>

            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/aws-logo.png"
              partnerName="Amazon Web Services"
              partnerDesc="Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 165 fully-featured services from data centers globally."
              partnerLink="/partner/aws/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Google-Cloud-logo.png"
              partnerName="Google Cloud Platform"
              partnerDesc="Google Cloud Platform (GCP), offered by Google, is a suite of cloud computing services - infrastructure as a service, platform as a service, and serverless computing environments."
              partnerLink="/partner/google-cloud/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Segment-Startup-Program-logo.png"
              partnerName="Segment Startup"
              partnerDesc="Segment Startup Program offers exclusive discounts with 35+ products of $1M in value"
              partnerLink="/partner/segment-35-other-products-1m-value/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Freshworks-logo.png"
              partnerName="Freshworks"
              partnerDesc="Freshworks is a leading SaaS provider in 150+ countries with a suite of business software including customer support, sales, ITSM, Cloud PBX, etc."
              partnerLink="/partner/freshworks/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/plumhq.png"
              partnerName="PlumHQ"
              partnerDesc="Plum's easy-to-use platform coupled with transparent pricing provides high quality & affordable employee health insurance"
              partnerLink="/partner/plumhq/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/onsurity.png"
              partnerName="Onsurity"
              partnerDesc="Onsurity is India's leading employee healthcare partner of startups, emerging businesses and SMEs."
              partnerLink="/partner/onsurity/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Hubspot-logo.png"
              partnerName="HubSpot"
              partnerDesc="HubSpot is a market-leading platform comprising of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support"
              partnerLink="/partner/hubspot/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/docsend.png"
              partnerName="Docsend"
              partnerDesc="DocSend allows you to securely share your pitch deck and streamline fundraising. With DocSend you maintain control over sensitive fundraising documents, know which investors are engaging with your decks and get real-time feedback"
              partnerLink="/partner/docsend/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Razorpay-logo.png"
              partnerName="Razorpays"
              partnerDesc="Razorpays offer a fast, affordable and secure way for merchants and companies to accept payments online. It has revolutionized online payments by providing clean, developer-friendly APIs and hassle-free integration."
              partnerLink="/partner/razorpay/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/draper-logo.png"
              partnerName="Draper"
              partnerDesc="Draper is an international network of start-up hostels, workspaces & other support systems for entrepreneurs ."
              partnerLink="/partner/draper-startup-house/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Uber-for-Business-logo.png"
              partnerName="Razorpays"
              partnerDesc="Uber is the world's leading ride-hailing platform with 110 million users across 785 cities. Uber for business is an all-in-one solution that simplifies business travel."
              partnerLink="/partner/uber/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/IBM-Cloud-logo.png"
              partnerName="IBM Cloud"
              partnerDesc="IBM Cloud is a suite of cloud computing services from IBM that offers both platform as a service (PaaS) and infrastructure as a service (IaaS)."
              partnerLink="/partner/ibm-cloud/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Udemy.png"
              partnerName="Udemy"
              partnerDesc="Udemy is the world's biggest online learning platform with more than 130 milliion courses taught in over 60 languages."
              partnerLink="/partner/udemy/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/todoist-logo.png"
              partnerName="Todoist"
              partnerDesc="Millions of teams rely on Todoist to organize & prioritize their work. Plan projects, delegate responsibilities, & track team progress over time. Available on 10+ platforms with 60+ integrations."
              partnerLink="/partner/todoist-business/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Segment-logo.png"
              partnerName="Udemy"
              partnerDesc="Segment is an analytics platform that collects, stores, and routes user data to hundreds of tools with the flick of a switch."
              partnerLink="/partner/segment/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Twist-logo.png"
              partnerName="Twist"
              partnerDesc="Twist is a thread-based Slack alternative that keeps team communication organized, on-topic & easily searchable (forever). Loved by 100K+ companies & ranked by PCMag as the #1 communication app for distributed teams."
              partnerLink="/partner/twist/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Typeform-logo.png"
              partnerName="Typeform"
              partnerDesc="Typeform turns average forms & surveys into a powerful brand communication tool for your business."
              partnerLink="/partner/typeform/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Lawyered-logo.png"
              partnerName="Lawyered"
              partnerDesc="India's first and only legal tech discovery platform helping startups, corporates & SMEs connecting with corporate legal professionals for all legal, litigation & documentation work"
              partnerLink="/partner/lawyered/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Klenty.png"
              partnerName="Klenty"
              partnerDesc="Klenty is a prospecting and email automation tool that can help inbound and outbound sales teams generate more leads and close more deals with reduced manual efforts."
              partnerLink="/partner/klenty/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/text-local-logo.png"
              partnerName="Udemy"
              partnerDesc="Textlocal is India's leading bulk SMS and transactional SMS platform."
              partnerLink="/partner/textlocal/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Rentsher-logo.png"
              partnerName="RentSher"
              partnerDesc="RentSher is India's leading flexible online technology rentals company providing IT & AV equipment such as laptops, desktops, workstations, servers, printers, projectors & LED TVs."
              partnerLink="/partner/rentsher/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/hunter-logo.png"
              partnerName="Hunter"
              partnerDesc="Hunter is the leading solution to find and verify professional email addresses."
              partnerLink="/partner/hunter/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Startup-Club-logo.png"
              partnerName="Startups Club"
              partnerDesc="Startups Club is a platform for startups from napkin stage to growth stage which enables connection, collaboration, funding, and networking."
              partnerLink="/partner/startup-club/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Safetywing-logo.png"
              partnerName="safety wing"
              partnerDesc="Travel Insurance for Digital Nomads - on a monthly subscription basis."
              partnerLink="/partner/safetywing/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Hostinger.png"
              partnerName="Hostinger"
              partnerDesc="Hostinger is a web hosting provider and Internet domain registrar with over 29 million users, collectively with its subsidiaries in 178 countries."
              partnerLink="/partner/hostinger/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Delhivery-logo.png"
              partnerName="Delhivery"
              partnerDesc="Delhivery is a third-party logistics service provider, operating in over 1,800 cities in India. It operates India’s largest express parcel transportation network with fully integrated and self-owned pickup, mid-mile and delivery."
              partnerLink="/partner/delhivery/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/The-Paper-Dolphin-Logo.png"
              partnerName="safety wing"
              partnerDesc="The Paper Dolphin is an eco-conscious stationary brand that makes notebooks & stationary bundles"
              partnerLink="/partner/the-paper-dolphin/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/budli-dot-in-logo.png"
              partnerName="Budli.in"
              partnerDesc="Budli.in is a re-commerce and e-commerce marketplace for gadgets."
              partnerLink="/partner/budli/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Into-Logo.png"
              partnerName="Into Design Research"
              partnerDesc="Into Design Research is a Design Cosulting firm that offers prototyping, 3D printing and fabrication services."
              partnerLink="/partner/into-design-research/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Tiny-Firmsv.png"
              partnerName="Tiny Firms"
              partnerDesc="Tiny Firms is ERP solution offering a complete suite of functionality reqiured to run your startup."
              partnerLink="/partner/tiny-firm/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/StartupWize-logo.png"
              partnerName="StartupWize"
              partnerDesc="StartupWize is a Consulting firm for Startups & SMEs that provides Business Model Validation, Pitch Deck & Financial Advisory Services."
              partnerLink="/partner/startupwize/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Spree-thinking-logo.png"
              partnerName="Thinking Spree"
              partnerDesc="Thinking Spree offers micro-consulting services to startups and SMEs spanning across various industries, helping them with any kind of business problem in hand."
              partnerLink="/partner/thinking-spree/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/Operate-remote-logo.png"
              partnerName="Tiny Firms"
              partnerDesc="Operate Remote specialises in helping remote teams and companies scale effectively. It primarily focuses on leadership development, leveraging emotional intelligence skills to improve a distributed workforce.
             "
              partnerLink="/partner/tiny-firm/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/hoogrid.png"
              partnerName="Hoogrid"
              partnerDesc="Hoogrid is a drag drop website ecommerce builder that provides web designers, marketers, and
              business owners with a set of web design tools to start their next awesome business or ecommerce stores within minutes. No coding or designer skills needed.
             "
              partnerLink="/partner/hoogrid/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/kaleyra.png"
              partnerName="Kaleyra"
              partnerDesc="Kaleyra is a trusted global Communications Platform as a Service (CPaaS) offering multi-channel
              integrated business communication solutions, including Messaging, Voice, and WhatsApp.
             "
              partnerLink="/partner/kaleyra/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/slite.png"
              partnerName="Slite"
              partnerDesc="Slite is the simplest way to structure all of your documentation. It’s a collaborative tool that helps businesses stay organized and work more thoughtfully.
             "
              partnerLink="/partner/slite/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/miro.png"
              partnerName="Miro for Startup"
              partnerDesc="Scalable, secure, cross-device and enterprise-ready team collaboration whiteboard for distributed teams.
             "
              partnerLink="/partner/miro/"
            />
            <PartnerCard
              partnerImg="https://assets.gofloaters.com/partner/TEDx-Chennai-logo.png"
              partnerName="Tiny Firms"
              partnerDesc="Gofloaters is proud to be a partner and supporter the Asia's 2nd largest TedX -> TedX Chennai."
              partnerLink="/partner/tedx-chennai/"
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default CommunityParters
