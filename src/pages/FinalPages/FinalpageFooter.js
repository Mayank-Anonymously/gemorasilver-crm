import React from "react";
import logo from "../../assets/Image/logo.png";
import cardIn from "../../assets/Image/cardIn-logos.png";
import godaddy from "../../assets/Image/godaddy.gif";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 text-center text-gray-100 pt-4 pb-20 pl-60 pr-40 footer">
        <span className="text-2xl font-bold">Why Travomint</span>
        <p className="text-sm font-medium">
          Travomint.com is an independent travel portal with no third party
          association. By using www.travomint.com, you agree that Travomint is
          not accountable for any loss - direct or indirect, arising of offers,
          materials or links to other sites found on this website. In case of
          queries, reach us directly at our Toll Free{" "}
        </p>
        <br />
        <p className=" ">
          <b>Number-</b> +91-8010000200 or, simply <b>Email</b> at
          cs@travomint.com
        </p>
        <hr />
        <div className="grid grid-cols-3">
          <div>
            <span className="text-sm">
              <img src={logo} className="w-20 inline-block relative -top-1" />{" "}
              Copyright © 2021. All rights reseved.
            </span>
          </div>
          <div>
            <img src={cardIn} className="w-1/2 inline-block" /> &nbsp;
            <img src={godaddy} className="w-1/3 inline-block" />
            <br />
            <span className="text-sm">
              We assure safe and secure transactions through powerful Godaddy
              Secure Seal
            </span>
          </div>
          <div className="py-4">
            <span className="text-sm"> (DBA of SNVA Traveltech Pvt Ltd)</span>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 text-left">
          <div className="pt-2">
            <span className="text-2xl font-bold">
              WE ARE GLAD TO ASSIST YOU:
            </span>
          </div>
          <div className="col-span-2 text-left">
            <span className="text-sm  ">
              During the ongoing pandemic, we recommend you to stay updated with
              airlines and hoteliers guidelines regarding rescheduling and
              cancellations.
            </span>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 text-left">
          <div>
            <span className="text-xl font-bold">Quick Links</span>
            <br />
            <br />
            <span className="text-sm">Delhi Chennai Flights</span>
            <br />
            <span className="text-sm">Delhi Chennai Flights</span>
            <br />
            <span className="text-sm">Delhi Chennai Flights</span>
            <br />
            <span className="text-sm">Delhi Chennai Flights</span>
            <br />
          </div>
          <div className="col-span-2 text-left">
            <span className="text-xl font-bold">Important Links</span>
            <br />
            <br />
            <span className="text-sm">Cheap Flights,</span>
            <br />
            <span className="text-sm">Flight Status</span>
            <br />
            <span className="text-sm">Delhi Chennai Flights</span>
            <br />
            <span className="text-sm">Delhi Chennai Flights</span>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
