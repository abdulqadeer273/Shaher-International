import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../../assets/images/ishant-mishra-napAS8Izafs-unsplash.webp";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import CurrencyAmountInput from "./CurrencyAmountInput";
import PhoneInputWithCountryCode from "./PhoneInputWithCountryCode";
const DutyCalculationsForm = ({ targetRef }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [formData, setFormData] = useState({
    hsCode: "",
    netWeight: "",
    quantity: "",
    value: "",
    email: "",
    phone: "",
    name: "",
    companyName: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(formData)
  };
  function handleHsCodeInput(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ""); // Remove non-digit characters
    const formattedValue =
      value.slice(0, 4) + (value.length > 4 ? "." + value.slice(4, 8) : "");
    setFormData((prevData) => ({
      ...prevData,
      hsCode: formattedValue,
    }));
  }
  const handleWeightInput = (event) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^0-9.]/g, "");

    // Check if the filtered value is valid
    const isValid = /^\d*\.?\d*$/.test(filteredValue);
    if (!isValid) {
      event.target.setCustomValidity("Please enter a valid number");
    } else {
      event.target.setCustomValidity("");
    }

    setFormData((prevData) => ({
      ...prevData,
      netWeight: filteredValue,
    }));
  };
  const handleQuantityInput = (event) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^0-9]/g, "");

    // Check if the filtered value is a valid positive integer
    const isValid = /^[1-9]\d*$/.test(filteredValue);

    if (!isValid && filteredValue !== "") {
      event.target.setCustomValidity("Please enter a valid positive integer");
    } else {
      event.target.setCustomValidity("");
    }
    setFormData((prevData) => ({
      ...prevData,
      quantity: filteredValue,
    }));
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
                          type="text"
                          placeholder="####.####"
                          pattern="^\d{4}\.\d{4}$"
                          onInput={handleHsCodeInput}
                          name="hsCode"
                          value={formData.hsCode}
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
                          Net Weight (KG)
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Net Weight"
                          pattern="^\d*\.?\d*$"
                          name="netWeight"
                          onInput={handleWeightInput}
                          value={formData.netWeight}
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
                          type="text"
                          placeholder="Quantity"
                          pattern="^[1-9]\d*$"
                          name="quantity"
                          onInput={handleQuantityInput}
                          value={formData.quantity}
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
                        {/* <Form.Control
                          required
                          type="text"
                          placeholder="Value"
                        /> */}

                        <CurrencyAmountInput
                          setFormData={setFormData}
                          isInvalid={isInvalid}
                          value={formData.value}
                        />
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                        <PhoneInputWithCountryCode
                          setFormData={setFormData}
                          value={formData.phone}
                          isInvalid={isInvalid}
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
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          name="name"
                          minLength={3}
                          value={formData.name}
                          onChange={handleChange}
                        />
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
                          minLength={3}
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
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
                          minLength={3}
                          as="textarea"
                          rows={3}
                          placeholder="Description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
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
