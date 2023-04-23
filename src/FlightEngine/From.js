import { useCallback, useState } from "react";
import AirPortData from "../Api/SampleData";
import Favourite from "../Api/Favourite";
import { Input } from "@mui/material";
// import plain from "../Image/plain.png";

const people = AirPortData;
const Fav = Favourite;

export default function From(props) {
  const [selected, setSelected] = useState(people);
  const [FavData, SetFavData] = useState(Fav);
  const [city, setcity] = useState(selected[60].cityName);
  const [finalcity, setfinalcity] = useState("Country, City or Airport");
  const [generate, setgenerate] = useState("none");
  const [inputselect, setinputselect] = useState(" ");
  const [FavGen, setFavGen] = useState("none");

  function changecity(e) {
    const cities = e.target.value;
    setcity(cities);
    setfinalcity(e.target.value);
    {
      cities == "" ? setgenerate("none") : setgenerate("block");
    }
    setFavGen("none");
  }
  function changeAirport(e) {
    setgenerate("none");
    setFavGen("none");
    const airport = e.target.value;
    setfinalcity(airport);
    setinputselect(selected);
    const da = "hello";
  }
  function changeAirportcode(e) {
    setgenerate("none");
    setFavGen("none");
    const airport = e.target.value;
    setfinalcity(airport);
    setinputselect(selected);
    const da = "hello";
  }
  function clickCity() {
    setFavGen("block");
  }

  const starting_data = selected.filter(
    (item) => item.airportName == finalcity
  );
  if (starting_data[0] == undefined) {
    props.setarrival("");
    props.setCountryCode("");
  } else {
    props.setarrival(starting_data[0].cityCode);
    props.setCountryCode(starting_data[0].countryCode);
  }

  return (
    <>
      <div className="relative down border-2 border-gray-100 mb-1 w-full py-3 px-4 pr-10 text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
        <div className="grid grid-cols-9 gap-2 mb-3 text-black">
          <span className="block truncate col-span-6 font-bold text-sm font-sans  py-1">
            {" "}
            <i class="fas fa-plane-departure  text-blue-500"></i> &nbsp;
            <Input
              type="text"
              id="selecteds"
              className="city"
              value={finalcity}
              placeholder="Country, City or Airport"
              onChange={(e) => changecity(e)}
              onClick={() => clickCity()}
            />
          </span>

          {selected
            .filter((items) => items.airportName == finalcity)
            .map((items, i) => (
              <span className="foot rounded-lg w-full col-span-3 text-lg px-4 font-bold ">
                {items.cityCode}
              </span>
            ))}
        </div>
        {selected
          .filter((items) => items.airportName == finalcity)
          .map((items, i) => (
            <span className=" pt-2 text-sm text-black font-sans">
              <i class="fas fa-map-marker-alt     text-blue-500"></i> &nbsp;{" "}
              {items.cityName}
            </span>
          ))}
      </div>

      <div className="">
        <ul
          role="listbox"
          className="dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded-xl "
          style={{ display: FavGen }}
        >
          {FavData.map((item, i) => (
            <>
              {/* <li role='option' onClick={(e)=>changeAirport(e)} className='dataItem w-full list-none '> <i class="fas fa-plane-departure inline   text-blue-500"></i> &nbsp;  <option id='selecteds' value={item.airportName} className='inline text-lg text-gray-600 ' >  {item.airportName} , ({item.airportCode})</option><br/></li> */}
              <div className="flex flex-row">
                <button
                  className="dataItem w-full px-3 py-2 text-left"
                  onClick={(e) => changeAirport(e)}
                  value={item.airportName}
                >
                  {" "}
                  <i class="fas fa-plane-departure  mr-2  text-blue-500 "></i>{" "}
                  {item.airportName}, {item.cityName}{" "}
                </button>
                <button
                  onClick={(e) => changeAirport(e)}
                  className="float-right shadow foot px-4 text-white rounded-xl mt-2 mr-2 w-24 h-6  bg-gradient-to-r from-blue-500 to-blue-900 "
                  value={item.airportName}
                >
                  {item.airportCode}
                </button>
              </div>
            </>
          ))}
        </ul>
      </div>

      <div className="search">
        <div className="searchInputs">
          <div className="searchIcon">
            <ul
              role="listbox"
              className="dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded-xl "
              style={{ display: generate }}
            >
              {selected
                .filter((item) => {
                  if (city == "") {
                    return "string";
                  } else if (
                    item.cityCode.toUpperCase().includes(city.toUpperCase())
                  ) {
                    return item;
                  } else if (
                    item.airportCode.toUpperCase().includes(city.toUpperCase())
                  ) {
                    return item;
                  } else if (
                    item.airportName
                      .replace(
                        /(^\w|\s\w)(\S*)/g,
                        (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
                      )
                      .toUpperCase()
                      .includes(city.toUpperCase())
                  ) {
                    return item;
                  } else if (
                    item.cityName
                      .replace(
                        /(^\w|\s\w)(\S*)/g,
                        (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
                      )
                      .toUpperCase()
                      .includes(city.toUpperCase())
                  ) {
                    return item;
                  }
                })
                .map((item, i) => (
                  <>
                    <button
                      className="dataItem w-full px-3 py-2 text-left"
                      onClick={(e) => changeAirport(e)}
                      value={item.airportName}
                    >
                      {" "}
                      <i class="fas fa-plane-departure  mr-2  text-blue-500"></i>{" "}
                      {item.airportName}, {item.cityName}{" "}
                      <span className="float-right shadow foot px-4 rounded-xl">
                        {item.airportCode}
                      </span>{" "}
                    </button>
                  </>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
