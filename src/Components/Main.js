import React, { useState } from "react";
import Aside from "./Aside";
import items from "../Alldata";
import { NavDropdown} from "react-bootstrap";
import { faClock,faSms,faWarehouse,faChartBar,faCarSide,faKeyboard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
export default function Main() {
  const allCategories = ["All", ...new Set(items.map((item) => item.jobType))];
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);
  const [active, setActive] = useState("");
  console.log(buttons);
  const [key, setKey] = useState("all");
  // console.log(allCategories);
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter((item) => item.jobType === button);
    setMenuItem(filteredData);
  };

  return (
    <main className="main pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="row justify-content-between align-items-center">
              <p className="col-12 col-sm-7 mb-0 text-center text-sm-start">
                we have <span className="text-primary">123</span> potential jobs
                for you
              </p>
              <div className="d-flex col-12 col-sm-5 align-items-center justify-content-center ">
                sort By
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Normal"
                  menuVariant="gray"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
                <span className="text-warning">RSS</span>
              </div>
            </div>
            <div className="bg-light mt-2">
              <div
                className=" d-flex justify-content-center flex-wrap flex-md-nowrap border rounded-2 border-bottom-0 border-1"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                id="noanim-tab-example"
              >
                {buttons.map((tab) => (
                  <button
                    className="buttons btn btn-light ms-1 mt-1 text-uppercase"
                    onClick={() => filter(tab)}
                    key={Math.random()}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="border border-bottom-0 border-1 rounded-2 p-1 pb-0">
              {menuItem.map((item) => (
                <div id="pricing" className="border-bottom border-2 mb-2"  key={item.id}>
                  <div class="part3">
                    <img className="m-auto" src={item.image} width="45" />
                  </div>
                  <div className="part1">
                    <p className="mb-0">{item.jobTitle}</p>
                    <p className="mb-0">{item.location}</p>
                  </div>
                  <div className=" part2">
                    <p className="mb-0">{item.time}</p>
                    <p className="mb-0">{item.jobType}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center bg-light py-2 m-2 ">
              LOAD MORE LISTINGS
            </div>
            <div className="row border-bottom-0 border border-2 rounded-2 m-1 px-1 py-3">
              <div className="col-12 col-md-4">
                <div className="d-flex align-items-center justify-content-around">
                <FontAwesomeIcon icon={faWarehouse} className="d-block fa-2x text-primary"/>
                <p className="text-center text-md-start">
                  Construction {"&"} Build <br />
                  <span>7 open postions</span>
                </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
              <div className="d-flex align-items-center justify-content-around">
                <i className="fa fa-book d-block fa-2x text-primary"></i>
                <p className="text-center text-md-start">
                  Education {"&"} Training <br />
                  <span>22 open postions</span>
                </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
              <div className="d-flex align-items-center justify-content-around">
                {/* <i className="fa fa-book d-block fa-2x text-primary"></i> */}
                <i class="fa fa-heartbeat d-block fa-2x text-primary"></i>
                <p className="text-center text-md-start">
                  Headthcare {"&"} Beauty <br />
                  <span>2 open postions</span>
                </p>
                </div>
              </div>
            </div>
            <div className="row border border-2 py-3 m-1">
              <div className="col-12 col-md-4">
              <div className="d-flex align-items-center justify-content-around">
              <FontAwesomeIcon icon={faChartBar} className="d-block fa-2x text-primary"/>
                <p className="text-center text-md-start">
                  Accounting {"&"} Finance <br />
                  <span>8 open postions</span>
                </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
              <div className="d-flex align-items-center justify-content-around">
              <FontAwesomeIcon icon={faCarSide} className="d-block fa-2x text-primary"/>
                <p className="text-center text-md-start">
                  Cars {"&"} Automotive <br />
                  <span>8 open postions</span>
                </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
              <div className="d-flex align-items-center justify-content-around">
              <FontAwesomeIcon icon={faKeyboard} className="d-block fa-2x text-primary"/>
                <p className="text-center text-md-start">
                  Web Development <br />
                  <span>4 open postions</span>
                </p>
                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-between m-1">
              <div className="col-12 col-md-5 bg-dark text-white pt-0 p-2 rounded-1">
                <div className="border-bottom border-2">
                  <p className="text-center text-md-start  mb-0 p-2">
                  <FontAwesomeIcon icon={faSms} />  Subscribe Our News
                  </p>
                </div>
                <div>
                  <p className="text-center text-md-start p-2">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                  </p>
                  <input
                    className="form-control mb-2 bg-dark text-white input-contact"
                    placeholder="Enter Your Email"
                  />
                  <input
                    className="bg-primary text-white btn d-block w-100"
                    type="button"
                    value="SUBSCRIBE"
                  />
                </div>
              </div>
              <div className="col-12 col-md-5 bg-primary rounded-1 text-white mt-3 mt-md-0 pt-0 p-2">
                <div className="border-bottom border-2">
                  <p className="text-center text-md-start mb-0 p-2">
                  <i className="fa fa-twitter"></i> Subscribe Our News
                  </p>
                </div>
                <div>
                  <span className="bg-dark my-2 d-block w-25 mx-auto mx-md-0 text-center text-md-start">@Details</span>
                  <p className="text-center text-md-start mb-3 p-2">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                  </p>
                  <p className="text-center text-md-start mb-3 p-2">
                  <FontAwesomeIcon icon={faClock} />  8 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 ">
            <Aside />
          </div>
        </div>
      </div>
    </main>
  );
}
