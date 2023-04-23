import React, { useState } from "react";
import Footer from "../FinalPages/FinalpageFooter";
// import Header from "../FinalPages/FinalPageheader";
// import TopNav from "../FinalPages/FinalpageFooter";
import First from "../FinalPages/First";
import Second from "../FinalPages/Second";
// import Third from "../FinalPages/Third";
import Collapse from "react-bootstrap/Collapse";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { styled } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";

const TravellersInfo = () => {
  const [value, setValue] = useState(false);

  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: theme.customShadows.primary.z16,
  }));

  return (
    <>
      {/* <Header />
      <TopNav /> */}
      <div className="grid grid-cols-9 px-40 gap-4 py-10">
        <div className="col-span-6">
          <First />
          <Second setValue={setValue} />
          {/* <Third /> */}
        </div>
        <div className="col-span-3 px-6">
          <div className="up text-gray-800 sticky top-10   border-gray-300 py-4">
            <h3 className="font-bold text-lg  px-4">
              <i class="fas fa-credit-card text-blue-500"></i> &nbsp; PRICE
              DETAILS
            </h3>

            {/* 1st */}
            <RootStyle>
              <div className="grid grid-cols-4 px-3 p-10 pt-2">
                <div className="col-span-3">
                  <p className="text-black font-bold px-2 text-sm">
                    1 Traveler(s) : Adult{" "}
                  </p>
                  <p className="text-sm bg-gray-100 pb-2 mb-0 px-2">
                    {" "}
                    Flight Charges per adult{" "}
                  </p>
                  <p className="text-sm bg-gray-100 pb-0 mb-2 mt-0 px-2 ">
                    {" "}
                    Taxes & Fees per adult{" "}
                  </p>
                </div>
                <div className="">
                  <p className="text-black font-bold text-sm">
                    {" "}
                    <i class="fas fa-rupee-sign fa-sm"></i> 5175
                  </p>
                  <p className="text-sm bg-gray-100 pb-2 mb-0">
                    {" "}
                    <i class="fas fa-rupee-sign fa-sm"></i> 849
                  </p>
                  <p className="text-sm bg-gray-100 pb-0 mb-2 mt-0 ">
                    {" "}
                    <i class="fas fa-rupee-sign fa-sm"></i> 779
                  </p>
                </div>
              </div>

              <Collapse in={value}>
                <div className="grid grid-cols-4  px-6 text-sm font-bold text-red-500">
                  <div className="col-span-3">Medical Charge</div>
                  <div className="px-1">
                    <p>Rs.20</p>
                  </div>
                </div>
              </Collapse>
              {/* <hr className="mt-0 mb-0" /> */}
              {/* 2nd */}
              <div className="grid grid-cols-5 bg-gray-100 pt-0 mb-1 down border-2  px-4">
                <div className="col-span-3 mb-0">
                  <p className="text-blue-500 mb-0 font-bold text-xl">
                    Total Price :{" "}
                  </p>
                </div>
                <div className="col-span-2 text-right mb-0">
                  <p className="text-blue-500 mb-0 font-bold text-xl">
                    {" "}
                    <i class="fas fa-rupee-sign"></i> 7,434
                  </p>
                </div>
              </div>
              {/* <hr className="mt-0 mb-0" /> */}
              <div className="grid grid-cols-1 p-10 px-4 pt-2">
                <span className="text-xs text-gray-700">
                  NOTE: All Fares displayed are quoted in INR and inclusive of
                  base fare, taxes and all fees Additional baggage fees may
                  apply as per the airline policies..
                </span>
              </div>

              {/* <div className="grid grid-cols-1 ">
                <div className=" pb-2 grid grid-cols-1 mt-3  up rounded-2xl ">
                  <div className="grid grid-cols-1 text-left">
                    <Disclosure defaultOpen="true">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between down border-2 w-full px-4 py-1 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                            <span className="text-blue-500 font-bold text-xl">
                              Coupon Code
                            </span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-7 h-7 text-gray-900`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-2 pt-1  mt-1   rounded-2xl  pb-2 text-sm ">
                            <div className="grid grid-cols-8 pl-3 pr-4">
                              <div className="col-span-6">
                                <input
                                  type="text"
                                  className="w-full mt-1 px-2 text-sm py-2  text-gray-900"
                                  placeholder="Coupon Code"
                                />
                              </div>
                              <div className="col-span-2">
                                <button className="btn btn-primary mt-1">
                                  Apply
                                </button>
                              </div>
                            </div>

                            <div className="grid grid-cols-8 px-4 mt-2 gap-4">
                              <div className="col-span-7">
                                <input type="radio" className="mt-2" />
                                <span className="text-sm pl-1 text-blue-600 font-bold font-sans">
                                  {" "}
                                  TRAVOHAPPY
                                </span>{" "}
                                <p className="text-xs pl-4">
                                  FLAT{" "}
                                  <span className="text-red-600 font-bold ">
                                    {" "}
                                    100 OFF
                                  </span>{" "}
                                  ON DOMESTIC FLIGHT.
                                </p>
                              </div>
                              <div>
                                <span className="float-right font-sans">
                                  <i class="fas fa-tags"></i>
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-8 px-4 gap-4">
                              <div className="col-span-7">
                                <input type="radio" className="mt-2" />
                                <span className="text-sm pl-1 text-blue-600 font-bold font-sans">
                                  {" "}
                                  TRAVOHAPPY
                                </span>{" "}
                                <p className="text-xs pl-4">
                                  FLAT{" "}
                                  <span className="text-red-600 font-bold ">
                                    {" "}
                                    100 OFF
                                  </span>{" "}
                                  ON DOMESTIC FLIGHT.
                                </p>
                              </div>
                              <div>
                                <span className="float-right font-sans">
                                  <i class="fas fa-tags"></i>
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-8 px-4 gap-4">
                              <div className="col-span-7">
                                <input type="radio" className="mt-2" />
                                <span className="text-sm pl-1 text-blue-600 font-bold font-sans">
                                  {" "}
                                  TRAVOHAPPY
                                </span>{" "}
                                <p className="text-xs pl-4">
                                  FLAT{" "}
                                  <span className="text-red-600 font-bold ">
                                    {" "}
                                    100 OFF
                                  </span>{" "}
                                  ON DOMESTIC FLIGHT.
                                </p>
                              </div>
                              <div>
                                <span className="float-right font-sans">
                                  <i class="fas fa-tags"></i>
                                </span>
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>

              <div className="bg-gray-400 rounded-b-xl   text-white  py-2 text-center">
                <h4>Log-in for exclusive offers !</h4>
                <button className="btn btn-shivam border-2 border-white">
                  Login Now
                </button>
              </div> */}
            </RootStyle>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default TravellersInfo;
