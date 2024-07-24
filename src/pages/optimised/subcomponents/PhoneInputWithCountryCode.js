import React, { useState } from "react";
import { Form, InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

const phoneNumberOptions = [
  { value: "AE", label: "+971" }, // United Arab Emirates
  { value: "AR", label: "+54" }, // Argentina
  { value: "AU", label: "+61" }, // Australia
  { value: "BD", label: "+880" }, // Bangladesh
  { value: "BR", label: "+55" }, // Brazil
  { value: "CA", label: "+1" }, // Canada
  { value: "CH", label: "+41" }, // Switzerland
  { value: "CL", label: "+56" }, // Chile
  { value: "CN", label: "+86" }, // China
  { value: "CO", label: "+57" }, // Colombia
  { value: "CZ", label: "+420" }, // Czech Republic
  { value: "DE", label: "+49" }, // Germany
  { value: "DZ", label: "+213" }, // Algeria
  { value: "EG", label: "+20" }, // Egypt
  { value: "GB", label: "+44" }, // United Kingdom
  { value: "HK", label: "+852" }, // Hong Kong
  { value: "HU", label: "+36" }, // Hungary
  { value: "ID", label: "+62" }, // Indonesia
  { value: "IL", label: "+972" }, // Israel
  { value: "IN", label: "+91" }, // India
  { value: "JP", label: "+81" }, // Japan
  { value: "KR", label: "+82" }, // South Korea
  { value: "KW", label: "+965" }, // Kuwait
  { value: "LK", label: "+94" }, // Sri Lanka
  { value: "MA", label: "+212" }, // Morocco
  { value: "MX", label: "+52" }, // Mexico
  { value: "MY", label: "+60" }, // Malaysia
  { value: "NG", label: "+234" }, // Nigeria
  { value: "NO", label: "+47" }, // Norway
  { value: "NZ", label: "+64" }, // New Zealand
  { value: "OM", label: "+968" }, // Oman
  { value: "PH", label: "+63" }, // Philippines
  { value: "PK", label: "+92" }, // Pakistan
  { value: "PL", label: "+48" }, // Poland
  { value: "QA", label: "+974" }, // Qatar
  { value: "RU", label: "+7" }, // Russia
  { value: "SA", label: "+966" }, // Saudi Arabia
  { value: "SE", label: "+46" }, // Sweden
  { value: "SG", label: "+65" }, // Singapore
  { value: "TH", label: "+66" }, // Thailand
  { value: "TR", label: "+90" }, // Turkey
  { value: "UA", label: "+380" }, // Ukraine
  { value: "US", label: "+1" }, // United States
  { value: "VN", label: "+84" }, // Vietnam
  { value: "ZA", label: "+27" }, // South Africa
];


const PhoneInputWithCountryCode = ({ isInvalid, value, setFormData,selectedCode,setSelectedCode }) => {

  const handleCurrencyChange = (currency) => {
    setSelectedCode(currency);
  };

  const handleAmountChange = (event) => {
    const desiredValue = event.target?.value.replace(/[^0-9.]/g, ""); // Allow only numbers and decimal point
    setFormData((prevData) => ({
      ...prevData,
      phone: desiredValue,
    }));
  };

  return (
    <>
      <div style={{ position: "relative", display: "flex" }}>
        <InputGroup.Text
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
          }}
        >
          {selectedCode?.label}
        </InputGroup.Text>
        <Form.Control
          type="text"
          value={value}
          onChange={handleAmountChange}
          placeholder="Enter number"
          style={{ borderRadius: 0, border: 0 }}
          required
          isInvalid={isInvalid} // Add this line to control when to show feedback
        />
        <DropdownButton
          as={InputGroup.Append}
          variant="light"
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          title={selectedCode?.value}
          id="input-group-dropdown-1"
        >
          {phoneNumberOptions.map((currency) => (
            <Dropdown.Item
              key={currency?.value}
              onClick={() => handleCurrencyChange(currency)}
            >
              {currency?.value}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Form.Control.Feedback
          type="invalid"
          style={{ position: "absolute", top: "100%", left: 0 }}
        >
          Please provide a valid amount.
        </Form.Control.Feedback>
      </div>
    </>
  );
};

export default PhoneInputWithCountryCode;
