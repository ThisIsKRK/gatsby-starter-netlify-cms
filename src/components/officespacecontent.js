import React from "react"
import PlugandPlay from "../img/listing/plug-and-play.png"
import OfficeForEverySize from "../img/listing/office-for-every-size.png"
import AllInclusive from "../img/listing/all-inclusive-price.png"
const OfficeSpacesContent = () => {
  return (
    <div className="row">
      <div className="col-md-4 text-center meeting-img">
        <img src={PlugandPlay} alt="Plug and play"></img>
        <h4>Plug and play</h4>
      </div>
      <div className="col-md-4 text-center meeting-img">
        <img src={OfficeForEverySize} alt="Office for every size"></img>
        <h4>Office for every size</h4>
      </div>
      <div className="col-md-4 text-center meeting-img">
        <img src={AllInclusive} alt="All inclusive pricing"></img>
        <h4>All inclusive pricing</h4>
      </div>
      <div className="col-md-12 text-center">
        <br></br>
        <p>
          Are you a freelancer or an independent professional? Do you own a
          startup or a small/medium business or part of a large enterprise? We
          know exactly know what you need when it comes to an office. We’ve done
          all the work for you! We’ve handpicked office spaces in your city -
          spaces that come with fast Wi-Fi, well-designed interiors and ample
          plug points. The best part is you say ‘NO’ to contracts and high
          rents, and can pay per day or month-on-month. Yes, you read right!
        </p>
      </div>
    </div>
  )
}
export default OfficeSpacesContent
