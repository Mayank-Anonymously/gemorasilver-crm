import React from "react";
import logo from "../Image/logo.svg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, FormControl } from "react-bootstrap";
import google from "../../assets/Image/google_logo.png";
import { Link } from "react-router-dom";
import SideNav from "../Atom/SideNav";

import Form from "react-bootstrap/Form";
import Country from "./Country";

const TopNav = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen1, setIsOpen1] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal1() {
    setIsOpen1(true);
  }

  return (
    <>
      <div className="grid grid-cols-2 pr-10 border-b-2 border-white shadow bg-gray-100 pt-3 pb-3">
        <div className="grid grid-cols-12 px-4">
          {/* <Button
            className="bg-white border-none"
            onClick={() => props.setside(true)}
          > */}
          <i
            class="fas fa-bars fa-2x text-center text-orange-600 "
            onClick={() => props.setside(true)}
          ></i>
          {/* </Button> */}
          <Link to="/" className="col-span-4">
            <img src={logo} className="w-8/12" />
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-2  float-right">
            <Country />
            <button
              type="button"
              onClick={openModal}
              className="px-4 py-2  text-sm font-medium  foot rounded-lg hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <i class="fas fa-sign-in-alt"></i> Sign In
            </button>
            <button
              type="button"
              onClick={openModal1}
              className="px-4 py-2 text-sm font-medium foot rounded-lg hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <i class="fas fa-sign-in-alt"></i> Sign Up
            </button>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed bg-slate-200 inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
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
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <i class="fas fa-user border-4 bg-blue-500 text-white border-white drop-shadow-xl outline-2 outline-gray-500 p-2 rounded-3xl"></i>
                      <span className="ml-2">Sign In</span>
                    </Dialog.Title>
                    <div className="mt-6">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex w-1/2 justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={closeModal}
                          >
                            LOG IN
                          </button>

                          <a href="#" className="float-right">
                            Forget Password
                          </a>
                        </div>
                        <div className="mt-4">
                          <button className="border-2 border-gray-200 shadow  pt-2 pb-2 pl-20 pr-20 ">
                            <img src={google} className="w-1/5 inline" />{" "}
                            <span className="text-xl">
                              {" "}
                              Sign In With Google
                            </span>
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>

          <Transition appear show={isOpen1} as={Fragment}>
            <Dialog
              as="div"
              className="fixed bg-slate-200 inset-0 z-10 overflow-y-auto"
              onClose={closeModal1}
            >
              <div className="min-h-screen px-4 text-center">
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
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <i class="fas fa-user border-4 bg-blue-500 text-white border-white drop-shadow-xl outline-2 outline-gray-500 p-2 rounded-3xl"></i>
                      <span className="ml-2">Sign In</span>
                    </Dialog.Title>
                    <div className="mt-6">
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                          />
                          <Form.Text className="text-muted">
                            Provide your information.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter Your Email"
                          />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Enter Your Password"
                          />
                          <Form.Text className="text-muted">
                            Use Strong Password for More Security.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex w-1/2 justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={closeModal1}
                          >
                            LOG IN
                          </button>

                          <a href="#" className="float-right">
                            Forget Password
                          </a>
                        </div>
                        <div className="mt-4">
                          <button className="border-2 border-gray-200 shadow  pt-2 pb-2 pl-20 pr-20 ">
                            <img src={google} className="w-1/5 inline" />{" "}
                            <span className="text-xl">
                              {" "}
                              Sign In With Google
                            </span>
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default TopNav;
