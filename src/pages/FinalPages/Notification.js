import { MDBContainer } from "mdbreact";
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
const Notifications = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <>
      <div className="grid grid-cols-1">
        <Toast
          show={showA}
          onClose={toggleShowA}
          className="w-full pl-80 pr-40"
        >
          <Toast.Header className="float-right">
            <strong className="me-auto">
              You have been redirected to{" "}
              <b className="text-gray-700">travomint.com/in</b> based on your
              location.
              <span className="text-blue-500">
                {" "}
                Go to travomint.com instead.
              </span>
            </strong>
          </Toast.Header>
        </Toast>
      </div>
    </>
  );
};

export default Notifications;
