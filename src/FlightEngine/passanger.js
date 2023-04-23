import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import image from "../assets/Image/Banner2.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #3b82f6 20%, #1e3a8a 90%)",
    border: 0,
    borderRadius: 3,

    color: "white",
    height: 40,

    marginLeft: "9rem",
    padding: "0 30px",
  },
});
export default function Passanger(props) {
  // Modal
  const [shows, setShow] = useState(false);
  const classes = useStyles();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setadult(1);
    setchildren(0);
    setInfant(0);
    setCount(0);
    setgenerate("none");
  };

  const [selected, setSelected] = useState(true);
  const [generate, setgenerate] = useState("none");
  const [children, setchildren] = useState(0);
  const [adult, setadult] = useState(1);
  const [Infant, setInfant] = useState(0);
  const [count, setCount] = useState(1);

  function addAdult() {
    setadult(adult + 1);
    setCount(count + 1);
    setSelected();
    {
      count > 8 ? handleShow() : handleClose();
    }
  }

  function minusAdult() {
    setadult(adult - 1);
    setCount(count - 1);
  }

  function minuschildren() {
    setchildren(children - 1);
    setCount(count - 1);
  }

  function addchildren() {
    setchildren(children + 1);
    setCount(count + 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function addInfant() {
    setInfant(Infant + 1);
    setCount(count + 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function minusInfant() {
    setInfant(Infant - 1);
    setCount(count - 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }

  function done() {
    setgenerate("none");
  }
  function show() {
    setgenerate("block");
  }

  props.settravelleradult(adult);
  props.settravellerchildren(children);
  props.settravellerInfant(Infant);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left down rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span
              onClick={() => show()}
              className="block truncate text-sm text-black py-1 font-sans font-bold"
            >
              {" "}
              <i class="fas fa-users text-blue-500"></i> &nbsp; {adult} Adult,{" "}
              {children} Children, {Infant} Infant
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <div
            style={{ display: generate }}
            className="absolute pl-0 w-full py-1 mt-1  text-base bg-white rounded-md shadow-lg max-h-auto z-50 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div className="py-2">
              {/* Adult */}
              <h1 className="text-black text-lg border-2  mb-1 border-white px-2 mx-3 rounded-xl">
                Adult
              </h1>
              <div className="px-4 py-2 mb-3">
                <button
                  type="button"
                  onClick={() => minusAdult()}
                  class="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-minus " aria-hidden="true"></i>
                </button>

                <span className="text-sm text-black font-bold">
                  {" "}
                  &nbsp; {adult} &nbsp;{" "}
                </span>
                <button
                  type="button"
                  onClick={() => addAdult()}
                  class="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-plus " aria-hidden="true"></i>
                </button>
                <span className="text-xs text-black ">
                  {" "}
                  &nbsp; &nbsp; 16+ years
                </span>
              </div>

              {/* children */}
              <h1 className="text-black text-lg px-2 mb-1 mx-3 ">Children</h1>
              <div className="px-4 py-2 mb-3">
                <button
                  type="button"
                  onClick={() => minuschildren()}
                  class="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-minus " aria-hidden="true"></i>
                </button>

                <span className="text-sm text-black font-bold">
                  {" "}
                  &nbsp; {children} &nbsp;{" "}
                </span>
                <button
                  type="button"
                  onClick={() => addchildren()}
                  class="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-plus " aria-hidden="true"></i>
                </button>
                <span className="text-xs text-black ">
                  {" "}
                  &nbsp; &nbsp; 0-15 years
                </span>
              </div>

              {/* infants */}
              <h1 className="text-black text-lg px-2 mb-1 mx-3 ">
                Infant (On Lap)
              </h1>
              <div className="px-4 py-2">
                <button
                  type="button"
                  onClick={() => minusInfant()}
                  class="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-minus " aria-hidden="true"></i>
                </button>

                <span className="text-sm text-black font-bold">
                  {" "}
                  &nbsp; {Infant} &nbsp;{" "}
                </span>
                <button
                  type="button"
                  onClick={() => addInfant()}
                  class="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-plus " aria-hidden="true"></i>
                </button>
                <span className="text-xs text-black ">
                  {" "}
                  &nbsp; &nbsp; 0-15 years
                </span>
              </div>

              {/* Note */}
              <div className="px-4 py-2">
                <span className="text-xs ">
                  Your age at time of travel must be valid for the age category
                  booked. Airlines have restrictions on under 18s travelling
                  alone.
                </span>
              </div>

              {/* button */}
              <div class="flex flex-row-reverse mr-5 from-blue-500 to-blue-900">
                <button className={classes.root} onClick={() => done()}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </Listbox>

      <Modal show={shows} onHide={handleClose}>
        <img src={image} />
      </Modal>
    </>
  );
}
