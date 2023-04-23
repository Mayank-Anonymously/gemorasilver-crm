import React from "react";
import { Link } from "react-router-dom";
import SG from "../../assets/Image/SG.png";
import { styled } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.primary.z16,
}));

const First = () => {
  return (
    <RootStyle>
      <div className=" grid grid-cols-1 up  mx-1 rounded-2xl ">
        <div className=" border-2  w-full rounded-t-2xl py-2 text-left px-20 font-bold text-xl text-white bg-gray-400">
          <i class="fas fa-fighter-jet text-white -rotate-45"></i> &nbsp; Flight
          Detail
        </div>
        <div className="grid grid-cols-6  mt-2  ">
          <div className="col-span-2">
            <div className="grid grid-cols-3">
              <div className="pt-2 pb-3">
                <img
                  src={SG}
                  className="w-6/12 down rounded-xl inline float-right"
                />
              </div>

              <div className="pl-4 pt-2 col-span-2">
                <span className="text-xl text-black font-sans font-bold">
                  Spicejet
                </span>
                <br />
                <span className="text-xs text-black font-sans font-bold">
                  {" "}
                  I5-764
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-4 px-14">
            <div className="grid grid-cols-4">
              <div className="text-center py-3">
                <span className="text-lg text-black font-bold">03:45 PM </span>
                <span className="text-lg text-black font-bold">DEL</span>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-9 mt-3 ">
                  <div className="col-span-3 pl-2">
                    <hr className="bg-black opacity-100" />
                  </div>
                  <div className="col-span-3 text-center relative -top-2">
                    <span className="text-xs text-black font-sans">2h 15m</span>
                    <br />
                    <span className="text-xs text-black font-sans">
                      Non-Stop
                    </span>
                  </div>
                  <div className="col-span-3 pr-2">
                    <hr className="bg-black opacity-100" />
                  </div>
                </div>
              </div>
              <div className="text-center py-3">
                <span className="text-lg text-black font-bold">03:45 PM </span>
                <span className="text-lg text-black font-bold">DEL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 up rounded-2xl my-3 mx-2 ">
        <div className="grid grid-cols-5 gap-2 py-2">
          <div className="pt-2">
            <i class="fas fa-briefcase fa-lg float-right"></i>
          </div>
          <div className="col-span-4 pl-2">
            <p className="font-bold mb-0 text-lg">Cabin Baggage</p>
            <span className="text-sm">7 kgs</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 py-2">
          <div className="pt-2">
            <i class="fas fa-luggage-cart fa-lg float-right"></i>
          </div>
          <div className="col-span-4 pl-2">
            <p className="font-bold mb-0 text-lg">Check-In Baggage</p>
            <span className="text-sm">15 kgs</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 py-2">
          <div className="pt-2">
            <i class="fas fa-exchange-alt fa-lg float-right"></i>
          </div>
          <div className="col-span-4 pl-2 ">
            <p className="font-bold mb-0 text-lg">Refundable</p>
          </div>
        </div>
      </div>
    </RootStyle>
  );
};
export default First;
