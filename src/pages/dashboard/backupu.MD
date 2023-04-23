<Box>
        {result.data.flightResult.map((items, i) => (
          <>
            <div className="grid grid-cols-6 px-10 py-3 mt-3 shadow rounded-2xl">
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
                        .filter((airline) => airline.code == items.airline)
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
                  <i class="far fa-hand-point-right"></i> Flight Details
                </button>
              </div>
              <div className="col-span-4 px-14">
                <div className="grid grid-cols-4">
                  <div className="text-center py-3">
                    <span className="text-lg text-black font-bold">
                      {items.outBound ? (
                        <span>
                          {items.outBound[0].depDate.slice(11, 13) < 12 ? (
                            <span>
                              {items.outBound[0].depDate.slice(11, 16)} AM
                            </span>
                          ) : (
                            <span>
                              {items.outBound[0].depDate.slice(11, 13) - 12}
                              {items.outBound[0].depDate.slice(13, 16)} PM
                            </span>
                          )}
                        </span>
                      ) : (
                        <span>
                          {items.inBound[0].depDate.slice(11, 13) < 12 ? (
                            <span>
                              {items.inBound[0].depDate.slice(11, 16)} AM
                            </span>
                          ) : (
                            <span>
                              {items.inBound[0].depDate.slice(11, 13) - 12}
                              {items.inBound[0].depDate.slice(13, 16)} PM
                            </span>
                          )}
                        </span>
                      )}
                    </span>
                    <br />
                    <span className="text-lg text-black font-bold">
                      {data.departure}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-9 mt-3 ">
                      <div className="col-span-3 pl-2">
                        <hr className="bg-black opacity-100" />
                      </div>
                      <div className="col-span-3 text-center relative -top-2">
                        <span className="text-xs text-black font-sans">
                          {items.outBound ? (
                            <span>
                              {items.outBound.length == 2 ? (
                                <span>
                                  {" "}
                                  {items.outBound[1].reachDate.slice(11, 13) -
                                    items.outBound[0].depDate.slice(
                                      11,
                                      13
                                    )}{" "}
                                  hr{" "}
                                  {items.outBound[1].reachDate.slice(14, 16) -
                                    items.outBound[0].depDate.slice(
                                      14,
                                      16
                                    )}{" "}
                                  min{" "}
                                </span>
                              ) : (
                                <span>
                                  {" "}
                                  {items.outBound[0].reachDate.slice(11, 13) -
                                    items.outBound[0].depDate.slice(
                                      11,
                                      13
                                    )}{" "}
                                  hr{" "}
                                  {items.outBound[0].reachDate.slice(14, 16) -
                                    items.outBound[0].depDate.slice(
                                      14,
                                      16
                                    )}{" "}
                                  min{" "}
                                </span>
                              )}
                            </span>
                          ) : (
                            <span>
                              {items.inBound.length == 2 ? (
                                <span>
                                  {" "}
                                  {items.inBound[1].reachDate.slice(11, 13) -
                                    items.inBound[0].depDate.slice(11, 13)}{" "}
                                  hr{" "}
                                  {items.inBound[1].reachDate.slice(14, 16) -
                                    items.inBound[0].depDate.slice(14, 16)}{" "}
                                  min{" "}
                                </span>
                              ) : (
                                <span>
                                  {" "}
                                  {items.inBound[0].reachDate.slice(11, 13) -
                                    items.inBound[0].depDate.slice(11, 13)}{" "}
                                  hr{" "}
                                  {items.inBound[0].reachDate.slice(14, 16) -
                                    items.inBound[0].depDate.slice(14, 16)}{" "}
                                  min{" "}
                                </span>
                              )}
                            </span>
                          )}
                        </span>
                        <br />
                        <span className="text-xs text-black font-sans">
                          {items.outBound ? (
                            <span>
                              {items.outBound.length == 2 ? (
                                <span> One-Stop </span>
                              ) : (
                                <span> Non-stop </span>
                              )}{" "}
                            </span>
                          ) : (
                            <span>
                              {" "}
                              {items.inBound.length == 2 ? (
                                <span> One-Stop </span>
                              ) : (
                                <span> Non-stop </span>
                              )}
                            </span>
                          )}
                        </span>
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
                              {items.outBound[1].reachDate.slice(11, 13) <
                              12 ? (
                                <span>
                                  {items.outBound[1].reachDate.slice(11, 16)} AM{" "}
                                </span>
                              ) : (
                                <span>
                                  {items.outBound[1].reachDate.slice(11, 13) -
                                    12}
                                  {items.outBound[0].depDate.slice(13, 16)} PM{" "}
                                </span>
                              )}
                            </span>
                          ) : (
                            <span>
                              {" "}
                              {items.outBound[0].reachDate.slice(11, 13) <
                              13 ? (
                                <span>
                                  {items.outBound[0].reachDate.slice(11, 16)} AM{" "}
                                </span>
                              ) : (
                                <span>
                                  {items.outBound[0].reachDate.slice(11, 13) -
                                    10}
                                  {items.outBound[0].depDate.slice(13, 16)} PM{" "}
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
                              {items.inBound[1].reachDate.slice(11, 13) < 12 ? (
                                <span>
                                  {items.inBound[1].reachDate.slice(11, 16)} AM{" "}
                                </span>
                              ) : (
                                <span>
                                  {items.inBound[1].reachDate.slice(11, 13) -
                                    12}
                                  {items.inBound[0].depDate.slice(13, 16)} PM{" "}
                                </span>
                              )}
                            </span>
                          ) : (
                            <span>
                              {" "}
                              {items.inBound[0].reachDate.slice(11, 13) < 13 ? (
                                <span>
                                  {items.inBound[0].reachDate.slice(11, 16)} AM{" "}
                                </span>
                              ) : (
                                <span>
                                  {items.inBound[0].reachDate.slice(11, 13) -
                                    10}
                                  {items.inBound[0].depDate.slice(13, 16)} PM{" "}
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

                <button
                  className="foot w-full  pt-1 pb-1 pl-3 pr-3 font-bold text-sm text-blue-500 mt-3 rounded-lg "
                  type="button"
                  onClick={(e) => openModal(items.resultID)}
                >
                  {" "}
                  Book Now
                </button>
              </div>
            </div>
          </>
        ))}
        {result.data.flightResult
          .filter((items) => items.resultID == modal)
          .map((items, i) => (
            <>
              <Modal className="mt-10" show={show} onHide={handleClose}>
                <Modal.Header className="foot text-white" closeButton>
                  <Modal.Title>Flight Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="px-16">
                    The baggage information is just for reference. Please Check
                    with airline before check-in. For more information, visit
                    the airline's official website.
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
                          {items.inBound[0].airline} {items.inBound[0].flightNo}
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
                                item.airportCode == items.outBound[0].toAirport
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
                                item.airportCode == items.outBound[1].toAirport
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
                                item.airportCode == items.outBound[0].toAirport
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
                                item.airportCode == items.inBound[0].fromAirport
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
                                item.airportCode == items.inBound[0].toAirport
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
                                item.airportCode == items.inBound[1].fromAirport
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
                                item.airportCode == items.inBound[1].toAirport
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
                                item.airportCode == items.inBound[0].fromAirport
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
                                item.airportCode == items.inBound[0].toAirport
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
      </Box>
