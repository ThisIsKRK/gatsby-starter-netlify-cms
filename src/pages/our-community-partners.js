import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
import PartnerCard from "../components/Card/partnercard"
import aws from "../img/partner/aws-logo.png"
import budli from "../img/partner/budli-dot-in-logo.png"
import delihivery from "../img/partner/Delhivery-logo.png"
import draper from "../img/partner/draper-logo.png"
import freshworks from "../img/partner/Freshworks-logo.png"
import googlecloud from "../img/partner/Google-Cloud-logo.png"
import hostinger from "../img/partner/Hostinger.png"
import hubspot from "../img/partner/Hubspot-logo.png"
import hunter from "../img/partner/hunter-logo.png"
import ibm from "../img/partner/IBM-Cloud-logo.png"
import into from "../img/partner/Into-Logo.png"
import klenty from "../img/partner/Klenty.png"
import lawyered from "../img/partner/Lawyered-logo.png"
import operate from "../img/partner/Operate-remote-logo.png"
import razorpay from "../img/partner/Razorpay-logo.png"
import rentsher from "../img/partner/rentsher-logo.png"
import safetywing from "../img/partner/Safetywing-logo.png"
import segment from "../img/partner/Segment-logo.png"
import segmentstartup from "../img/partner/Segment-Startup-Program-logo.png"
import spree from "../img/partner/Spree-thinking-logo.png"
import startupclub from "../img/partner/Startup-Club-logo.png"
import startupwize from "../img/partner/startupwize-logo.png"
import tedxchennai from "../img/partner/TEDx-Chennai-logo.png"
import textlocal from "../img/partner/text-local-logo.png"
import thepaperdolphin from "../img/partner/The-Paper-Dolphin-Logo.png"
import tinyfirmsv from "../img/partner/Tiny-Firmsv.png"
import twist from "../img/partner/Twist-logo.png"
import todoist from "../img/partner/todoist-logo.png"
import typeform from "../img/partner/Typeform-logo.png"
import uberbusiness from "../img/partner/Uber-for-Business-logo.png"
import udemy from "../img/partner/Udemy.png"

const CommunityParters = () => {
  return (
    <div>
      <Helmet>
        <title>Community Benefits</title>
      </Helmet>
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
              partnerImg={aws}
              partnerName="Amazon Web Services"
              partnerDesc="Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 165 fully-featured services from data centers globally."
              partnerLink="/partner/aws/"
            />
            <PartnerCard
              partnerImg={googlecloud}
              partnerName="Google Cloud Platform"
              partnerDesc="Google Cloud Platform (GCP), offered by Google, is a suite of cloud computing services - infrastructure as a service, platform as a service, and serverless computing environments."
              partnerLink="/partner/google-cloud/"
            />
            <PartnerCard
              partnerImg={segmentstartup}
              partnerName="Segment Startup"
              partnerDesc="Segment Startup Program offers exclusive discounts with 35+ products of $1M in value"
              partnerLink="/partner/segment-35-other-products-1m-value/"
            />
            <PartnerCard
              partnerImg={freshworks}
              partnerName="Freshworks"
              partnerDesc="Freshworks is a leading SaaS provider in 150+ countries with a suite of business software including customer support, sales, ITSM, Cloud PBX, etc."
              partnerLink="/partner/freshworks/"
            />
            <PartnerCard
              partnerImg={ibm}
              partnerName=""
              partnerDesc="IBM Cloud is a suite of cloud computing services from IBM that offers both platform as a service (PaaS) and infrastructure as a service (IaaS)."
              partnerLink="/partner/ibm-cloud/"
            />
            <PartnerCard
              partnerImg={hubspot}
              partnerName="HubSpot"
              partnerDesc="HubSpot is a market-leading platform comprising of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support"
              partnerLink="/partner/hubspot/"
            />
            <PartnerCard
              partnerImg={draper}
              partnerName="Draper"
              partnerDesc="Draper is an international network of start-up hostels, workspaces & other support systems for entrepreneurs ."
              partnerLink="/partner/draper-startup-house/"
            />
            <PartnerCard
              partnerImg={razorpay}
              partnerName="Razorpays"
              partnerDesc="Razorpays offer a fast, affordable and secure way for merchants and companies to accept payments online. It has revolutionized online payments by providing clean, developer-friendly APIs and hassle-free integration."
              partnerLink="/partner/razorpay/"
            />
            <PartnerCard
              partnerImg={uberbusiness}
              partnerName="Razorpays"
              partnerDesc="Uber is the world's leading ride-hailing platform with 110 million users across 785 cities. Uber for business is an all-in-one solution that simplifies business travel."
              partnerLink="/partner/uber/"
            />
            <PartnerCard
              partnerImg={udemy}
              partnerName="Udemy"
              partnerDesc="Udemy is the world's biggest online learning platform with more than 130 milliion courses taught in over 60 languages."
              partnerLink="/partner/udemy/"
            />
            <PartnerCard
              partnerImg={todoist}
              partnerName="Todoist"
              partnerDesc="Millions of teams rely on Todoist to organize & prioritize their work. Plan projects, delegate responsibilities, & track team progress over time. Available on 10+ platforms with 60+ integrations."
              partnerLink="/partner/todoist-business/"
            />
            <PartnerCard
              partnerImg={segment}
              partnerName="Udemy"
              partnerDesc="Segment is an analytics platform that collects, stores, and routes user data to hundreds of tools with the flick of a switch."
              partnerLink="/partner/segment/"
            />
            <PartnerCard
              partnerImg={twist}
              partnerName="Twist"
              partnerDesc="Twist is a thread-based Slack alternative that keeps team communication organized, on-topic & easily searchable (forever). Loved by 100K+ companies & ranked by PCMag as the #1 communication app for distributed teams."
              partnerLink="/partner/twist/"
            />
            <PartnerCard
              partnerImg={typeform}
              partnerName="Typeform"
              partnerDesc="Typeform turns average forms & surveys into a powerful brand communication tool for your business."
              partnerLink="/partner/typeform/"
            />
            <PartnerCard
              partnerImg={lawyered}
              partnerName="Udemy"
              partnerDesc="India's first and only legal tech discovery platform helping startups, corporates & SMEs connecting with corporate legal professionals for all legal, litigation & documentation work"
              partnerLink="/partner/lawyered/"
            />
            <PartnerCard
              partnerImg={klenty}
              partnerName="Udemy"
              partnerDesc="Klenty is a prospecting and email automation tool that can help inbound and outbound sales teams generate more leads and close more deals with reduced manual efforts."
              partnerLink="/partner/klenty/"
            />
            <PartnerCard
              partnerImg={textlocal}
              partnerName="Udemy"
              partnerDesc="Textlocal is India's leading bulk SMS and transactional SMS platform."
              partnerLink="/partner/textlocal/"
            />
            <PartnerCard
              partnerImg={rentsher}
              partnerName="RentSher"
              partnerDesc="RentSher is India's leading flexible online technology rentals company providing IT & AV equipment such as laptops, desktops, workstations, servers, printers, projectors & LED TVs."
              partnerLink="/partner/rentsher/"
            />
            <PartnerCard
              partnerImg={hunter}
              partnerName="Hunter"
              partnerDesc="Hunter is the leading solution to find and verify professional email addresses."
              partnerLink="/partner/hunter/"
            />
            <PartnerCard
              partnerImg={startupclub}
              partnerName="Startups Club"
              partnerDesc="Startups Club is a platform for startups from napkin stage to growth stage which enables connection, collaboration, funding, and networking."
              partnerLink="/partner/startup-club/"
            />
            <PartnerCard
              partnerImg={safetywing}
              partnerName="safety wing"
              partnerDesc="Travel Insurance for Digital Nomads - on a monthly subscription basis."
              partnerLink="/partner/safetywing/"
            />
            <PartnerCard
              partnerImg={hostinger}
              partnerName="Hostinger"
              partnerDesc="Hostinger is a web hosting provider and Internet domain registrar with over 29 million users, collectively with its subsidiaries in 178 countries."
              partnerLink="/partner/hostinger/"
            />
            <PartnerCard
              partnerImg={delihivery}
              partnerName="Delhivery"
              partnerDesc="Delhivery is a third-party logistics service provider, operating in over 1,800 cities in India. It operates India’s largest express parcel transportation network with fully integrated and self-owned pickup, mid-mile and delivery."
              partnerLink="/partner/delhivery/"
            />
            <PartnerCard
              partnerImg={thepaperdolphin}
              partnerName="safety wing"
              partnerDesc="The Paper Dolphin is an eco-conscious stationary brand that makes notebooks & stationary bundles"
              partnerLink="/partner/the-paper-dolphin/"
            />
            <PartnerCard
              partnerImg={budli}
              partnerName="Budli.in"
              partnerDesc="Budli.in is a re-commerce and e-commerce marketplace for gadgets."
              partnerLink="/partner/budli/"
            />
            <PartnerCard
              partnerImg={into}
              partnerName="Into Design Research"
              partnerDesc="Into Design Research is a Design Cosulting firm that offers prototyping, 3D printing and fabrication services."
              partnerLink="/partner/into-design-research/"
            />
            <PartnerCard
              partnerImg={tinyfirmsv}
              partnerName="Tiny Firms"
              partnerDesc="Tiny Firms is ERP solution offering a complete suite of functionality reqiured to run your startup."
              partnerLink="/partner/tiny-firm/"
            />
            <PartnerCard
              partnerImg={startupwize}
              partnerName="StartupWize"
              partnerDesc="StartupWize is a Consulting firm for Startups & SMEs that provides Business Model Validation, Pitch Deck & Financial Advisory Services."
              partnerLink="/partner/startupwize/"
            />
            <PartnerCard
              partnerImg={spree}
              partnerName="Thinking Spree"
              partnerDesc="Thinking Spree offers micro-consulting services to startups and SMEs spanning across various industries, helping them with any kind of business problem in hand."
              partnerLink="/partner/thinking-spree/"
            />
            <PartnerCard
              partnerImg={operate}
              partnerName="Tiny Firms"
              partnerDesc="Operate Remote specialises in helping remote teams and companies scale effectively. It primarily focuses on leadership development, leveraging emotional intelligence skills to improve a distributed workforce.
             "
              partnerLink="/partner/tiny-firm/"
            />
            <PartnerCard
              partnerImg={tedxchennai}
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
