import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SimpleMap from "../components/simplemap"
import "../styles/spacedetail.scss"
class Spaces extends React.Component {
  render() {
    const post = this.props.data.listings
    //const center = { lat: post.location[0], lng: post.location[1] }
    var activeClass = ""
    const Photos = post.photos.map((photo, index) => (
      <div
        key={index}
        className={index === 0 ? "carousel-item active" : "carousel-item"}
      >
        <img
          src={photo.replace(
            "https://firebasestorage.googleapis.com/v0/b/gofloaters.appspot.com/o",
            "https://cdn.app.gofloaters.com"
          )}
          className=" d-block w-100 img-responsive"
          alt={post.spaceGFName + " " + post.spaceDisplayName}
        ></img>
      </div>
    ))
    const PhotosIndicator = post.photos.map((photo, index) => (
      <li
        data-target="#spaceslider"
        data-slide-to={index}
        className={index === 0 ? "active" : ""}
        key={index}
      ></li>
    ))

    let SpaceSuitedFor = ""
    if (post.purposesList) {
      SpaceSuitedFor = post.purposesList.map((purpose, index) => (
        <div className="SpaceSuitedFor" key={index}>
          <p>{purpose}</p>
        </div>
      ))
    }

    let operationTime = post.operationTime

    if (post.operationTime !== "") {
      operationTime = post.operationTime
        .split(", ")
        .map((operationTime, index) => (
          <p className="OperationTime" key={index}>
            {operationTime}
          </p>
        ))
    }

    var Title = ""
    if (post.spaceType === "Cafe") {
      Title = post.spaceDisplayName + " - " + post.spaceAddress
    } else {
      Title =
        post.spaceGFName +
        " - " +
        post.spaceDisplayName +
        " - " +
        post.spaceAddress
    }
    function tConv24(time24) {
      var ts = time24
      var H = +ts.substr(0, 2)
      var h = H % 12 || 12
      h = h < 10 ? "0" + h : h // leading 0 at the left for 1 digit hours
      var ampm = H < 12 ? " AM" : " PM"
      ts = h + ts.substr(2, 3) + ampm
      return ts
    }
    var today = new Date()
    var day = today.getDay()
    var daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    var todayDay = daylist[day]

    return (
      <div>
        <Helmet>
          <title>
            {Title} - {post.spaceCity} | GoFloaters
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
        </Helmet>
        <Layout>
          <div className="container spaceDetailContainer">
            <div className="row">
              <div className="col-md-12 addressBar">
                <Link to={"/" + post.spaceCity.toLowerCase()}>
                  {post.spaceCity}
                </Link>{" "}
                /{" "}
                {post.spaceType === "Cafe"
                  ? post.spaceDisplayName
                  : post.spaceGFName}
              </div>
              <div className="col-md-12 MobileOnly">
                {post.spaceType === "Cafe" ? (
                  <h1>{post.spaceDisplayName}</h1>
                ) : (
                  <h1>{post.spaceGFName}</h1>
                )}
                {post.spaceType !== "Cafe" ? (
                  <p>
                    {post.spaceDisplayName}&nbsp;|&nbsp;
                    <img
                      src="https://app.gofloaters.com/assets/imgs/location.png"
                      width="11px"
                    ></img>{" "}
                    {post.spaceAddress}
                    <br></br>
                    <br></br>
                  </p>
                ) : (
                  <p>
                    <img
                      src="https://app.gofloaters.com/assets/imgs/location.png"
                      width="11px"
                    ></img>{" "}
                    {post.spaceAddress}
                    <br></br>
                    <br></br>
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  id="spaceslider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">{PhotosIndicator}</ol>
                  <div className="carousel-inner">{Photos}</div>
                  <a
                    className="carousel-control-prev"
                    href="#spaceslider"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#spaceslider"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                {post.subType.toString() === "Office Space" ? (
                  <div className="SpaceSize">
                    <p>{post.seat} seats available</p>
                  </div>
                ) : (
                  ""
                )}
                <br></br>
                <div className="priceCloumn">
                  <div className="PriceTag">
                    {post.dayPassAvailable && post.priceDay !== " " ? (
                      <p>
                        <b>₹ {post.priceDay}</b> / Day
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="PriceTag">
                    {post.hourPassAvailable && post.priceHr !== " " ? (
                      <p>
                        <b>₹ {post.priceHr}</b> / Hour
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="PriceTag">
                    {post.monthPassAvailable && post.priceMonth !== " " ? (
                      <p>
                        <b>₹ {post.priceMonth}</b> / Month
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="spaceButton">
                  <br></br>
                  <a
                    href={
                      "https://app.gofloaters.com/#/home/explore/spacedetail/" +
                      post.spaceId
                    }
                    target="_blank"
                    rel="nofollow"
                  >
                    Book Now
                  </a>
                  <br></br>
                  <br></br>
                </div>
                {post.exclusiveOffer ? (
                  <p className="">
                    <img
                      src="https://app.gofloaters.com/assets/imgs/discountoffer.png"
                      width="20"
                    ></img>{" "}
                    {post.exclusiveOffer}
                    <br></br>
                  </p>
                ) : (
                  ""
                )}
                {post.spaceType === "Cafe" && post.noiseLevel ? (
                  <p className="">
                    <br></br>
                    <img
                      src="https://app.gofloaters.com/assets/imgs/noiselevel.png"
                      width="20"
                    ></img>{" "}
                    Noise Level: {post.noiseLevel}
                    <br></br>
                    <br></br>
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6">
                <div className="DesktopOnly">
                  {post.spaceType === "Cafe" ? (
                    <h1>{post.spaceDisplayName}</h1>
                  ) : (
                    <h1>{post.spaceGFName}</h1>
                  )}
                  {post.spaceType !== "Cafe" ? (
                    <p>
                      {post.spaceDisplayName}&nbsp;|&nbsp;
                      <img
                        src="https://app.gofloaters.com/assets/imgs/location.png"
                        width="11px"
                      ></img>{" "}
                      {post.spaceAddress}
                      <br></br>
                    </p>
                  ) : (
                    <p>
                      <img
                        src="https://app.gofloaters.com/assets/imgs/location.png"
                        width="11px"
                      ></img>{" "}
                      {post.spaceAddress}
                      <br></br>
                    </p>
                  )}
                </div>
                {post.Rating >= 1 ? (
                  <p>
                    <br></br>
                    <b>Rating:</b> <i class="fa fa-star star"></i> {post.Rating}
                  </p>
                ) : (
                  ""
                )}
                {post.spaceDesc ? (
                  <div>
                    <br></br>

                    <h4>Overview</h4>
                    <p>{post.spaceDesc}</p>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <br></br>

                  <h4>Amenities</h4>
                  {post.Facility.search("Hi Speed WiFi") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/hi_speed_wifi.png"></img>
                      <p>Hi Speed WiFi</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Power Backup") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/power_backup.png"></img>
                      <p>Power Backup</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("WiFi Backup") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/wifi_backup.png"></img>
                      <p>WiFi Backup</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Projector") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/projector.png"></img>
                      <p>Projector</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Television") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/television.png"></img>
                      <p>Television</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Whiteboard") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/whiteboard.png"></img>
                      <p>Whiteboard</p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="amenities-box">
                  <br></br>

                  <h4>Space Info</h4>
                  {post.Facility.search("AC") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/ac.png"></img>
                      <p>AC</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Metro Nearby") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/metro_nearby.png"></img>
                      <p>Metro Nearby</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Free Parking") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/free_parking.png"></img>

                      <p>Free Parking</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Rest Rooms") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/rest_rooms.png"></img>
                      <p>Rest Rooms</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Coffee/Tea") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/coffee_tea.png"></img>
                      <p>Coffee/Tea</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Pantry") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/pantry.png"></img>
                      <p>Pantry</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Meeting Rooms") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/meeting_rooms.png"></img>
                      <p>Meeting Rooms</p>
                    </span>
                  ) : (
                    ""
                  )}
                  {post.Facility.search("Outside Food Allowed") > 1 ? (
                    <span className="amenities text-center">
                      <img src="https://app.gofloaters.com/assets/imgs/outside_food_allowed.png"></img>
                      <p> Outside Food Allowed</p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                {SpaceSuitedFor !== "" ? (
                  <div>
                    <br></br>
                    <h4>Space Best Suited for</h4>
                    {SpaceSuitedFor}
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <br></br>
                  <h4>Opening Hours</h4>
                  {/*<p>{operationTime}</p> */}

                  <table className="table">
                    <tbody>
                      <tr>
                        <td colSpan="3" align="center">
                          Weekdays
                        </td>
                      </tr>
                      {post.monday.holiday ? (
                        <tr
                          className={daylist[day] === "Monday" ? "active" : ""}
                        >
                          <td>
                            <strong>Monday</strong>
                          </td>
                          <td colSpan="2" align="center">
                            Holiday
                          </td>
                        </tr>
                      ) : (
                        <tr
                          className={daylist[day] === "Monday" ? "active" : ""}
                        >
                          <td>
                            <strong>Monday</strong>
                          </td>
                          <td>{tConv24(post.monday.from)}</td>
                          <td>{tConv24(post.monday.to)}</td>
                        </tr>
                      )}

                      {post.tuesday.holiday ? (
                        <tr
                          className={daylist[day] === "Tuesday" ? "active" : ""}
                        >
                          <td>
                            <strong>Tuesday</strong>
                          </td>
                          <td colSpan="2" align="center">
                            Holiday
                          </td>
                        </tr>
                      ) : (
                        <tr
                          className={daylist[day] === "Tuesday" ? "active" : ""}
                        >
                          <td>
                            <strong>Tuesday</strong>
                          </td>
                          <td>{tConv24(post.tuesday.from)}</td>
                          <td>{tConv24(post.tuesday.to)}</td>
                        </tr>
                      )}
                      {post.wednesday.holiday ? (
                        <tr
                          className={
                            daylist[day] === "Wednesday" ? "active" : ""
                          }
                        >
                          <td>
                            <strong>Wednesday</strong>
                          </td>
                          <td colSpan="2" align="center">
                            Holiday
                          </td>
                        </tr>
                      ) : (
                        <tr
                          className={
                            daylist[day] === "Wednesday" ? "active" : ""
                          }
                        >
                          <td>
                            <strong>Wednesday</strong>
                          </td>
                          <td>{tConv24(post.wednesday.from)}</td>
                          <td>{tConv24(post.wednesday.to)}</td>
                        </tr>
                      )}

                      {post.thursday.holiday ? (
                        <tr
                          className={
                            daylist[day] === "Thursday" ? "active" : ""
                          }
                        >
                          <td>
                            <strong>Thursday</strong>
                          </td>
                          <td colSpan="2" align="center">
                            Holiday
                          </td>
                        </tr>
                      ) : (
                        <tr
                          className={
                            daylist[day] === "Thursday" ? "active" : ""
                          }
                        >
                          <td>
                            <strong>Thursday</strong>
                          </td>
                          <td>{tConv24(post.thursday.from)}</td>
                          <td>{tConv24(post.thursday.to)}</td>
                        </tr>
                      )}
                      {post.friday.holiday ? (
                        <tr
                          className={daylist[day] === "Friday" ? "active" : ""}
                        >
                          <td>
                            <strong>Friday</strong>
                          </td>
                          <td colSpan="2" align="center">
                            Holiday
                          </td>
                        </tr>
                      ) : (
                        <tr
                          className={daylist[day] === "Friday" ? "active" : ""}
                        >
                          <td>
                            <strong>Friday</strong>
                          </td>
                          <td>{tConv24(post.friday.from)}</td>
                          <td>{tConv24(post.friday.to)}</td>
                        </tr>
                      )}
                      <tr>
                        <td colSpan="3" align="center">
                          Weekends
                        </td>
                      </tr>
                      {post.saturday.holiday ? (
                        <tr
                          className={
                            daylist[day] === "Saturday" ? "active" : ""
                          }
                        >
                          <td>
                            <strong>Saturday</strong>
                          </td>
                          <td colSpan="2" align="center">
                            Holiday
                          </td>
                        </tr>
                      ) : (
                        <tr
                          className={
                            daylist[day] === "Saturday" ? "active" : ""
                          }
                        >
                          <td>
                            <strong>Saturday</strong>
                          </td>
                          <td>{tConv24(post.saturday.from)}</td>
                          <td>{tConv24(post.saturday.to)}</td>
                        </tr>
                      )}

                      {post.sunday.holiday ? (
                        <tr
                          className={daylist[day] === "Sunday" ? "active" : ""}
                        >
                          <td>
                            <strong>Sunday</strong>
                          </td>
                          <td colSpan="2" align="center">
                            Holiday
                          </td>
                        </tr>
                      ) : (
                        <tr
                          className={daylist[day] === "Sunday" ? "active" : ""}
                        >
                          <td>
                            <strong>Sunday</strong>
                          </td>
                          <td>{tConv24(post.sunday.from)}</td>
                          <td>{tConv24(post.sunday.to)}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                {post.subType.toString() === "Office Space" ? (
                  <div>
                    <br></br>
                    <h4>Security Deposit</h4>
                    <p>{post.securitydeposit} (for monthly bookings)</p>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <br></br>
                  <h4>Location</h4>
                  <p>
                    <img
                      src="https://app.gofloaters.com/assets/imgs/landmark.png"
                      width="17"
                    ></img>{" "}
                    Landmark: {post.landmark}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* <SimpleMap
                  lat={post.location[0]}
                  lng={post.location[1]}
               ></SimpleMap> */}
                <br></br> <br></br>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Spaces

export const pageQuery = graphql`
  query SpacesSlug($slug: String!) {
    listings(slug: { eq: $slug }) {
      spaceDisplayName
      spaceCity
      spaceGFName
      spaceId
      spaceImage
      spaceTitle
      spaceType
      subType
      monthPassAvailable
      officeSpaceType
      priceDay
      priceHr
      priceMonth
      photos
      Facility
      operationTime
      hourPassAvailable
      exclusiveOffer
      dayPassAvailable
      purposesList
      spaceAddress
      noiseLevel
      landmark
      spaceDesc

      Rating
      securitydeposit
      seat
      monday {
        from
        to
        useNow
        holiday
      }
      tuesday {
        from
        to
        useNow
        holiday
      }
      wednesday {
        from
        to
        useNow
        holiday
      }
      thursday {
        from
        to
        useNow
        holiday
      }
      friday {
        from
        to
        useNow
        holiday
      }
      saturday {
        from
        to
        useNow
        holiday
      }
      sunday {
        from
        to
        useNow
        holiday
      }
    }
  }
`
