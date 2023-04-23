import React, { useState } from "react";
import Notifications from "./Notification";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/Image/logo.svg";
import award from "../../assets/Image/t_award.png";
import certficate from "../../assets/Image/t_certificate.png";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 px-20  bg-gray-200">
        <div className="grid grid-cols-12 gap-4 ">
          <marquee className="col-span-11 inline-block font-semibold text-gray-600">
            Travomint has been recognised as the{" "}
            <span className="font-bold text-blue-500">"Prestigious Brand"</span>{" "}
            2020 - 21 by{" "}
            <span className="font-bold text-blue-500">
              "The Economic Times"
            </span>
          </marquee>
          <span className="hover:pointer" onClick={() => setShow(true)} key="1">
            <i class="fas fa-chevron-down"></i>
          </span>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <img src={logo} className="w-1/3" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-gray-200 ">
              <div className="grid grid-cols-3 pt-40 pb-36">
                <div>
                  <img src={award} />
                </div>
                <div className="text-center">
                  <h1 className="text-blue-700 font-semibold ">
                    THE PRESTIGIOUS{" "}
                  </h1>
                  <h1 className="text-blue-700 font-semibold">BRAND</h1>
                  <br></br>
                  <h4 className="text-gray-700 font-bold">2020-21</h4>
                  <h2 className="text-gray-700 text-2xl font-semibold">
                    Recognised by
                  </h2>
                  <br />
                  <h1 className="economic text-4xl">
                    <span className="text-6xl">T</span>HE{" "}
                    <span className="text-6xl">E</span>CONOMIC{" "}
                    <span className="text-6xl">T</span>IMES
                  </h1>
                </div>
                <div>
                  <img src={certficate} />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <Notifications />
    </>
  );
};

export default Header;
