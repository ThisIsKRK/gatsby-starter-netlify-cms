const path = require(`path`)
const axios = require("axios")
const crypto = require("crypto")
const fetch = require(`node-fetch`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  const fetchData = () =>
    axios.get(`https://gofloaters.firebaseapp.com/spaces/allactive`)
  const res = await fetchData()
  let responsevalue = Object.values(res.data)
  const details = responsevalue
  function FacilityList(facility) {
    if (facility) {
      return facility
    } else {
      return ""
    }
  }

  function TwentyFour(operationTiming) {
    if (operationTiming) {
      var operationDays = operationTiming.days.friday
      if (operationDays.from === "00:00") {
        return ",Twenty Four Hours"
      } else {
        return ""
      }
    } else {
      return ""
    }
  }

  function SixPM(operationTiming) {
    if (operationTiming) {
      var operationDays = operationTiming.days.friday
      if (operationDays.to > "18:00") {
        return ",Open 6PM"
      } else {
        return ""
      }
    } else {
      return ""
    }
  }
  function DayPass(dayPass) {
    if (dayPass) {
      return "Daily Pass"
    } else {
      return ""
    }
  }
  function MeetingSpaceSize(Size, space) {
    if (Size !== "" && space !== "") {
      if (parseInt(Size) <= 5) {
        return "moption a,moption b,moption d,Less Than Five,"
      } else if (parseInt(Size) >= 6 && parseInt(Size) <= 15) {
        return "moption a,moption c,moption d,Five to Fifteen,"
      } else if (parseInt(Size) >= 15) {
        return "moption b,moption c,moption d,More than Fifteen,"
      } else return ""
    } else return ""
  }
  function EventSpaceSize(Size, space) {
    if (Size !== "" && space !== "") {
      if (parseInt(Size) <= 30) {
        return "eoption a,eoption b,eoption d,Less Than Thirty,"
      } else if (parseInt(Size) >= 30 && parseInt(Size) <= 60) {
        return "eoption a,eoption c,eoption d,Thirty To Sixty,"
      } else if (parseInt(Size) >= 60) {
        return "eoption b,eoption c,eoption d,More than Sixty,"
      } else return ""
    } else return ""
  }
  function TrainingSpaceSize(Size, space) {
    if (Size !== "" && space !== "") {
      if (parseInt(Size) <= 10) {
        return "toption a,toption b,toption d,Less Than Ten,"
      } else if (parseInt(Size) >= 10 && parseInt(Size) <= 20) {
        return "toption a,toption c,toption d,Ten To Twenty,"
      } else if (parseInt(Size) >= 20) {
        return "toption b,toption c,toption d,More than Twenty,"
      } else return ""
    } else return ""
  }
  function decimalAdjust(type, value, exp) {
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value)
    }
    value = +value
    exp = +exp
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN
    }
    value = value.toString().split("e")
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)))
    value = value.toString().split("e")
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp))
  }
  const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp)
  function getAvgRating(feedbacks) {
    var rating = 0
    if (!feedbacks) {
      rating = 0
    } else {
      rating = 0
      var length = 0
      var feedbackvalue = Object.values(feedbacks)
      const feedbackArray = feedbackvalue
      feedbackArray.map((answer, i) => {
        rating = rating + answer.rating
        length = i + 1
      })
      rating = rating / length
      //console.log("Entered", rating, length)
      rating = ceil10(rating, -1)
    }
    return rating
  }
  function getMostPopular(feedbacks) {
    var rating = 0
    if (!feedbacks) {
      rating = 0
    } else {
      rating = 0
      var length = 0
      var feedbackvalue = Object.values(feedbacks)
      const feedbackArray = feedbackvalue
      feedbackArray.map((answer, i) => {
        rating = rating + answer.rating
        length = i + 1
      })
      rating = rating / length
      //console.log("Entered", rating, length)
      rating = ceil10(rating, -1)
    }
    if (rating > 3) {
      return "Most Popular"
    } else {
      return ""
    }
  }
  details.forEach((detail, i) => {
    var priceperhr = ""
    var priceperday = ""
    var pricepermonth = ""
    var locality = ""
    var slug = ""
    var str = ""
    var hourpassavailable = "false"
    var monthpassavailable = "false"
    var daypassavailable = "false"
    {
      /* if (!detail.spaceSubType === "Work Cafe") {
      str = detail.spaceDisplayName
      slug = str.replace(/\s+/g, "-").toLowerCase()
    } else {
      str = detail.gofloatersSpaceName
      slug = str.replace(/\s+/g, "-").toLowerCase()
    } 
    */
    }
    if (detail.address) {
      locality = detail.address.locality
    }
    var landmark = ""
    if (detail.address) {
      landmark = detail.address.landmark
    } else {
      landmark = ""
    }
    var timing = ["Not Avail"]

    var str = ""
    if (detail.gofloatersSpaceName) {
      var str = detail.gofloatersSpaceName
      str =
        str +
        "-" +
        detail.spaceDisplayName +
        "-" +
        locality.trim().replace(".", "") +
        "-" +
        detail.city
      str = str.trim()
      slug = str.replace(/\s+/g, "-").toLowerCase()
      slug = slug.replace("&", "and")
      slug = slug.replace("'", "")
      slug = slug.replace("é", "e")
      slug = slug.replace(".", "-")
      slug = slug.replace("|", "-")
      slug = slug.replace("---", "-")
      slug = slug.replace("--", "-")
    }
    if (detail.gofloatersSpaceName === "N/A") {
      var str = detail.spaceDisplayName.replace(/\s+/g, "-").toLowerCase()
      str = str + "-" + locality.trim().replace(".", "") + "-" + detail.city
      str = str.trim()
      slug = str.replace(/\s+/g, "-").toLowerCase()
      slug = slug.replace("&", "and")
      slug = slug.replace("'", "")
      slug = slug.replace("é", "e")
      slug = slug.replace(".", "-")
      slug = slug.replace("|", "-")
      slug = slug.replace("---", "-")
      slug = slug.replace("--", "-")
    }

    if (typeof detail.priceperhr === "string") {
      priceperhr = detail.priceperhr
    }
    if (typeof detail.priceperday === "string") {
      priceperday = detail.priceperday
    }
    if (typeof detail.pricepermonth === "string") {
      pricepermonth = detail.pricepermonth
    }
    if (typeof detail.priceperhr === "number") {
      priceperhr = detail.priceperhr.toString()
    }
    if (typeof detail.priceperday === "number") {
      priceperday = detail.priceperday.toString()
    }
    if (typeof detail.pricepermonth === "number") {
      pricepermonth = detail.pricepermonth.toString()
    }

    var feedback
    if (detail.feedback) {
      feedback = detail.feedback
    } else {
      feedback = "feed"
    }
    var minCount
    if (detail.minHeadCount) {
      minCount = detail.minHeadCount
    } else {
      minCount = 0
    }
    var subSpaceTypeString
    if (typeof detail.spaceSubType === "object") {
      subSpaceTypeString = detail.spaceSubType.toString()
    } else {
      subSpaceTypeString = ""
    }
    var spaceSize = " "
    if (detail.seatsAvailable) {
      spaceSize = detail.seatsAvailable.toString()
    }

    hourpassavailable = detail.hourPassAvailable
    daypassavailable = detail.dayPassAvailable
    monthpassavailable = detail.monthPassAvailable
    var spaceImages = "https://placeholder.com/600"
    if (detail.photos) {
      spaceImages = detail.photos[0].replace(
        "https://firebasestorage.googleapis.com/v0/b/gofloaters.appspot.com/o",
        "https://cdn.app.gofloaters.com"
      )
    }
    function mondayTiming(operationTiming) {
      var values = { from: " ", to: " ", useNow: false, holiday: false }
      if (operationTiming) {
        return detail.operationTiming.days.monday
      } else {
        return values
      }
    }
    function TuesdayTiming(operationTiming) {
      var values = { from: " ", to: " ", useNow: false, holiday: false }
      if (operationTiming) {
        return detail.operationTiming.days.tuesday
      } else {
        return values
      }
    }
    function WednesdayTiming(operationTiming) {
      var values = { from: " ", to: " ", useNow: false, holiday: false }
      if (operationTiming) {
        return detail.operationTiming.days.wednesday
      } else {
        return values
      }
    }
    function ThursdayTiming(operationTiming) {
      var values = { from: " ", to: " ", useNow: false, holiday: false }
      if (operationTiming) {
        return detail.operationTiming.days.thursday
      } else {
        return values
      }
    }
    function FridayTiming(operationTiming) {
      var values = { from: " ", to: " ", useNow: false, holiday: false }
      if (operationTiming) {
        return detail.operationTiming.days.friday
      } else {
        return values
      }
    }
    function SaturdayTiming(operationTiming) {
      var values = { from: " ", to: " ", useNow: false, holiday: false }
      if (operationTiming) {
        return detail.operationTiming.days.saturday
      } else {
        return values
      }
    }
    function SundayTiming(operationTiming) {
      var values = { from: " ", to: " ", useNow: false, holiday: false }
      if (operationTiming) {
        return detail.operationTiming.days.sunday
      } else {
        return values
      }
    }
    const ListingNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Listings`,
      },
      children: [],
      spaceId: detail.spaceId,
      spaceImage: spaceImages,
      photos: detail.photos,
      spaceTitle: detail.spaceDisplayName,
      spaceGFName: detail.gofloatersSpaceName,
      OriginalName: detail.originalName,
      spaceType: detail.spaceType,
      subType: detail.spaceSubType,
      spaceAddress: locality,
      spaceCity: detail.city,
      priceHr: priceperhr,
      priceDay: priceperday,
      priceMonth: pricepermonth,
      slug: slug,
      location: detail.location,
      spaceDesc: detail.spaceDesc,
      seat: spaceSize,
      exclusiveOffer: detail.exclusiveOffer,
      operationTime: detail.operationTime,
      noiseLevel: detail.noiseLevel,
      landmark: landmark,
      securitydeposit: detail.securitydeposit,
      purposesList: detail.purposesList,
      monthPassAvailable: monthpassavailable,
      hourPassAvailable: hourpassavailable,
      dayPassAvailable: daypassavailable,
      officeSpaceType: detail.officeSpaceType,
      purposesList: detail.purposesList,
      spaceDisplayName: detail.spaceDisplayName,
      Rating: getAvgRating(detail.feedback),
      Facility:
        "All," +
        FacilityList(detail.facilitiesList) +
        "," +
        detail.officeSpaceType +
        "," +
        TwentyFour(detail.operationTiming) +
        "," +
        SixPM(detail.operationTiming) +
        "," +
        DayPass(detail.dayPassAvailable) +
        "," +
        getMostPopular(detail.feedback) +
        "," +
        MeetingSpaceSize(minCount, subSpaceTypeString) +
        "," +
        EventSpaceSize(minCount, subSpaceTypeString) +
        "," +
        TrainingSpaceSize(minCount, subSpaceTypeString) +
        minCount,
      operationTiming: TwentyFour(detail.operationTiming),
      monday: mondayTiming(detail.operationTiming),
      tuesday: TuesdayTiming(detail.operationTiming),
      wednesday: WednesdayTiming(detail.operationTiming),
      thursday: ThursdayTiming(detail.operationTiming),
      friday: FridayTiming(detail.operationTiming),
      saturday: SaturdayTiming(detail.operationTiming),
      sunday: SundayTiming(detail.operationTiming),
    }
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(ListingNode))
      .digest(`hex`)
    ListingNode.internal.contentDigest = contentDigest
    createNode(ListingNode)
  })

  return
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const spaceDetail = path.resolve(`./src/templates/spaces.js`)
  const EventPost = path.resolve(`./src/templates/event-post.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")

  return graphql(
    `
      {
        allListings(limit: 3000) {
          edges {
            node {
              slug
              spaceId
              monthPassAvailable
              dayPassAvailable
              subType
            }
          }
        }
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(event)/" } }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        blog: allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(blog)/" } }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                category
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Data Fetching
    const posts = result.data.allListings.edges
    const events = result.data.allMarkdownRemark.edges

    // Meeting Space pages
    posts.forEach(post => {
      var SpaceURL = `/meeting-space/${post.node.slug}/`
      if (
        post.node.slug !== "" &&
        post.node.subType.includes("Meeting Space")
      ) {
        createPage({
          path: SpaceURL,
          component: path.resolve(`./src/templates/spaces.js`),
          context: { slug: post.node.slug },
        })
      }
    })
    // Office Space Daily
    posts.forEach(post => {
      var SpaceURL = `/daily-office/${post.node.slug}/`
      if (
        post.node.slug !== "" &&
        post.node.subType == "Office Space" &&
        post.node.dayPassAvailable === true
      ) {
        createPage({
          path: SpaceURL,
          component: path.resolve(`./src/templates/dspaces.js`),
          context: { slug: post.node.slug },
        })
      }
    })
    // Office Space Monthly
    posts.forEach(post => {
      var SpaceURL = `/monthly-office/${post.node.slug}/`
      if (
        post.node.slug !== "" &&
        post.node.subType == "Office Space" &&
        post.node.monthPassAvailable === true
      ) {
        createPage({
          path: SpaceURL,
          component: path.resolve(`./src/templates/mspaces.js`),
          context: { slug: post.node.slug },
        })
      }
    })
    //Event Pages

    events.forEach((event, index) => {
      const previous =
        index === events.length - 1 ? null : events[index + 1].node
      const next = index === 0 ? null : events[index - 1].node
      var GEventsURL = `/events${event.node.fields.slug}`
      createPage({
        path: GEventsURL,
        component: EventPost,
        context: {
          slug: event.node.fields.slug,
          previous,
          next,
        },
      })
    })
    // Event Page Pagination

    // Create Event post list pages
    const postsPerPage = 6
    const numPages = Math.ceil(events.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/events/` : `/events/${i + 1}`,
        component: path.resolve("./src/templates/event-list.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
    // Event Page END
    //Blog Post
    const blogs = result.data.blog.edges
    blogs.forEach((blog, index) => {
      const previous = index === blogs.length - 1 ? null : blogs[index + 1].node
      const next = index === 0 ? null : blogs[index - 1].node
      var GBlogURL = `/blog${blog.node.fields.slug}`
      createPage({
        path: GBlogURL,
        component: blogPost,
        context: {
          slug: blog.node.fields.slug,
          previous,
          next,
        },
      })
    })
    // Code Will Here
    // Create blog post list pages
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    blogs.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/blog/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    let category = []
    // Iterate through each post, putting all found tags into `tags`
    blogs.forEach(edge => {
      if (_.get(edge, `node.frontmatter.category`)) {
        category = category.concat(edge.node.frontmatter.category)
      }
    })
    // Eliminate duplicate tags
    category = _.uniq(category)

    // Make tag pages
    category.forEach(cate => {
      const categoryPath = `/blog/category/${_.kebabCase(cate)}/`
      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/category.js`),
        context: {
          cate,
        },
      })
    })
    const blogsPerPage = 6
    const blognumPages = Math.ceil(blogs.length / blogsPerPage)
    Array.from({ length: blognumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          blognumPages,
          currentPage: i + 1,
        },
      })
    })
    // Blog End
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `listings`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
