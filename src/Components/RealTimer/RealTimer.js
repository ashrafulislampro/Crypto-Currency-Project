import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./RealTimer.css";
import ProgressBa from "../ProgressBa/ProgressBa.js";

const RealTimer = () => {
  return (
    <Container className="real_main">
      <h2 className="text-center my-5">REAL TIMER HERE</h2>

      <Row xs={1} md={2} lg={2}>
        <Col>
          <div
            className="card real_time-card1"
            style={{
              backgroundColor: "#C9C200",
              borderRadius: "10px",
              padding: "3rem 0",
            }}
          >
            <div className="px-3">
              <div className="text-center text-black">
                <h1>PoorToRich</h1>
                <p>Private sale - Launch Soon</p>
              </div>
              <div className="bg-dark text-white p-2 rounded mt-2">
                <div className="mx-3 mb-4">
                  <span>Buy</span>
                  <span
                    style={{
                      backgroundColor: "#C9C200",
                      float: "right",
                    }}
                    className="rounded-pill p-2 font-weight-bold text-black"
                  >
                    Max
                  </span>
                </div>
                <InputGroup className="mb-3 b-0">
                  <FormControl
                    placeholder="Insert Number"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    className="text-white border-0"
                    variant="outline-secondary"
                    id="button-addon2"
                  >
                    BNB
                  </Button>
                </InputGroup>
              </div>

              <div className="my-4 ">
                <div className="bg-dark text-white p-2 rounded">
                  <h5 className="ms-3">Get</h5>

                  <InputGroup className="mb-3 b-0">
                    <FormControl
                      placeholder="0.00"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      className="text-white border-0"
                      variant="outline-secondary"
                      id="button-addon2"
                    >
                      PTR
                    </Button>
                  </InputGroup>
                </div>
              </div>

              <div className="mt-3">
                <Button className="w-100" variant="dark">
                  Buy$PTR
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col className="real-timer">
          <div className="card real_time-card2 py-4">
            <div>
              <div className="text-center real_hed">
                <strong>Private Sale Round 1/1</strong>
                <br />
                <strong>Is live!</strong>
              </div>
              <h3 className="price my-3">Price of 1 BNB</h3>
              <h3 className="ptr_price">5000 PTR</h3>
            </div>
            <div>
              <ProgressBa />
            </div>
            <div>
              <div>
                <div>
                  <span className="fs-4 font-wight-bold ">0.00</span>
                  <span className="fs-4 font-wight-bold float-end">$PTR</span>
                </div>
                <div className="my-3">
                  <span className="fs-4 font-wight-bold ">$PTR</span>
                  <span className="fs-4 font-wight-bold float-end">
                    200,000.00
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="pt-3">
                <h3 className="price mb-2">200,000.00</h3>
                <span className="price">
                  <span className="fs-3">$PTR</span>{" "}
                  <strong className="text-white">sold</strong>
                </span>
              </div>

              <span className="price">
                <span className="fs-3"> 0.00 $ PTR</span>{" "}
                <span className="text-white">Sold Totally</span>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RealTimer;
