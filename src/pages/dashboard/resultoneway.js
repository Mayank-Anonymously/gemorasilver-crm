import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import gif from "../../assets/Image/plane3.gif";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import morning from "../../assets/Image/morning.svg";
import noon from "../../assets/Image/noon.svg";
import night from "../../assets/Image/night.svg";
import evening from "../../assets/Image/evening.svg";
import SG from "../../assets/Image/SG.png";
import { styled } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Box, Grid } from "@material-ui/core";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import plane from "../../assets/Image/plane6.gif";
import AirPortData from "../../Api/SampleData";
import planne from "../../LottieView/plane.json";
import GrovvyWalk from "../../LottieView/govvy.json";
import { useSelector } from "react-redux";
import Oneway from "../../utils/DummyFlightResult/OneWay.json";
import { SelectedData } from "./Action";
import { makeStyles } from "@material-ui/styles";

import roundway from "src/utils/DummyFlightResult/RoundTrip";
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  backgroundColor: theme.palette.error.lighter,
  [theme.breakpoints.up("md")]: {
    height: "100%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #3b82f6 30%, #1e3a8a 100%)",
    border: 0,
    borderRadius: 10,
    width: "8rem",
    height: 30,
    padding: "0 10px",
    color: "white",
  },
});
const SearchEngine = () => {
  // let uri;

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const classes = useStyles();

  function openModal(e) {
    setShow1(true);
    setTrans(e);
  }

  const [modal, setmodal] = useState(0);
  const [trans, setTrans] = useState(0);

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    const detail = e;
    setmodal(detail);
  };

  // const [Result, setResult] = useState([]);
  const [Load, setLoad] = useState(false);

  const data = useSelector(SelectedData);

  const options = {
    animationData: GrovvyWalk,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  // API
  // // call Api
  const [result, setResult] = useState([]);
  const [isloading, setIsloading] = useState(true);

  /* Converting Time  */
  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  async function CallApi() {
    // setIsloading(true);
    const fetchingApi = await fetch("http://10.10.8.53:7500/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        userid: 2,
        triptype: 1,
        flyingfrom: data.departure,
        flyingto: data.arrival,
        RTF: false,
        onewaydate: data.singleDate,
        adult: 2,
        child: 1,
        infant: 1,
        classes: "bussiness",
      }),
      redirect: "follow",
    });

    const ApiResp = await fetchingApi.json();
    if (ApiResp) {
      setResult(ApiResp);
      setIsloading(false);
    }
  }
  useEffect(() => CallApi(), []);

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  // if (isloading) {
  //   return <h3>Wait Searching Results</h3>;
  // }

  return (
    <>
      {isloading ? (
        <div>{View}</div>
      ) : (
        <>
          <div>
            <div className="col-span-4">
              <div className="grid grid-cols-8 mb-3 border-2 border-white shadow-md rounded-xl ups p-2">
                {result.data.airline.map((items, i) => (
                  <div className="text-center  border-r-2 border-white shadow-md bg-white p-2 rounded-xl mr-1">
                    <div className=" justify-center inline-flex flex-wrap">
                      <img
                        src={`https://www.travomint.com/resources/images/airline-logo/${items.code}.png`}
                        className="w-10 rounded-3xl"
                      />
                      <br />
                    </div>
                    <p className="text-black font-bold text-sm mb-0">
                      {" "}
                      {items.name}
                    </p>
                    <div className="text-center amount text-white mt-0 font-bold"></div>
                  </div>
                ))}
              </div>
              {isloading ? (
                <img src={gif} className="w-full" />
              ) : (
                <>
                  {result.data.flightResult.map((items, i) => (
                    <>
                      <div className="grid grid-cols-6 px-10 py-3 mt-3 shadow-md rounded-2xl">
                        <div>
                          <div className="grid grid-cols-3">
                            <div className="">
                              <img
                                src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                                className="w-10/12 down rounded-xl inline float-right"
                              />
                            </div>

                            <div className="pl-4 col-span-2">
                              <span className="text-sm text-black font-sans font-bold">
                                {result.data.airline
                                  .filter(
                                    (airline) => airline.code == items.airline
                                  )
                                  .map((airline, a) => (
                                    <span>{airline.name}</span>
                                  ))}
                              </span>
                              <br />
                              <span className="text-xs text-black font-sans font-bold">
                                {" "}
                                I5-764
                                {items.airline}
                              </span>
                            </div>
                          </div>

                          <button
                            className="down border-gray-500 border-2 w-full font-bold pt-1 pb-1 pl-3 text-sm pr-3 text-gray-600 mt-3 rounded-lg"
                            onClick={(e) => handleShow(items.resultID)}
                          >
                            <i class="far fa-hand-point-right"></i> Flight
                            Details
                          </button>
                        </div>
                        <div className="col-span-4 px-14">
                          <div className="grid grid-cols-4">
                            <div className="text-center py-3">
                              <span className="text-lg text-black font-bold">
                                {items.outBound ? (
                                  <span>
                                    {items.outBound[0].depDate.slice(11, 13) <
                                    12 ? (
                                      <span>
                                        {items.outBound[0].depDate.slice(
                                          11,
                                          16
                                        )}{" "}
                                        AM
                                      </span>
                                    ) : (
                                      <span>
                                        {items.outBound[0].depDate.slice(
                                          11,
                                          13
                                        ) - 12}
                                        {items.outBound[0].depDate.slice(
                                          13,
                                          16
                                        )}{" "}
                                        PM
                                      </span>
                                    )}
                                  </span>
                                ) : (
                                  <span>
                                    {items.inBound[0].depDate.slice(11, 13) <
                                    12 ? (
                                      <span>
                                        {items.inBound[0].depDate.slice(11, 16)}{" "}
                                        AM
                                      </span>
                                    ) : (
                                      <span>
                                        {items.inBound[0].depDate.slice(
                                          11,
                                          13
                                        ) - 12}
                                        {items.inBound[0].depDate.slice(13, 16)}{" "}
                                        PM
                                      </span>
                                    )}
                                  </span>
                                )}
                              </span>
                              <br />
                              <Typography
                                variant="h6"
                                class="text-lg text-black text-sm"
                              >
                                {data.departure}
                              </Typography>
                            </div>
                            <div className="col-span-2">
                              <div className="grid grid-cols-9 mt-3 ">
                                <div className="col-span-3 pl-2">
                                  <hr className="bg-black opacity-100" />
                                </div>
                                <div className="col-span-3 text-center relative -top-2">
                                  <span className="text-xs text-black font-sans">
                                    <span>
                                      <ConvertMinsToTime
                                        data={
                                          items.outBound[0].eft +
                                          items.outBound[0].layOverTime
                                        }
                                      />
                                    </span>
                                  </span>
                                  <br />
                                  {/* <span className="text-xs text-black font-sans">
                                    <ConvertMinsToTime
                                      data={items.inBound.eft}
                                    />
                                  </span> */}
                                </div>
                                <div className="col-span-3 pr-2">
                                  <hr className="bg-black opacity-100" />
                                </div>
                              </div>
                            </div>
                            <div className="text-center py-3">
                              <span className="text-lg text-black font-bold">
                                {items.outBound ? (
                                  <span>
                                    {" "}
                                    {items.outBound.length == 2 ? (
                                      <span>
                                        {items.outBound[1].reachDate.slice(
                                          11,
                                          13
                                        ) < 12 ? (
                                          <span>
                                            {items.outBound[1].reachDate.slice(
                                              11,
                                              16
                                            )}{" "}
                                            AM{" "}
                                          </span>
                                        ) : (
                                          <span>
                                            {items.outBound[1].reachDate.slice(
                                              11,
                                              13
                                            ) - 12}
                                            {items.outBound[0].depDate.slice(
                                              13,
                                              16
                                            )}{" "}
                                            PM{" "}
                                          </span>
                                        )}
                                      </span>
                                    ) : (
                                      <span>
                                        {" "}
                                        {items.outBound[0].reachDate.slice(
                                          11,
                                          13
                                        ) < 13 ? (
                                          <span>
                                            {items.outBound[0].reachDate.slice(
                                              11,
                                              16
                                            )}{" "}
                                            AM{" "}
                                          </span>
                                        ) : (
                                          <span>
                                            {items.outBound[0].reachDate.slice(
                                              11,
                                              13
                                            ) - 10}
                                            {items.outBound[0].depDate.slice(
                                              13,
                                              16
                                            )}{" "}
                                            PM{" "}
                                          </span>
                                        )}{" "}
                                      </span>
                                    )}
                                  </span>
                                ) : (
                                  <span>
                                    {items.inBound.length == 2 ? (
                                      <span>
                                        {" "}
                                        {items.inBound[1].reachDate.slice(
                                          11,
                                          13
                                        ) < 12 ? (
                                          <span>
                                            {items.inBound[1].reachDate.slice(
                                              11,
                                              16
                                            )}{" "}
                                            AM{" "}
                                          </span>
                                        ) : (
                                          <span>
                                            {items.inBound[1].reachDate.slice(
                                              11,
                                              13
                                            ) - 12}
                                            {items.inBound[0].depDate.slice(
                                              13,
                                              16
                                            )}{" "}
                                            PM{" "}
                                          </span>
                                        )}
                                      </span>
                                    ) : (
                                      <span>
                                        {" "}
                                        {items.inBound[0].reachDate.slice(
                                          11,
                                          13
                                        ) < 13 ? (
                                          <span>
                                            {items.inBound[0].reachDate.slice(
                                              11,
                                              16
                                            )}{" "}
                                            AM{" "}
                                          </span>
                                        ) : (
                                          <span>
                                            {items.inBound[0].reachDate.slice(
                                              11,
                                              13
                                            ) - 10}
                                            {items.inBound[0].depDate.slice(
                                              13,
                                              16
                                            )}{" "}
                                            PM{" "}
                                          </span>
                                        )}
                                      </span>
                                    )}
                                  </span>
                                )}
                              </span>
                              <br />
                              <span className="text-lg text-black font-bold">
                                {data.arrival}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="grid grid-cols-4">
                            <div className="text-right px-2 pt-0 mb-4">
                              <span className=" text-lg font-bold text-black font-sans">
                                From
                              </span>
                            </div>

                            <div className="pl-4 col-span-3">
                              <span className="text-lg font-bold text-black font-sans">
                                <i class="fas fa-rupee-sign fa-sm "></i>{" "}
                                {items.fare.grandTotal}
                              </span>
                              <br />
                            </div>
                          </div>
                          <Link to="/dashboard/Flight/travellersinfo">
                            <Button
                              // onClick={(e) => openModal(items.resultID)}
                              variant="contained"
                              className={classes.root}
                            >
                              Book Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
              {result.data.airline
                .filter((items) => items.resultID == modal)
                .map((items, i) => (
                  <>
                    <Modal className="mt-10" show={show} onHide={handleClose}>
                      <Modal.Header className="foot text-white" closeButton>
                        <Modal.Title>Flight Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p className="px-16">
                          The baggage information is just for reference. Please
                          Check with airline before check-in. For more
                          information, visit the airline's official website.
                        </p>
                      </Modal.Body>
                      {items.outBound ? (
                        <div>
                          {" "}
                          <div className="grid grid-cols-3 px-20">
                            <div>
                              <p className="text-black font-bold text-xl mb-0">
                                {items.outBound[0].airlineName},{" "}
                                {items.outBound[0].airline}{" "}
                                {items.outBound[0].flightNo}
                              </p>
                              <span>
                                Operated by {items.outBound[0].airlineName}{" "}
                              </span>
                            </div>
                            <div className="text-center">
                              <p className="text-black tex t-xl font-bold mb-0">
                                Check-In Baggage
                              </p>
                              <span> NA Per Person</span>
                            </div>
                            <div className="text-right">
                              <p className="text-black text-xl font-bold mb-0">
                                Cabin Baggage
                              </p>
                              <span>NA per person</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {" "}
                          <div className="grid grid-cols-3 px-20">
                            <div>
                              <p className="text-black font-bold text-xl mb-0">
                                {items.inBound[0].airlineName},{" "}
                                {items.inBound[0].airline}{" "}
                                {items.inBound[0].flightNo}
                              </p>
                              <span>Operated by Go Air</span>
                            </div>
                            <div className="text-center">
                              <p className="text-black text-xl font-bold mb-0">
                                Check-In Baggage
                              </p>
                              <span> NA Per Person</span>
                            </div>
                            <div className="text-right">
                              <p className="text-black text-xl font-bold mb-0">
                                Cabin Baggage
                              </p>
                              <span>NA per person</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {items.outBound ? (
                        <div>
                          {items.outBound.length == 2 ? (
                            <div>
                              <div className="grid grid-cols-3 px-20 mt-10">
                                <div className="mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.outBound[0].fromAirport
                                  ).map((item, i) => (
                                    <>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode})
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.outBound[0].depDate}</span>
                                    </>
                                  ))}
                                </div>
                                <div>
                                  <img src={plane} />
                                </div>
                                <div className="text-right mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.outBound[0].toAirport
                                  ).map((item, i) => (
                                    <>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode})
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.outBound[0].reachDate}</span>
                                    </>
                                  ))}
                                </div>
                              </div>

                              {/* second */}
                              <div className="grid grid-cols-3 px-20 mt-10">
                                <div className="mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.outBound[1].fromAirport
                                  ).map((item, i) => (
                                    <>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode})
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.outBound[1].depDate}</span>
                                    </>
                                  ))}
                                </div>
                                <div>
                                  <img src={plane} />
                                </div>
                                <div className="text-right mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.outBound[1].toAirport
                                  ).map((item, i) => (
                                    <>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode})
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.outBound[1].reachDate}</span>
                                    </>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="grid grid-cols-3 px-20 mt-10">
                                <div className="mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.outBound[0].fromAirport
                                  ).map((item, i) => (
                                    <>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode})
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.outBound[0].depDate}</span>
                                    </>
                                  ))}
                                </div>
                                <div>
                                  <img src={plane} />
                                </div>
                                <div className="text-right mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.outBound[0].toAirport
                                  ).map((item, i) => (
                                    <>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode})
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.outBound[0].reachDate}</span>
                                    </>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          {items.inBound.length == 2 ? (
                            <div>
                              <div className="grid grid-cols-3 px-20 mt-10">
                                <div className="mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.inBound[0].fromAirport
                                  ).map((item, i) => (
                                    <div>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode}){" "}
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.inBound[0].depDate}</span>
                                    </div>
                                  ))}
                                </div>
                                <div>
                                  <img src={plane} />
                                </div>
                                <div className="text-right mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.inBound[0].toAirport
                                  ).map((item, i) => (
                                    <div>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode}){" "}
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.inBound[0].reachDate}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* second */}
                              <div className="grid grid-cols-3 px-20 mt-10">
                                <div className="mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.inBound[1].fromAirport
                                  ).map((item, i) => (
                                    <div>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode}){" "}
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.inBound[1].depDate}</span>
                                    </div>
                                  ))}
                                </div>
                                <div>
                                  <img src={plane} />
                                </div>
                                <div className="text-right mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.inBound[1].toAirport
                                  ).map((item, i) => (
                                    <div>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode}){" "}
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.inBound[1].reachDate}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>
                              {" "}
                              <div className="grid grid-cols-3 px-20 mt-10">
                                <div className="mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.inBound[0].fromAirport
                                  ).map((item, i) => (
                                    <div>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode}){" "}
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.inBound[0].depDate}</span>
                                    </div>
                                  ))}
                                </div>
                                <div>
                                  <img src={plane} />
                                </div>
                                <div className="text-right mt-10">
                                  {AirPortData.filter(
                                    (item) =>
                                      item.airportCode ==
                                      items.inBound[0].toAirport
                                  ).map((item, i) => (
                                    <div>
                                      <p className="text-black font-bold text-xl mb-0">
                                        {item.cityName} ({item.airportCode}){" "}
                                      </p>
                                      <span>{item.airportName}</span>
                                      <br />
                                      <span>{items.inBound[0].reachDate}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      <Modal.Footer>
                        <Button className="foot" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ))}
              <Modal className="mt-10" show={show1} onHide={handleClose1}>
                <Modal.Header className="foot text-white" closeButton>
                  <Modal.Title>Flight Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {result.data.airline
                    .filter((items) => items.resultID == trans)
                    .map((items, i) => (
                      <>
                        {items.outBound ? (
                          <div>
                            {items.outBound.length == 2 ? (
                              <div>
                                <div className=" grid grid-cols-1 mx-2 ">
                                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                                    <div>
                                      <div className="grid grid-cols-3">
                                        <div className="">
                                          <img
                                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                                            className="w-10/12 down rounded-xl inline float-right"
                                          />
                                        </div>

                                        <div className="pl-4 col-span-2">
                                          <span className="text-sm text-black font-sans font-bold">
                                            {result.data.airline
                                              .filter(
                                                (item) =>
                                                  item.code == items.airline
                                              )
                                              .map((item, i) => (
                                                <span>{item.name} </span>
                                              ))}
                                          </span>
                                          <br />
                                          <span className="text-xs text-black font-sans font-bold">
                                            {" "}
                                            <span>
                                              {items.outBound[0].airline}-
                                              {items.outBound[0].flightNo}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-5 px-14">
                                      <div className="grid grid-cols-4">
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].depDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].fromAirport}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          <div className="grid grid-cols-10 mt-3 ">
                                            <div className="col-span-4 pl-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                            <div className="col-span-2 text-center relative -top-2">
                                              <span className="text-xs text-black font-sans">
                                                2h
                                              </span>
                                              <br />
                                              <span className="text-xs text-black font-sans">
                                                Non-Stop
                                              </span>
                                            </div>
                                            <div className="col-span-4 pr-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].reachDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].toAirport}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      {/* <div className="grid grid-cols-4">
                      <div className="text-right px-2 pt-0 mb-4">
                        <span className=" text-lg font-bold text-black font-sans">
                          From
                        </span>
                      </div>

                      <div className="pl-4 col-span-3">
                        <span className="text-lg font-bold text-black font-sans">
                          <i class="fas fa-rupee-sign fa-sm "></i>{" "}
                        {items.fare.grandTotal}
                        </span>
                        <br />
                      </div>
                    </div> */}
                                    </div>
                                  </div>
                                </div>
                                {/* second */}
                                <div className=" grid grid-cols-1 mx-2 ">
                                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                                    <div>
                                      <div className="grid grid-cols-3">
                                        <div className="">
                                          <img
                                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                                            className="w-10/12 down rounded-xl inline float-right"
                                          />
                                        </div>

                                        <div className="pl-4 col-span-2">
                                          <span className="text-sm text-black font-sans font-bold">
                                            {result.data.airline
                                              .filter(
                                                (item) =>
                                                  item.code == items.airline
                                              )
                                              .map((item, i) => (
                                                <span>{item.name} </span>
                                              ))}
                                          </span>
                                          <br />
                                          <span className="text-xs text-black font-sans font-bold">
                                            {" "}
                                            <span>
                                              {items.outBound[1].airline}-
                                              {items.outBound[1].flightNo}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-5 px-14">
                                      <div className="grid grid-cols-4">
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[1].depDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[1].fromAirport}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          <div className="grid grid-cols-10 mt-3 ">
                                            <div className="col-span-4 pl-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                            <div className="col-span-2 text-center relative -top-2">
                                              <span className="text-xs text-black font-sans">
                                                2h
                                              </span>
                                              <br />
                                              <span className="text-xs text-black font-sans">
                                                Non-Stop
                                              </span>
                                            </div>
                                            <div className="col-span-4 pr-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[1].reachDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[1].toAirport}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      {/* <div className="grid grid-cols-4">
                      <div className="text-right px-2 pt-0 mb-4">
                        <span className=" text-lg font-bold text-black font-sans">
                          From
                        </span>
                      </div>

                      <div className="pl-4 col-span-3">
                        <span className="text-lg font-bold text-black font-sans">
                          <i class="fas fa-rupee-sign fa-sm "></i>{" "}
                        {items.fare.grandTotal}
                        </span>
                        <br />
                      </div>
                    </div> */}
                                    </div>
                                  </div>
                                </div>

                                {/* ??????? */}
                              </div>
                            ) : (
                              <div>
                                <div className=" grid grid-cols-1 mx-2 ">
                                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                                    <div>
                                      <div className="grid grid-cols-3">
                                        <div className="">
                                          <img
                                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                                            className="w-10/12 down rounded-xl inline float-right"
                                          />
                                        </div>

                                        <div className="pl-4 col-span-2">
                                          <span className="text-sm text-black font-sans font-bold">
                                            {result.data.airline
                                              .filter(
                                                (item) =>
                                                  item.code == items.airline
                                              )
                                              .map((item, i) => (
                                                <span>{item.name} </span>
                                              ))}
                                          </span>
                                          <br />
                                          <span className="text-xs text-black font-sans font-bold">
                                            {" "}
                                            <span>
                                              {items.outBound[0].airline}-
                                              {items.outBound[0].flightNo}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-5 px-14">
                                      <div className="grid grid-cols-4">
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].depDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].fromAirport}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          <div className="grid grid-cols-10 mt-3 ">
                                            <div className="col-span-4 pl-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                            <div className="col-span-2 text-center relative -top-2">
                                              <span className="text-xs text-black font-sans">
                                                2h
                                              </span>
                                              <br />
                                              <span className="text-xs text-black font-sans">
                                                Non-Stop
                                              </span>
                                            </div>
                                            <div className="col-span-4 pr-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].reachDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.outBound[0].toAirport}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      {/* <div className="grid grid-cols-4">
                      <div className="text-right px-2 pt-0 mb-4">
                        <span className=" text-lg font-bold text-black font-sans">
                          From
                        </span>
                      </div>

                      <div className="pl-4 col-span-3">
                        <span className="text-lg font-bold text-black font-sans">
                          <i class="fas fa-rupee-sign fa-sm "></i>{" "}
                        {items.fare.grandTotal}
                        </span>
                        <br />
                      </div>
                    </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div>
                            {items.inBound.length == 2 ? (
                              <div>
                                {/* inBound */}
                                <div className=" grid grid-cols-1 mx-2 ">
                                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                                    <div>
                                      <div className="grid grid-cols-3">
                                        <div className="">
                                          <img
                                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                                            className="w-10/12 down rounded-xl inline float-right"
                                          />
                                        </div>

                                        <div className="pl-4 col-span-2">
                                          <span className="text-sm text-black font-sans font-bold">
                                            {result.data.airline
                                              .filter(
                                                (item) =>
                                                  item.code == items.airline
                                              )
                                              .map((item, i) => (
                                                <span>{item.name} </span>
                                              ))}
                                          </span>
                                          <br />
                                          <span className="text-xs text-black font-sans font-bold">
                                            {" "}
                                            <span>
                                              {items.inBound[0].airline}-
                                              {items.inBound[0].flightNo}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-5 px-14">
                                      <div className="grid grid-cols-4">
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].depDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].fromAirport}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          <div className="grid grid-cols-10 mt-3 ">
                                            <div className="col-span-4 pl-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                            <div className="col-span-2 text-center relative -top-2">
                                              <span className="text-xs text-black font-sans">
                                                2h
                                              </span>
                                              <br />
                                              <span className="text-xs text-black font-sans">
                                                Non-Stop
                                              </span>
                                            </div>
                                            <div className="col-span-4 pr-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].reachDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].toAirport}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      {/* <div className="grid grid-cols-4">
                      <div className="text-right px-2 pt-0 mb-4">
                        <span className=" text-lg font-bold text-black font-sans">
                          From
                        </span>
                      </div>

                      <div className="pl-4 col-span-3">
                        <span className="text-lg font-bold text-black font-sans">
                          <i class="fas fa-rupee-sign fa-sm "></i>{" "}
                        {items.fare.grandTotal}
                        </span>
                        <br />
                      </div>
                    </div> */}
                                    </div>
                                  </div>
                                </div>

                                {/* second */}
                                {/* inBound */}
                                <div className=" grid grid-cols-1 mx-2 ">
                                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                                    <div>
                                      <div className="grid grid-cols-3">
                                        <div className="">
                                          <img
                                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                                            className="w-10/12 down rounded-xl inline float-right"
                                          />
                                        </div>

                                        <div className="pl-4 col-span-2">
                                          <span className="text-sm text-black font-sans font-bold">
                                            {result.data.airline
                                              .filter(
                                                (item) =>
                                                  item.code == items.airline
                                              )
                                              .map((item, i) => (
                                                <span>{item.name} </span>
                                              ))}
                                          </span>
                                          <br />
                                          <span className="text-xs text-black font-sans font-bold">
                                            {" "}
                                            <span>
                                              {items.inBound[1].airline}-
                                              {items.inBound[1].flightNo}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-5 px-14">
                                      <div className="grid grid-cols-4">
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[1].depDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[1].fromAirport}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          <div className="grid grid-cols-10 mt-3 ">
                                            <div className="col-span-4 pl-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                            <div className="col-span-2 text-center relative -top-2">
                                              <span className="text-xs text-black font-sans">
                                                2h
                                              </span>
                                              <br />
                                              <span className="text-xs text-black font-sans">
                                                Non-Stop
                                              </span>
                                            </div>
                                            <div className="col-span-4 pr-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[1].reachDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[1].toAirport}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      {/* <div className="grid grid-cols-4">
                      <div className="text-right px-2 pt-0 mb-4">
                        <span className=" text-lg font-bold text-black font-sans">
                          From
                        </span>
                      </div>

                      <div className="pl-4 col-span-3">
                        <span className="text-lg font-bold text-black font-sans">
                          <i class="fas fa-rupee-sign fa-sm "></i>{" "}
                        {items.fare.grandTotal}
                        </span>
                        <br />
                      </div>
                    </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div>
                                {/* inBound */}
                                <div className=" grid grid-cols-1 mx-2 ">
                                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                                    <div>
                                      <div className="grid grid-cols-3">
                                        <div className="">
                                          <img
                                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                                            className="w-10/12 down rounded-xl inline float-right"
                                          />
                                        </div>

                                        <div className="pl-4 col-span-2">
                                          <span className="text-sm text-black font-sans font-bold">
                                            {result.data.airline
                                              .filter(
                                                (item) =>
                                                  item.code == items.airline
                                              )
                                              .map((item, i) => (
                                                <span>{item.name} </span>
                                              ))}
                                          </span>
                                          <br />
                                          <span className="text-xs text-black font-sans font-bold">
                                            {" "}
                                            <span>
                                              {items.inBound[0].airline}-
                                              {items.inBound[0].flightNo}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-5 px-14">
                                      <div className="grid grid-cols-4">
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].depDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].fromAirport}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          <div className="grid grid-cols-10 mt-3 ">
                                            <div className="col-span-4 pl-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                            <div className="col-span-2 text-center relative -top-2">
                                              <span className="text-xs text-black font-sans">
                                                2h
                                              </span>
                                              <br />
                                              <span className="text-xs text-black font-sans">
                                                Non-Stop
                                              </span>
                                            </div>
                                            <div className="col-span-4 pr-2">
                                              <img
                                                src={plane}
                                                className="-top-5 relative"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center py-3">
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].reachDate}{" "}
                                          </span>
                                          <span className="text-lg text-black font-bold">
                                            {items.inBound[0].toAirport}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      {/* <div className="grid grid-cols-4">
                      <div className="text-right px-2 pt-0 mb-4">
                        <span className=" text-lg font-bold text-black font-sans">
                          From
                        </span>
                      </div>

                      <div className="pl-4 col-span-3">
                        <span className="text-lg font-bold text-black font-sans">
                          <i class="fas fa-rupee-sign fa-sm "></i>{" "}
                        {items.fare.grandTotal}
                        </span>
                        <br />
                      </div>
                    </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="grid grid-cols-3 up rounded-2xl my-3 mx-2 ">
                          <div className="grid grid-cols-5 gap-2 py-2">
                            <div className="pt-2">
                              <i class="fas fa-briefcase fa-lg float-right"></i>
                            </div>
                            <div className="col-span-4 pl-2">
                              <p className="font-bold mb-0 text-xl">
                                Cabin Baggage
                              </p>
                              <span>NA per person</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-5 gap-2 py-2">
                            <div className="pt-2">
                              <i class="fas fa-luggage-cart fa-lg float-right"></i>
                            </div>
                            <div className="col-span-4 pl-2">
                              <p className="font-bold mb-0 text-xl">
                                Check-In Baggage
                              </p>
                              <span>NA per person</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-5 gap-2 py-2">
                            <div className="pt-2">
                              <i class="fas fa-exchange-alt fa-lg float-right"></i>
                            </div>
                            <div className="col-span-4 pl-2">
                              <p className="font-bold mb-0 text-xl">
                                Refundable
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 up rounded-2xl my-3 mx-2 px-4 py-2">
                          <div className="pt-2">
                            <span className="text-2xl font-bold text-blue-600 font-sans">
                              <span className="text-gray-700 text-2xl">
                                Grand Total
                              </span>{" "}
                              <i class="fas fa-rupee-sign fa-sm ml-2 "></i>{" "}
                              {items.fare.grandTotal * data.totalpassanger}
                            </span>
                          </div>
                          <div>
                            <Link to="/finalpage">
                              <button className="btn btn-primary sidenavd rounded-sm float-right">
                                Continue
                              </button>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchEngine;
/*  */
