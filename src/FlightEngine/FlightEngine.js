import { useState, createContext } from "react";
import { Tab } from "@headlessui/react";
import Main from "../assets/Image/Main.png";
import { addDays } from "date-fns";
import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Passanger from "../FlightEngine/passanger";
import Class from "../FlightEngine/Class";
import From from "../FlightEngine/From";
import To from "../FlightEngine/to";
import DatePicker from "@mui/lab/DatePicker";
// import DatePicker from "@mui/lab/DatePicker";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { checkFlights } from "../Feature/Action";
// import Favourite from "../Sample_Data/Favourite.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Engine(props) {
  const [Result, setResult] = useState({});
  const [Load, setLoad] = useState(false);

  // rest
  const [value, setValue] = React.useState([null, null]);
  let [isOpen, setIsOpen] = useState(false);

  const [values, setValues] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValues(newValue);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  function setdate() {
    setIsOpen(false);
    setstartDate(state[0].startDate);
    setendDate(state[0].endDate);
  }

  const [startDate, setstartDate] = useState(state[0].startDate);
  const [endDate, setendDate] = useState(state[0].endDate);
  // console.log(state)

  // Full data

  const [single_date, setsingle_date] = useState(
    startDate.toLocaleDateString()
  );

  const [departure, setdeparture] = useState("");
  const [arrival, setarrival] = useState("");
  const [classe, setclasse] = useState([]);
  const [travelleradult, settravelleradult] = useState([]);
  const [travellerchildren, settravellerchildren] = useState([]);
  const [travellerInfant, settravellerInfant] = useState([]);
  const [nameofclass, setnameofclass] = useState("");
  const [tripType, settripType] = useState("1");
  const [CountryCode, setCountryCode] = useState("");
  //   const [openTab, setOpenTab] = useState(1);

  //   const dispatch = useDispatch();
  //   dispatch(
  //     checkFlights({
  //       departure: arrival,
  //       arrival: departure,
  //       adult: travelleradult,
  //       children: travellerchildren,
  //       infant: travellerInfant,
  //       class: classe,
  //       startDates: startDate.toLocaleDateString(),
  //       endDates: endDate.toLocaleDateString(),
  //       singleDate: values.toLocaleDateString(),
  //       nameClass: nameofclass,
  //       tripType: tripType,
  //       CountryCode: CountryCode,
  //       totalpassanger: travellerchildren + travellerInfant + travelleradult,
  //       login: true,
  //     })
  //   );
  return (
    <>
      <div className="w-full px-14 pt-4 pb-4 engines mt-4 ">
        <Tab.Group>
          <Tab.List className="flex p-1 w-2/5  space-x-1 mb-4 foot rounded-lg">
            <Tab
              key="1"
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-sans leading-5 font-medium text-blue-500 rounded-lg",
                  "",
                  selected
                    ? "bg-pomegranate-400 text-black "
                    : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <i className="fas fa-map-signs"> </i>&nbsp; &nbsp; One Way
            </Tab>

            <Tab
              key="2"
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-sans leading-5 font-medium text-blue-500 rounded-lg",
                  "focus:outline-none ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow text-black"
                    : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <i class="fas fa-plane-departure"> </i>&nbsp; &nbsp; Round Trip
            </Tab>
          </Tab.List>

          <Tab.Panel
            key="1"
            className={classNames(
              " rounded-xl ",
              "focus:outline-none   ring-white ring-opacity-60"
            )}
          >
            <div className="grid grid-cols-3">
              <div className="col-span-2 ">
                <div className="grid grid-cols-2">
                  <div className="w-11/12">
                    <span className="text-sm ml-2 text-black font-semibold">
                      From Where..{" "}
                    </span>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={values}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider> */}
                    <From
                      setarrival={setarrival}
                      setCountryCode={setCountryCode}
                    />
                  </div>

                  <div className="w-11/12">
                    <span className="text-sm ml-2 text-black font-semibold">
                      To Where..{" "}
                    </span>

                    <To setdeparture={setdeparture} />
                  </div>

                  <div className="w-11/12 col-span-2 date py-3">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={values}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>

                  <div className="w-11/12">
                    <Passanger
                      settravelleradult={settravelleradult}
                      settravellerchildren={settravellerchildren}
                      settravellerInfant={settravellerInfant}
                    />
                  </div>

                  <div className="w-11/12">
                    <Class
                      setclasse={setclasse}
                      setnameofclass={setnameofclass}
                    />
                  </div>
                </div>

                <>
                  <div className="grid grid-cols-1  mt-4 place-items-center ">
                    <Button variant="contained" to="/" component={RouterLink}>
                      Search
                    </Button>
                  </div>
                </>
              </div>
              {/* <div>
                <img src={Main} className="relative w-9/12 " />
              </div> */}
            </div>
          </Tab.Panel>

          <Tab.Panels className="w-full rounded-3xl">
            <Tab.Panel
              key="2"
              className={classNames(
                " rounded-xl  ",
                " focus:outline-none  ring-white ring-opacity-60"
              )}
            >
              <div className="grid grid-cols-3 ">
                <div className="col-span-2 ">
                  <div className="grid grid-cols-2">
                    <div className="w-11/12 ">
                      <span className="text-sm ml-2 text-black font-semibold">
                        From Where..{" "}
                      </span>
                      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                          label="Date mobile"
                          inputFormat="MM/dd/yyyy"
                          value={values}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider> */}
                      <From
                        setarrival={setarrival}
                        setCountryCode={setCountryCode}
                      />
                    </div>

                    <div className="w-11/12">
                      <span className="text-sm ml-2 text-black font-semibold">
                        To Where..{" "}
                      </span>
                      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                          label="Date mobile"
                          inputFormat="MM/dd/yyyy"
                          value={values}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider> */}
                      <To setdeparture={setdeparture} />
                    </div>

                    <div className="date col-span-2">
                      <div class="grid grid-cols-2  mt-3 ">
                        <input
                          type="text"
                          value={startDate.toLocaleDateString()}
                          onClick={openModal}
                          className="w-full date text-black font-sans inline-block text-sm shadow px-4 mb-3 py-2 mr-1 text-lg font-bold  rounded-lg  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        />

                        <input
                          type="text"
                          value={endDate.toLocaleDateString()}
                          onClick={openModal}
                          className=" inline-block date font-sans text-black text-sm shadow px-4 mb-3 ml-3 py-2 mr-1 text-lg font-bold  down rounded-lg hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        />
                      </div>

                      <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                          as="div"
                          className="fixed bg-opacity-10  inset-0 z-10 overflow-y-auto"
                          onClose={closeModal}
                        >
                          <div className="min-h-screen px-4 text-center ">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                              className="inline-block h-screen align-middle"
                              aria-hidden="true"
                            >
                              &#8203;
                            </span>
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white  shadow-xl rounded-2xl">
                                <Dialog.Title
                                  as="h3"
                                  className="text-sm 0  font-medium leading-6 text-gray-900"
                                >
                                  <DateRange
                                    onChange={(item) =>
                                      setState([item.selection])
                                    }
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={true}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                  />
                                </Dialog.Title>

                                <button
                                  className="btn btn-primary float-right"
                                  onClick={() => setdate()}
                                >
                                  Done
                                </button>
                              </div>
                            </Transition.Child>
                          </div>
                        </Dialog>
                      </Transition>
                    </div>

                    <div className="w-11/12">
                      <Passanger
                        settravelleradult={settravelleradult}
                        settravellerchildren={settravellerchildren}
                        settravellerInfant={settravellerInfant}
                      />
                    </div>

                    <div className="w-11/12">
                      <Class
                        setclasse={setclasse}
                        setnameofclass={setnameofclass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1  mt-4 place-items-center ">
                    <Button variant="contained" to="/" component={RouterLink}>
                      Search
                    </Button>
                  </div>
                </div>
                {/* <div>
                  <img src={Main} className="relative w-9/12" />
                </div> */}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
