import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import HeaderBanner from "../components/headerbanner"
import BusinessToday from "../img/featureon/business-tody.png"
import BWDisrupt from "../img/featureon/BWDisrupt.png"
import DeccanHerald from "../img/featureon/DeccanHerald.png"
import DTNEXT from "../img/featureon/DTNEXT.png"
import Entrepreneur from "../img/featureon/entrepreneurindia.jpg"
import HinduBusiness from "../img/featureon/hindubusinessline.png"
import Inventiva from "../img/featureon/Inventiva.png"
import LBB from "../img/featureon/LBB.png"
import Metroplus from "../img/featureon/metroplus.png"
import Forbes from "../img/featureon/forbes.jpg"
import Peoplematters from "../img/featureon/people-matters.png"
import SiliconIndia from "../img/featureon/Silicon-India.png"
import startupstory from "../img/featureon/startup-story.jpg"
import TelanganaToday from "../img/featureon/TelanganaToday.png"
import Thehindu from "../img/featureon/thehindu.jpg"
import IndianExpress from "../img/featureon/the-new-indian-express.jpg"
import NewsMinute from "../img/featureon/the-news-minute.png"
import TimesofIndia from "../img/featureon/timesofindia.png"
import Yourstory from "../img/featureon/yourstory.jpg"
import YourstoryTamil from "../img/featureon/Yourstory-Tamil.png"
import BangaloreMirror from "../img/featureon/BangaloreMirror.png"
import ExpressIndulge from "../img/featureon/The-New-Indian-Express-Indulge.png"
import CoFoundersTown from "../img/featureon/CoFoundersTown.png"
import UnitedNewsofIndia from "../img/featureon/united-news-of-india.jpg"
import ProjectHatch from "../img/featureon/project-hatch.jpg"
import Indiabusinessjournal from "../img/featureon/indiabusinessjournal.jpg"
export default () => (
  <div>
    <Helmet>
      <title>We’re famous!</title>
    </Helmet>
    <Layout>
      <HeaderBanner>
        <h1>We’re famous!</h1>
      </HeaderBanner>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <div className="col-md-12 text-center">
            <h2>Just Out (Start-Up Story)</h2> <br></br>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 press-card">
            <a
              href="https://www.starterstory.com/gofloaters-on-demand-spaces"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={startupstory}></img>
              </div>

              <span>‘Gofloaters on Demand Spaces’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://yourstory.com/2020/02/app-gofloaters-discover-book-ondemand-coworking-spaces-cafes"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Yourstory}></img>
              </div>
              <span>‘Uber for gig economy workers’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.forbes.com/sites/jonyounger/2019/01/22/indian-entrepreneurs-at-gofloaters-are-reinventing-co-work-heres-how/#3e4ce0575610"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Forbes}></img>
              </div>

              <span>‘Reinventing Coworking’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.thehindubusinessline.com/news/real-estate/gofloaters-to-step-up-presence-in-10-more-cities-by-year-end/article26991109.ece"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Thehindu}></img>
              </div>

              <span>‘GoFloaters on expansion mode’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/01/TOIH_2019_05_01_Page_19_cropped.jpg"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={TimesofIndia}></img>
              </div>

              <span>‘‘GoFloaters forays into Hyderabad’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/01/GoFloaters_City-Express_hyd_thursday_june-6.jpg"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={IndianExpress}></img>
              </div>

              <span>‘All Set to Work’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.newindianexpress.com/cities/chennai/2019/jul/25/claim-your-space-2008847.html"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={IndianExpress}></img>
              </div>

              <span>‘Claim your space’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.thehindu.com/sci-tech/science/an-end-to-a-search-for-space/article29091399.ece"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Thehindu}></img>
              </div>

              <span>‘Sustainable work model’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://www.entrepreneur.com/slideshow/340128#2"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Entrepreneur}></img>
              </div>

              <span>‘Workspace for GenZ’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.thehindu.com/sci-tech/science/an-end-to-a-search-for-space/article29091399.ece"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Metroplus}></img>
              </div>

              <span>‘An office for a day’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.thenewsminute.com/article/co-working-too-costly-chennai-startup-offers-go-workspaces-starting-rs-25-101136"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={NewsMinute}></img>
              </div>

              <span>
                ‘Co-working too costly, GoFloaters offering on-the-go’
              </span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.businesstoday.in/magazine/special-reports/real-estate/flexible-working/story/390969.html"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={BusinessToday}></img>
              </div>

              <span>‘GoFloaters helping get over cost constraints’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://www.peoplematters.in/site/interstitial?return_to=%2Farticle%2Fguest-article%2Fflexible-workplaces-empowering-the-workforce-22401"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Peoplematters}></img>
              </div>

              <span>‘Flexible workplaces: Empowering the workforce’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="http://bwdisrupt.businessworld.in/article/GoFloaters-is-Changing-the-Game-of-Co-working-Spaces/06-11-2019-178572/"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={BWDisrupt}></img>
              </div>

              <span>‘Changing the Game of Co-working Spaces’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://telanganatoday.com/gofloaters-forays-into-hyderabad"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={TelanganaToday}></img>
              </div>

              <span>‘GoFloaters forays into Hyderabad’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.dtnext.in/News/City/2018/10/22022802/1092861/Now-work-on-the-go-in-Chennais-cafes-restaurants.vpf"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={DTNEXT}></img>
              </div>

              <span>‘Work on the go’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://yourstory.com/tamil/office-for-rent-from-25-rupees-go-floaters"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={YourstoryTamil}></img>
              </div>

              <span>‘Smartworkspaces for startups’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://lbb.in/chennai/go-floaters-co-working-space-chennai/"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={LBB}></img>
              </div>

              <span>‘Workspaces on budget’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.inventiva.co.in/press-release/inventiva/gofloaters-launches-operations-in-bengaluru/"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Inventiva}></img>
              </div>

              <span>‘GoFloaters Launches Bengaluru Operations’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.deccanherald.com/metrolife/metrolife-cityscape/youngsters-who-converted-hobbies-into-a-business-794833.html"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={DeccanHerald}></img>
              </div>

              <span>‘Helping convert hobby into business’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://services.siliconindia.com/vendor/gofloaters-fundamental-enabler-for-the-indian-startup-ecosystem--cid-8419.html"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={SiliconIndia}></img>
              </div>

              <span>
                ‘Fundamental Space Enablers for the Indian Startup Ecosystem’
              </span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://yourstory.com/2020/02/app-gofloaters-discover-book-ondemand-coworking-spaces-cafes"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Yourstory}></img>
              </div>

              <span>‘Why GoFloaters is supremely useful’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.entrepreneur.com/article/347772"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Entrepreneur}></img>
              </div>

              <span>‘Coping up during pandemic’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/04/GoFloaters_Deccan-Herald_Mar-20-2020.jpg"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={DeccanHerald}></img>
              </div>

              <span>‘Helping convert hobby into business’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://www.forbes.com/sites/jonyounger/2020/04/19/the-big-freelance-skills-needed-as-companies-rebuild-after-covid-19/#483e511f2528"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Forbes}></img>
              </div>

              <span>‘The Freelance Revolution during COVID-19’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://cofounderstown.com/co-working-spaces-covid-19-conversation-3056b"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={CoFoundersTown}></img>
              </div>

              <span>
                ‘Co-working spaces after COVID-19: No more Hot Desking ‘
              </span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.forbes.com/sites/jonyounger/2020/05/14/best-practice-how-top-freelance-platforms--engage-with-clients-during-covid-19/#3eaa2ab1dec0"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Forbes}></img>
              </div>

              <span>
                ‘How the best freelance platforms are staying close to clients
                during the pandemic’
              </span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://timesofindia.indiatimes.com/life-style/spotlight/will-shared-offices-be-the-future-for-corporates-in-the-post-coronavirus-world/articleshow/76345862.cms"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={TimesofIndia}></img>
              </div>

              <span>‘Shared offices be the future for corporates’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://www.newindianexpress.com/business/2020/jun/13/as-covid-19-persists-workspaces-combining-benefits-of-home-and-office-may-be-in-thing-2156204.html"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={IndianExpress}></img>
              </div>

              <span>
                ‘Chennai reinventing work culture with hybrid remote work’
              </span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="http://www.uniindia.com/gofloaters-launches-app-for-booking-office-spaces-in-kerala/business-economy/news/2046087.html"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={UnitedNewsofIndia}></img>
              </div>

              <span>‘GoFloaters Kerala Launch’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="https://www.projecthatch.co/interview/how-we-bootstrapped-on-demand-office-space-platform/"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={ProjectHatch}></img>
              </div>
              <span>‘How We Bootstrapped On-demand Office Space Platform’</span>
            </a>
          </div>

          <div className="col-md-3 press-card">
            <a
              href="http://www.indiabusinessjournalonline.com/#0announcements
              https://online.fliphtml5.com/uepyg/knfi/"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Indiabusinessjournal}></img>
              </div>
              <span>‘India Business Journal (IBJ)’</span>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <br></br>
            <br></br>
            <br></br>
            <h3>Footage (Events)</h3>
            <br></br>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.thehindu.com/society/gofloaters-hyderabad-be-your-own-boss-2019/article30328121.ece"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={Thehindu}></img>
              </div>

              <span>
                ‘GoFloaters teaches Hyderabad’s creative entrepreneurs how to be
                their own boss’
              </span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://epaper.newindianexpress.com/m5/2468673/The-New-Indian-Express-Hyderabad/18-12-2019#page/19/1"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={IndianExpress}></img>
              </div>

              <span>
                ‘BYOB Giving the artpreneurs head start in the business’
              </span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://bangaloremirror.indiatimes.com/bangalore/others/watch-a-film-on-the-emergency-or-tune-into-a-show-of-new-age-sounds/articleshow/72894083.cms"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={BangaloreMirror}></img>
              </div>

              <span>‘Talent Showcase’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.indulgexpress.com/events/hyderabad/2019/dec/13/check-out-be-your-own-boss-creative-and-art-fair-at-portafilter-coffee-house-in-madhapur-20537.html"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={ExpressIndulge}></img>
              </div>

              <span>‘Market hopping’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/01/Gofloaters.Dt-Next.pg_.15.jpg"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={DTNEXT}></img>
              </div>

              <span>‘Socialise, network and shop’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/01/Gofloaters.City-Express.pg_.02.jpg"
              target="_blank"
              rel="nofollow"
            >
              <div className="pressimage">
                <img src={IndianExpress}></img>
              </div>

              <span>‘Show & sell’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/01/GoFloater.metroplus.cchennai-byob_sept-102019.jpg"
              target="_blank"
            >
              <div className="pressimage">
                <img src={Metroplus}></img>
              </div>

              <span>‘Wit and wisdom’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://telanganatoday.com/art-and-creative-fair-on-december-14-in-hyderabad"
              target="_blank"
            >
              <div className="pressimage">
                <img src={TelanganaToday}></img>
              </div>

              <span>‘a Art and Creative Fair in Hyderabad’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://www.thehindubusinessline.com/news/national/gofloaters-to-host-hackathon-for-entrepreneurs/article29853849.ece"
              target="_blank"
            >
              <div className="pressimage">
                <img src={HinduBusiness}></img>
              </div>

              <span>‘Hackathon for entrepreneurs in Hyderabad’</span>
            </a>
          </div>
          <div className="col-md-3 press-card">
            <a
              href="https://telanganatoday.com/hyderabad-34-hour-hackathon-a-big-draw"
              target="_blank"
            >
              <div className="pressimage">
                <img src={TelanganaToday}></img>
              </div>

              <span>‘Hackathon for entrepreneurs in Hyderabad’</span>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Company Announcements:</h3>
            <br></br>
          </div>
          <table
            style={{ padding: "10px", width: "100%" }}
            className="col-md-12"
          >
            <tr>
              <td>May 1, 2019</td>
              <td>:</td>
              <td>
                <Link
                  to="/announcements/gofloaters-debuts-in-hyderabad"
                  className="links"
                >
                  GOFLOATERS DEBUTS IN HYDERABAD
                </Link>
              </td>
            </tr>
            <tr>
              <td>March 23, 2020</td>
              <td>:</td>
              <td>
                <Link
                  to="/announcements/gofloaters-on-an-expansion-drive"
                  className="links"
                >
                  GOFLOATERS DEBUTS IN HYDERABAD
                </Link>
              </td>
            </tr>
            <tr>
              <td>March 23, 2020</td>
              <td>:</td>
              <td>
                <Link
                  to="/announcements/gofloaters-on-demand-workspace-app-expands-to-pune"
                  className="links"
                >
                  GOFLOATERS, ON-DEMAND WORKSPACE APP EXPANDS TO PUNE
                </Link>
              </td>
            </tr>
            <tr>
              <td>June 20, 2020</td>
              <td>:</td>
              <td>
                <Link
                  to="/announcements/gofloaters-on-demand-workspace-app-expands-to-kochi"
                  className="links"
                >
                  GOFLOATERS, ON-DEMAND WORKSPACE APP EXPANDS TO KOCHI
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  </div>
)
