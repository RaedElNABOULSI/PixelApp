import React from "react";
import "./PackageCards.scss";

export default function PackageCards() {
  return (
    <>
      <div className="packageCards">
        <p>Trends .</p>
        <br />
        <div className="titleAndView">
          <p className="packageTitle">
            <strong>Check out some of the most popular packages</strong>
          </p>
          <a href="#">View All &gt;</a>
        </div>
        <div className="cardsContainer">
          <div className="card">
            <img
              className="cardImage"
              src={require("../../assets/images/river.jpg")}
              alt="cardImageOne"
            />
            <div className="cardText">
              <strong>
                <p>
                  Indulge in a weekend gateway
                  <br /> of Park Hyatt
                </p>
              </strong>
              <p>3 nights . Adults</p>
              <br />
              <p>Beirut.Amman.Cairo + 3 more</p>
              <br />
              <ul>
                <li className="park">Park hyatt Beirut 5 stars</li>
                <li className="suite">Suite Breakfast</li>
                <li className="car">Premium Car</li>
                <li className="spa">Spa</li>
              </ul>
              {/* start - card footer */}
              <div className="cardFooter">
                {/* start - image and name */}
                <div className="imgAndName">
                  {" "}
                  <img
                    className="cardFooterImage"
                    src={require("../../assets/images/card-img-rounded.jpg")}
                    alt="rounded-img"
                  />
                  {/* start - author name */}
                  <div>
                    {" "}
                    <span> Cathy</span>
                    <br />
                    <span style={{ color: "#3c3c3c" }} className="alTayer">
                      Al Tayer
                    </span>
                  </div>
                  {/* end - author name */}
                </div>
                {/* end - image and name */}
                <div>
                  {" "}
                  <p>From</p>
                  <strong>
                    <p>AED 365</p>
                  </strong>
                </div>
              </div>
              {/* end - card footer */}
            </div>
          </div>{" "}
          <div className="card">
            <img
              className="cardImage"
              src={require("../../assets/images/park.jpg")}
              alt="cardImageTwo"
            />
            <div className="cardText">
              <strong>
                <p>
                  A weekday gatewar of Fujariah
                  <br /> Rotana resort & spa
                </p>
              </strong>
              <p>3 nights . Adults</p>
              <br />
              <p>Beirut.Amman.Cairo + 3 more</p>
              <br />
              <ul>
                <li className="park">Park hyatt Beirut 5 stars</li>
                <li className="suite">Suite Breakfast</li>
                <li className="car">Premium Car</li>
                <li className="spa">Spa</li>
              </ul>
              <div className="cardFooter">
                <div className="imgAndName">
                  {" "}
                  <img
                    className="cardFooterImage"
                    src={require("../../assets/images/card-img-rounded.jpg")}
                    alt="rounded-img"
                  />
                  {/* start - author name */}
                  <div>
                    {" "}
                    <span> Cathy</span>
                    <br />
                    <span style={{ color: "#3c3c3c" }}>Al Tayer</span>
                  </div>
                  {/* end - author name */}
                </div>{" "}
                <div>
                  {" "}
                  <p>From</p>
                  <strong>
                    <p>AED 365</p>
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              className="cardImage"
              src={require("../../assets/images/desert.jpg")}
              alt="cardImageThree"
            />
            <div className="cardText">
              <strong>
                <p>
                  An unforgettable day at Ajman <br />
                  hotel
                </p>
              </strong>
              <p>3 nights . Adults</p>
              <br />
              <p>Beirut.Amman.Cairo + 3 more</p>
              <br />
              <ul>
                <li className="park">Park hyatt Beirut 5 stars</li>
                <li className="suite">Suite Breakfast</li>
                <li className="car">Premium Car</li>
                <li className="spa">Spa</li>
              </ul>
              <div className="cardFooter">
                <div className="imgAndName">
                  {" "}
                  <img
                    className="cardFooterImage"
                    src={require("../../assets/images/card-img-rounded.jpg")}
                    alt="rounded-img"
                  />
                  {/* start - author name */}
                  <div>
                    {" "}
                    <span> Cathy</span>
                    <br />
                    <span style={{ color: "#3c3c3c" }}>Al Tayer</span>
                  </div>
                  {/* end - author name */}
                </div>
                <div>
                  {" "}
                  <p>From</p>
                  <strong>
                    <p>AED 365</p>
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="viewLinkResponsive">
            View All Stays &gt;
          </a>
        </div>
      </div>
    </>
  );
}
