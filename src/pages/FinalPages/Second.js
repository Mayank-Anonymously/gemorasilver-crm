import React, { createContext, useEffect, useState, useContext } from "react";
// import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from "@heroicons/react/solid";
// import Accordion from "react-bootstrap/Accordion";
import Collapse from "react-bootstrap/Collapse";
import scope from "../../assets/Image/scope.svg";
import clinic from "../../assets/Image/clinic.jpg";
import medical1 from "../../assets/Image/medical1.gif";
import medical2 from "../../assets/Image/medical2.gif";
import medical3 from "../../assets/Image/medical3.gif";
import { styled } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
// import Contact from "../../View/Contact";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.primary.z16,
}));

const Second = (props) => {
  // const [travelinfo, settravelinfo] = useState("Traveler Information");
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [third, setthird] = useState(false);
  const [continuebutton, setcontinuebutton] = useState(true);
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [contact, setcontact] = useState(false);
  const [secondcontinuebutton, setsecondcontinuebutton] = useState(false);
  const [baggage, setbaggage] = useState(false);
  const [thirdcontinuebutton, setthirdcontinuebutton] = useState(false);
  const [pay, setpay] = useState(false);

  function thirdcontinue() {
    setbaggage(false);
    setthirdcontinuebutton(false);
    setpay(true);
  }
  // const [medical, setmedical] = useState("");

  function secondcontinue() {
    setsecondcontinuebutton(false);
    setthird(false);
    setcontact(true);
    setbaggage(true);
    setthirdcontinuebutton(true);
  }
  function close() {
    setsecondcontinuebutton(false);
    setcontact(false);
    setOpen(true);
    setOpen2(false);
    setcontinuebutton(true);
    setthird(false);
    setbaggage(false);
    setthirdcontinuebutton(false);
    setpay(false);
  }
  function changename() {
    setOpen(false);
    setOpen2(true);
    setthird(true);
    setcontinuebutton(false);
    setsecondcontinuebutton(true);
  }
  function close1(e, index) {
    setOpen1(true);
    const { name, value } = e.target;
    const list = [...inputList];

    list[index][name] = "";
    setInputList(list);
  }


  // test
  const [inputList, setInputList] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      weight: "",
    },
  ]);

  // input Contact info
  const fillmobile = (v) => {
    const contact = v.target;
    setmobile(contact.value);
  };

  const fillemail = (u) => {
    const contact = u.target;
    setemail(contact.value);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // done the value
  const Done = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    list[index][name] = "";
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        firstName: "",
        middleName: "",
        lastName: "",
        day: "",
        month: "",
        year: "",
        weight: "",
        addBagage: "",
      },
    ]);
  };

  return (
    <RootStyle>
      {/* test */}
      <div className=" grid grid-cols-1 up  mt-1">
        {/* top Header */}
        <div className="grid grid-cols-1 text-left">
          <div
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="bg-gray-400 rounded-t-2xl font-sans text-white py-2 uppercase px-24 text-xl font-bold"
          >
            {" "}
            <i class="fas fa-user-check fa-sm relative top-1 mr-3 float-left"></i>
            Travel Information
            <button
              className="btn btn-shivam py-2 text-sm  mb-0 font-bold float-right mt-0"
              onClick={() => close()}
            >
              <span className="text-xs px-6 font-bold "> Modify</span>
            </button>
          </div>
        </div>
        <div>
          <Collapse in={open2}>
            <div className="grid grid-cols-2  px-10 py-4 gap-2">
              {inputList.map((item, i) => (
                <>
                  <div className="text-sm  px-2  font-bold">
                    Name : {item.firstName} {item.middleName} {item.lastName}
                  </div>
                  <div className="text-sm  px-2 font-bold">
                    Extra Baggage : {item.weight}
                  </div>
                </>
              ))}
            </div>
          </Collapse>

          <Collapse in={contact}>
            <div className="grid grid-cols-2  px-10 pb-4 gap-2">
              <div className="text-sm  px-2  font-bold">
                Mobile No.: {mobile}
              </div>
              <div className="text-sm  px-2 font-bold">Email : {email}</div>
            </div>
          </Collapse>
        </div>

        <Collapse in={open}>
          <div>
            {/* mapping */}
            {inputList.map((x, i) => (
              <>
                {/* Form Detail */}
                <div className="box">
                  <div className="grid grid-cols-3 mb-0  px-24 pt-4 pb-3 gap-4">
                    <div>
                      <input
                        name="firstName"
                        className="  w-full shadow   mb-0  rounded-xl px-4 py-2 text-sm font-bold  border-2"
                        placeholder="Enter First Name"
                        value={x.firstName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                    <div>
                      <input
                        name="middleName"
                        className=" w-full  shadow  mb-0   rounded-xl px-4 py-2 text-sm font-bold  border-2"
                        placeholder="Enter Middle Name"
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                    <div>
                      <input
                        className="  w-full shadow   mb-0  rounded-xl px-4 py-2 text-sm font-bold  border-2"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={x.lastName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 col-span-2  px-24 gap-4">
                    <div>
                      <select
                        id="cars"
                        name="day"
                        placeholder="Day"
                        onChange={(e) => handleInputChange(e, i)}
                        className="w-full text-gray-400 down  mb-0 shadow rounded-xl px-4 py-2 text-sm font-bold  border-2"
                      >
                        <option value="null">Day</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </div>

                    <div>
                      <select
                        id="cars"
                        name="month"
                        placeholder="Month"
                        onChange={(e) => handleInputChange(e, i)}
                        className="w-full text-gray-400  mb-0 down shadow  rounded-xl px-4 py-2 text-sm font-bold  border-2"
                      >
                        <option value="null">Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>

                    <div>
                      <select
                        id="cars"
                        name="year"
                        placeholder="year"
                        onChange={(e) => handleInputChange(e, i)}
                        className="w-full text-gray-400 down mb-0 shadow rounded-xl px-4 py-2 text-sm font-bold  border-2"
                      >
                        <option value="volvo">Date</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* add Baggage */}
                <div className="grid grid-cols-1 bg-gray-200 mt-4">
                  <div className="px-24">
                    <button
                      className="btn btn-shivam float-right"
                      name="addBagage"
                      value="addBagage"
                      onClick={(e) => handleInputChange(e, i)}
                      onFocus={(e) => close1(e, i)}
                      type="submit"
                    >
                      <i class="fas fa-briefcase "></i> &nbsp; Add Baggage
                    </button>
                  </div>
                </div>

                {/* baggage Body */}
                <Collapse in={open1}>
                  <div id="example-collapse-text" className="pt-4  bg-white">
                    {x.addBagage != "" ? (
                      <>
                        <div className="grid grid-cols-2 gap-4 px-24 ">
                          <div className="grid grid-cols-8 ">
                            <div className="col-span-1 px-1">
                              <input
                                type="radio"
                                id="five"
                                name="weight"
                                value="5kg"
                                onClick={(e) => handleInputChange(e, i)}
                                className="h-4 w-4 mt-3 hover:bg-gray-400"
                              />
                            </div>
                            <div className="py-2">
                              <i class="fas fa-briefcase fa-lg text-gray-600"></i>
                            </div>
                            <div className="col-span-6 py-1 ">
                              <p className="text-xs  mb-0 font-bold text-orange-600">
                                Additional 5KG
                              </p>
                              <p className="text-xl text-black font-bold">
                                <i class="fas fa-rupee-sign"></i> 2000
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-8">
                            <div className="col-span-1">
                              <input
                                type="radio"
                                id="ten"
                                name="weight"
                                value="10kg"
                                onClick={(e) => handleInputChange(e, i)}
                                className="h-4 w-4 mt-3 hover:bg-gray-400"
                              />
                            </div>
                            <div className="py-2">
                              <i class="fas fa-briefcase fa-lg text-gray-600"></i>
                            </div>
                            <div className="col-span-6 py-1 ">
                              <p className="text-xs  mb-0 font-bold text-orange-600">
                                Additional 10KG
                              </p>
                              <p className="text-xl text-black font-bold">
                                <i class="fas fa-rupee-sign"></i> 2000
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-8">
                            <div className="col-span-1">
                              <input
                                type="radio"
                                id="fifteen"
                                name="weight"
                                value="15kg"
                                onClick={(e) => handleInputChange(e, i)}
                                className="h-4 w-4 mt-3 hover:bg-gray-400"
                              />
                            </div>
                            <div className="py-2">
                              <i class="fas fa-briefcase fa-lg text-gray-600"></i>
                            </div>
                            <div className="col-span-6 py-1 ">
                              <p className="text-xs  mb-0 font-bold text-orange-600">
                                Additional 20KG
                              </p>
                              <p className="text-xl text-black font-bold">
                                <i class="fas fa-rupee-sign"></i> 2000
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-8">
                            <div className="col-span-1">
                              <input
                                type="radio"
                                id="twentyfive"
                                name="weight"
                                value="25kg"
                                onClick={(e) => handleInputChange(e, i)}
                                className="h-4 w-4 mt-3 hover:bg-gray-400"
                              />
                            </div>
                            <div className="py-2">
                              <i class="fas fa-briefcase fa-lg text-gray-600"></i>
                            </div>
                            <div className="col-span-6 py-1 ">
                              <p className="text-xs  mb-0 font-bold text-orange-600">
                                Additional 25KG
                              </p>
                              <p className="text-xl text-black font-bold">
                                <i class="fas fa-rupee-sign"></i> 2000
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 px-24">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div>
                            {" "}
                            <button
                              className="btn w-full btn-shivam "
                              name="addBagage"
                              value=""
                              onClick={(e) => Done(e, i)}
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                  </div>
                </Collapse>

                {/* baggage body over */}
                <div className="btn-box px-24">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10 btn foot "
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button
                      className="btn btn-primary rounded-2xl"
                      onClick={handleAddClick}
                    >
                      + Add Traveller
                    </button>
                  )}
                </div>
              </>
            ))}
          </div>
        </Collapse>
      </div>

      {/* first continue butoon */}
      <Collapse in={continuebutton}>
        <div>
          <button
            className="btn btn-primary text-2xl float-right mt-4"
            onClick={() => changename()}
          >
            {" "}
            Continue{" "}
          </button>
        </div>
      </Collapse>

      {/* third page  */}
      <Collapse in={third}>
        <div>
          <div className="py-2 bg-gray-200 mt-4">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2">
                <div className="bg-gray-400 px-x py-2 rounded-xl text-white ">
                  <img src={scope} className="w-6 ml-3 inline-block" />
                  <span className="text-sm ml-3 font-bold">
                    {" "}
                    TELEMEDICINE PLAN ₹ 60.0/-
                  </span>
                </div>
              </div>
              <div className="px-3">
                <img src={clinic} className="w-1/6 float-right" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-2 px-4">
              {/* medical 1 */}
              <div className="bg-white text-center shadow rounded-xl px-4 py-2">
                <span className="text-xs font-semibold text-black  leading-0 ">
                  24*7 Medical consultations with qualified doctors
                </span>

                <hr />
                <div className="flex justify-center ">
                  <img src={medical1} className="w-1/2" />
                </div>
              </div>

              {/* medical2 */}
              <div className="bg-white text-center shadow  rounded-xl px-4 py-2">
                <span className="text-sm font-semibold text-black  leading-0 ">
                  20% discount on medicines
                </span>

                <hr />
                <div className="flex justify-center ">
                  <img src={medical2} className="w-1/2" />
                </div>
              </div>

              {/* medical3 */}
              <div className="bg-white text-center shadow rounded-xl px-4 py-2">
                <span className="text-sm font-semibold text-black  leading-0 ">
                  20% discount on Lab Tests
                </span>

                <hr />
                <div className="flex justify-center ">
                  <img src={medical3} className="w-1/2" />
                </div>
              </div>

              {/* medical4 */}
              <div className="bg-white text-center shadow rounded-xl py-10">
                <span className="text-blue-600 font-bold text-6xl"> +6</span>
                <p className="text-blue-600 font-bold text-lg">More</p>
              </div>
            </div>
            <div className="px-4 py-4">
              <input
                type="radio"
                name="medical"
                id="medical"
                value="true"
                onClick={() => props.setValue(true)}
              />
              <span className="text-sm text-blue-600 font-bold">
                {" "}
                Yes, I want Telemedicine plan just for 20.0/- Monthly I agree to
                the Terms & Conditions
              </span>
              <br />
              <input
                type="radio"
                name="medical"
                id="medical"
                value="false"
                onClick={() => props.setValue(false)}
              />
              <span className="text-sm text-blue-600 font-bold">
                {" "}
                No, I do not want Telemedicine plan
              </span>
            </div>
          </div>
          {/* contact */}
          <div className="grid grid-cols-1 bg-gray-200 mt-6 ">
            <div className="bg-gray-400 px-10 py-2 rounded-t-xl text-white ">
              <span className="text-lg ml-3 font-bold">
                {" "}
                <i class="fas fa-id-badge "></i> &nbsp; Contact Information
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 px-16 py-3">
              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full mb-0  rounded-lg px-4 py-1 text-sm font-bold shadow border-2"
                  placeholder="Enter Your Email"
                  // value={x.lastName}
                  onChange={(u) => fillemail(u)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full  mb-0  rounded-lg px-4 py-1 text-sm font-bold shadow border-2"
                  placeholder="Enter Your Phone No."
                  name="phone"
                  // value={x.lastName}
                  onChange={(v) => fillmobile(v)}
                />
              </div>
            </div>
          </div>
        </div>
      </Collapse>
      {/* second continue button */}
      <Collapse in={secondcontinuebutton}>
        <div>
          <button
            className="btn btn-primary text-2xl float-right mt-4"
            onClick={() => secondcontinue()}
          >
            {" "}
            Continue{" "}
          </button>
        </div>
      </Collapse>

      {/* fourth */}
      <Collapse in={baggage}>
        <div className="py-2  mt-2">
          <div className="grid grid-cols-2 bg-gray-200 ">
            <div className="px-4 py-3">
              <div className="bg-gray-400 px-x py-2 rounded-xl text-white ">
                <span className="text-lg ml-3 font-bold">
                  {" "}
                  BAGGAGE PROTECTION PLAN ₹ 380/-
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 px-4 py-2 bg-gray-200">
            <h3 className="text-sm font-bold">
              Receive INR1,000.00 Per Checked Bag that doesn’t arrive with 96
              hours of your landing time.
            </h3>
            <div>
              {" "}
              <input type="checkbox" />
              <span className="text-sm text-gray-500 font-semibold">
                {" "}
                Real-time tracking via email & SMS
              </span>
            </div>
            <div>
              {" "}
              <input type="checkbox" />
              <span className="text-sm text-gray-500 font-semibold">
                {" "}
                Applies to all checked bags
              </span>
            </div>
          </div>

          <div className="px-4 py-4 bg-gray-200">
            <input
              type="radio"
              name="medical"
              id="medical"
              value="true"
              onClick={() => props.setValue(true)}
            />
            <span className="text-sm text-blue-600 font-bold">
              {" "}
              Yes, I want Baggage Proctection just for 380/person I agree to the
              Term & Conditions
            </span>
            <br />
            <input
              type="radio"
              name="medical"
              id="medical"
              value="false"
              onClick={() => props.setValue(false)}
            />
            <span className="text-sm text-blue-600 font-bold">
              {" "}
              No, I do not want Baggage Protection
            </span>
          </div>

          <div className="py-2 bg-gray-200 mt-3">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2">
                <div className="bg-gray-400 px-x py-2 rounded-xl text-white ">
                  <span className="text-lg ml-3 font-bold">
                    {" "}
                    TRAVEL PROTECTION PLAN
                  </span>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="border-4 border-white px-4 py-2">
                <input
                  type="radio"
                  name="medical"
                  id="medical"
                  value="true"
                  onClick={() => props.setValue(true)}
                />
                <span className="text-sm text-blue-600 font-bold ">
                  {" "}
                  &nbsp; I will take the risk of travelling without insurance
                </span>
              </div>
              <div className="grid grid-cols-1 px-4 py-2">
                <h5 className="text-blue-500 font-bold mt-2">Coverage</h5>
                <p className="text-gray-700 font-bold">
                  Underwritten by Generali U.S Branch
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 text-sm leading-6">
                    <li>Trip Cancellation</li>
                    <li>Trip Interruption</li>
                    <li>Travel Delay ($100 maximum per day, per person)</li>
                    <li>Baggage coverage</li>
                    <li>Baggage Delay coverage</li>
                    <li>
                      Accidental Death and Dismemberment - Air Flight Accident
                    </li>
                  </div>
                  <div></div>
                </div>
                <h5 className="text-blue-500 font-bold mt-8 ">Services</h5>
                <p className="text-gray-700 font-bold">
                  Privided by Generali's designated provider
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 text-sm leading-6 ">
                    <li>24-Hour Emergency Assistance Service</li>
                    <li>Concierge Services</li>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="border-4 border-white px-4 py-2 mt-2">
                <input
                  type="radio"
                  name="medical"
                  id="medical"
                  value="false"
                  onClick={() => props.setValue(false)}
                />
                <span className="text-sm text-blue-600 font-bold">
                  {" "}
                  &nbsp; Add Travel Protection{" "}
                  <span className="float-right">₹ 2700 Total price</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Collapse>

      <Collapse in={thirdcontinuebutton}>
        <div>
          <button
            className="btn btn-primary text-2xl float-right mt-4"
            onClick={() => thirdcontinue()}
          >
            {" "}
            Continue{" "}
          </button>
        </div>
      </Collapse>

      <Collapse in={pay}>
        <div>
          <div className=" grid grid-cols-1 up pl-6 pt-3 mx-1 rounded-2xl ">
            <div className="bg-gray-400 border-2 shadow w-5/12 rounded-2xl py-2 text-center font-bold text-xl text-white">
              <i class="fas fa-fighter-jet text-white -rotate-45"></i> Payment
              Method
            </div>
            <div className="py-4">
              <input
                type="radio"
                name="medical"
                id="medical"
                value="false"
                onClick={() => props.setValue(false)}
              />
              <span className="text-sm">
                {" "}
                &nbsp; By clicking Pay Now, I agree that I have read and
                accepted travomint.com andTerms and Conditions Privacy Policy{" "}
              </span>
            </div>
            <div className="px-2 pb-2">
              <span className="text-blue-600 -top-2 relative text-3xl font-bold">
                <i class="fas fa-rupee-sign"></i> 3755.00/-
              </span>
              <button className="btn btn-primary ">Pay Now</button>
            </div>

            <div className="pr-4">
              <p className="text-xs">
                Please confirm that the names and spelling of travelers are
                correct & accurate. Please confirm that the dates and timing of
                flight departures are correct. Tickets are non-transferable as
                well as non-refundable. Name changes on tickets are not
                permitted. Our service fees are non-refundable. Total ticket
                cost included all the taxes and service fees. Date and routing
                changes will be subject to airline penalties and our service
                fees. Fares are not guaranteed until ticketed.
              </p>
            </div>
          </div>
        </div>
      </Collapse>
    </RootStyle>
  );
};
export default Second;
