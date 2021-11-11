import React, { useState } from "react";
import { Accordion, InputGroup, Form } from "react-bootstrap";
import items from "../Alldata";
import 'font-awesome/css/font-awesome.min.css';
import { faClock,faTwitter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Aside() {
  const [menuItem, setMenuItem] = useState(items);
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < menuItem.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <aside className="aside">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 border border-1 p-3 mb-3">
          <div className="border-bottom border-1 py-2 mb-1">
              <i className="fa fa-search"></i>
            <input
              className="border-0 input-searcing"
              placeholder="Start Searching"
            />
          </div>
          <div className="mb-1">
            <p className="text-uppercase">Job</p>
            <input className="form-control" placeholder="Job title" />
          </div>
          <div className="mb-1">
            <p className="text-uppercase">location</p>
            <input className="form-control" placeholder="location" />
          </div>
          <div className="mb-3">
            <p className="text-uppercase">Category</p>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Category</option>
              <option value="1">Full time</option>
              <option value="2">Part time</option>
              <option value="3">Freelance</option>
            </select>
          </div>
          <Accordion defaultActiveKey="0" className="mb-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Contract type</Accordion.Header>
              <Accordion.Body>
                <InputGroup className="mb-2">
                  <Form.Check
                    aria-label="Checkbox for following text input"
                    label="Fixed-price contract"
                  />
                </InputGroup>
                <InputGroup className="mb-2">
                  <Form.Check
                    aria-label="Checkbox for following text input"
                    label="Voluntary Work"
                  />
                </InputGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Specialisms</Accordion.Header>
              <Accordion.Body>
                <InputGroup className="mb-2">
                  <Form.Check
                    aria-label="Checkbox for following text input"
                    label="Front-End"
                  />
                </InputGroup>
                <InputGroup className="mb-2">
                  <Form.Check
                    aria-label="Checkbox for following text input"
                    label="Back-end"
                  />
                </InputGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <input
            type="button"
            value="SEARCH"
            className="btn btn-dark mt-2 d-block w-50 text-center m-auto"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-12 border border-1 pb-2">
          <div className="overflow-hidden">
            <h2>Featured Jobs</h2>
            <div
              style={{
                height: "100%",
                transition: "all 1.5s ease",
                transform: `translateX(${slideIndex * -100}%)`,
              }}
            //   slideIndex={slideIndex}
            >
              <div className="d-flex">
                {menuItem.map((item) => (
                  <div className="col-12" key={item.id}>
                    <div className="card-head">
                      <img
                        src="./images/pexels.jpg"
                        className="img-fluid rounded-1"
                      />
                      <span>{item.jobType}</span>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={item.image} width="45" />
                        <p>{item.jobTitle}</p>
                      </div>
                      <div className="ps-5">
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature
                        </p>
                        <div className="d-flex justify-content-between">
                          <span>{item.location}</span>
                          <span><FontAwesomeIcon icon={faClock} />  {item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <button
                  className="btn btn-secondary"
                  
                  onClick={() => handleClick("left")}
                >
                  {"<"}
                </button>
                <button
                  className="btn btn-secondary ms-2"
                  data-testid="button-next"
                  onClick={() => handleClick("right")}
                >
                  {">"}
                </button>
              </div>
              <div>
                <button className="btn btn-primary">APPLY FOR THIS JOB</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
