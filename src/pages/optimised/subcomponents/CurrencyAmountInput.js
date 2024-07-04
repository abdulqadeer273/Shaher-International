import React, { useState } from "react";
import { Form, InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

const currencyOptions = [
  { value: "USD", label: "$" }, // US Dollar
  { value: "EUR", label: "€" }, // Euro
  { value: "GBP", label: "£" }, // British Pound
  { value: "JPY", label: "¥" }, // Japanese Yen
  { value: "AUD", label: "A$" }, // Australian Dollar
  { value: "CAD", label: "C$" }, // Canadian Dollar
  { value: "CHF", label: "CHF" }, // Swiss Franc
  { value: "CNY", label: "¥" }, // Chinese Yuan
  { value: "SEK", label: "kr" }, // Swedish Krona
  { value: "NZD", label: "NZ$" }, // New Zealand Dollar
  { value: "MXN", label: "Mex$" }, // Mexican Peso
  { value: "SGD", label: "S$" }, // Singapore Dollar
  { value: "HKD", label: "HK$" }, // Hong Kong Dollar
  { value: "NOK", label: "kr" }, // Norwegian Krone
  { value: "KRW", label: "₩" }, // South Korean Won
  { value: "TRY", label: "₺" }, // Turkish Lira
  { value: "RUB", label: "₽" }, // Russian Ruble
  { value: "INR", label: "₹" }, // Indian Rupee
  { value: "BRL", label: "R$" }, // Brazilian Real
  { value: "ZAR", label: "R" }, // South African Rand
  { value: "PLN", label: "zł" }, // Polish Zloty
  { value: "PHP", label: "₱" }, // Philippine Peso
  { value: "CZK", label: "Kč" }, // Czech Koruna
  { value: "IDR", label: "Rp" }, // Indonesian Rupiah
  { value: "HUF", label: "Ft" }, // Hungarian Forint
  { value: "ILS", label: "₪" }, // Israeli New Shekel
  { value: "MYR", label: "RM" }, // Malaysian Ringgit
  { value: "THB", label: "฿" }, // Thai Baht
  { value: "VND", label: "₫" }, // Vietnamese Dong
  { value: "NGN", label: "₦" }, // Nigerian Naira
  { value: "PKR", label: "₨" }, // Pakistani Rupee
  { value: "EGP", label: "£" }, // Egyptian Pound
  { value: "BDT", label: "৳" }, // Bangladeshi Taka
  { value: "UAH", label: "₴" }, // Ukrainian Hryvnia
  { value: "CLP", label: "CLP$" }, // Chilean Peso
  { value: "SAR", label: "﷼" }, // Saudi Riyal
  { value: "AED", label: "د.إ" }, // United Arab Emirates Dirham
  { value: "COP", label: "COP$" }, // Colombian Peso
  { value: "ARS", label: "AR$" }, // Argentine Peso
  { value: "KWD", label: "KD" }, // Kuwaiti Dinar
  { value: "QAR", label: "QR" }, // Qatari Riyal
  { value: "OMR", label: "OMR" }, // Omani Rial
  { value: "LKR", label: "Rs" }, // Sri Lankan Rupee
  { value: "DZD", label: "دج" }, // Algerian Dinar
  { value: "MAD", label: "د.م." }, // Moroccan Dirham
  // Add more currencies as needed
];

const CurrencyAmountInput = ({isInvalid}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const [amount, setAmount] = useState("");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and decimal point
    setAmount(value);
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
          value={amount}
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
          {currencyOptions.map((currency) => (
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

export default CurrencyAmountInput;
