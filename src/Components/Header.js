import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import 'font-awesome/css/font-awesome.min.css';
export default function Header() {
  const [key, setKey] = useState("find job");
  return (
    <>
      <header
        className="header d-flex align-items-end mb-5"
        style={{ backgroundImage: "url(./images/map.jpg)" }}
      >
        <div className="container">
          <Tabs
            className="d-flex"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            id="noanim-tab-example"
          >
            <Tab eventKey="find job" title="find job">
              <div className="row tab-job align-items-end ">
                <div className="col-12  col-sm-6 col-lg-3">
                  <p className="fw-bolder">JOB</p>
                  <input
                    className="form-control"
                    placeholder="job title keywords"
                  />
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mt-2 mt-sm-0">
                  <p className="fw-bolder">LOCATION</p>
                  <input
                    className="form-control"
                    placeholder="City Province or Region"
                  />
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mt-2 mt-lg-0">
                  <p className="fw-bolder">CATEGORY</p>
                  <select className="form-select">
                    <option defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center text-lg-start mt-2 mt-sm-0">
                  <input
                    type="button"
                    className="btn btn-dark px-5"
                    value="SEARCH"
                  />
                </div>
              </div>
            </Tab>

            <Tab eventKey="Find Resume" title="Find Resume">
              <div className="row tab-job align-items-end ">
                <div className="col-12  col-sm-6 col-lg-3">
                  <p className="fw-bolder">First Name</p>
                  <input className="form-control" placeholder="First Name" />
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mt-2 mt-lg-0">
                  <p className="fw-bolder">CATEGORY</p>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Category</option>
                    <option value="1">Full time</option>
                    <option value="2">Part time</option>
                    <option value="3">Freelance</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mt-2 mt-sm-0">
                  <p className="fw-bolder">LOCATION</p>
                  <input className="form-control" placeholder="Location" />
                </div>

                <div className="col-12 col-sm-6 col-lg-3 text-center text-lg-left mt-2 mt-sm-0">
                  <input
                    type="button"
                    className="btn btn-dark px-5"
                    value="SEARCH"
                  />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </header>
    </>
  );
}
