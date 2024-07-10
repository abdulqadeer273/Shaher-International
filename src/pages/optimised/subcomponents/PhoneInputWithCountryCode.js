import React, { useState } from "react";
import { Form, InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

const phoneNumberOptions = [
  { value: "USD", label: "+1" }, // United States Dollar
  { value: "GBP", label: "+44" }, // British Pound
  { value: "JPY", label: "+81" }, // Japanese Yen
  { value: "AUD", label: "+61" }, // Australian Dollar
  { value: "CAD", label: "+1" }, // Canadian Dollar
  { value: "CHF", label: "+41" }, // Swiss Franc
  { value: "CNY", label: "+86" }, // Chinese Yuan
  { value: "SEK", label: "+46" }, // Swedish Krona
  { value: "NZD", label: "+64" }, // New Zealand Dollar
  { value: "MXN", label: "+52" }, // Mexican Peso
  { value: "SGD", label: "+65" }, // Singapore Dollar
  { value: "HKD", label: "+852" }, // Hong Kong Dollar
  { value: "NOK", label: "+47" }, // Norwegian Krone
  { value: "KRW", label: "+82" }, // South Korean Won
  { value: "TRY", label: "+90" }, // Turkish Lira
  { value: "RUB", label: "+7" }, // Russian Ruble
  { value: "INR", label: "+91" }, // Indian Rupee
  { value: "BRL", label: "+55" }, // Brazilian Real
  { value: "ZAR", label: "+27" }, // South African Rand
  { value: "PLN", label: "+48" }, // Polish Zloty
  { value: "PHP", label: "+63" }, // Philippine Peso
  { value: "CZK", label: "+420" }, // Czech Koruna
  { value: "IDR", label: "+62" }, // Indonesian Rupiah
  { value: "HUF", label: "+36" }, // Hungarian Forint
  { value: "ILS", label: "+972" }, // Israeli New Shekel
  { value: "MYR", label: "+60" }, // Malaysian Ringgit
  { value: "THB", label: "+66" }, // Thai Baht
  { value: "VND", label: "+84" }, // Vietnamese Dong
  { value: "NGN", label: "+234" }, // Nigerian Naira
  { value: "PKR", label: "+92" }, // Pakistani Rupee
  { value: "EGP", label: "+20" }, // Egyptian Pound
  { value: "BDT", label: "+880" }, // Bangladeshi Taka
  { value: "UAH", label: "+380" }, // Ukrainian Hryvnia
  { value: "CLP", label: "+56" }, // Chilean Peso
  { value: "SAR", label: "+966" }, // Saudi Riyal
  { value: "AED", label: "+971" }, // United Arab Emirates Dirham
  { value: "COP", label: "+57" }, // Colombian Peso
  { value: "ARS", label: "+54" }, // Argentine Peso
  { value: "KWD", label: "+965" }, // Kuwaiti Dinar
  { value: "QAR", label: "+974" }, // Qatari Riyal
  { value: "OMR", label: "+968" }, // Omani Rial
  { value: "LKR", label: "+94" }, // Sri Lankan Rupee
  { value: "DZD", label: "+213" }, // Algerian Dinar
  { value: "MAD", label: "+212" }, // Moroccan Dirham
];

const PhoneInputWithCountryCode = ({ isInvalid, value, setFormData }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    phoneNumberOptions[0]
  );

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleAmountChange = (event) => {
    const desiredValue = event.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and decimal point
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
          {selectedCurrency.label}
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
          title={selectedCurrency.value}
          id="input-group-dropdown-1"
        >
          {phoneNumberOptions.map((currency) => (
            <Dropdown.Item
              key={currency.value}
              onClick={() => handleCurrencyChange(currency)}
            >
              {currency.value}
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
