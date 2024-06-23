import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../../assets/images/ishant-mishra-napAS8Izafs-unsplash.jpg";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const DutyCalculationsForm = ({targetRef}) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="section6">
      <div className="front-full-quote front-full-story featured1">
        <div className="front-shade-needed"></div>
        <Image
          width="3346"
          height="1878"
          alt="not found"
          src={image1}
          style={{ mixBlendMode: "multiply" }}
        />
        <div
          className="front-full-inner-quote"
          id="quote"
          style={{ scrollMarginTop: "4rem" }}
          ref={targetRef}
        >
          <div className="font-full-inner-content front-story">
            <div className="my-5 " style={{ color: "ghostwhite" }}>
              <div className="text-center">
                <h1>Free Duty Calculations</h1>
                <p className="my-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used <br />
                  to demonstrate the visual form of a document.{" "}
                </p>
              </div>
              <div className="">
                <div className="">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3 ">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                        className=""
                      >
                        <Form.Label className="opposite-color">
                          HS Code
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="#########"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid HS Code.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label className="opposite-color">
                          Net Weight
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Net Weight"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Net Weight.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label className="opposite-color">
                          Pcs / Quantity
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Quantity"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Pcs.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom02"
                      >
                        <Form.Label className="opposite-color">
                          Value
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Value"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Value.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label className="opposite-color">
                          Email
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            @
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please choose a Email.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom03"
                      >
                        <Form.Label className="opposite-color">
                          Phone
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Phone.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label className="opposite-color">Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Name.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom05"
                      >
                        <Form.Label className="opposite-color">
                          Company Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Company Name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Company Name.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label className="opposite-color">
                          Description
                        </Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          rows={3}
                          placeholder="Description"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Description.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <div className="text-center my-5">
                      <Button className="btn btn-light" type="submit">
                        Request a Quote
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DutyCalculationsForm;
