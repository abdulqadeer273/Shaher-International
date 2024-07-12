require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const {
    hsCode,
    netWeight,
    quantity,
    value,
    email,
    phone,
    name,
    companyName,
    description,
  } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.shaherintl.com",
    port: "465",
    secure: true,
    auth: {
      user: "osama@shaherintl.com",
      pass: "Osama@shaher1234",
    },
  });

  const mailOptions = {
    from: "osama@shaherintl.com",
    to: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}\nHsCode: ${hsCode}\nQuantity: ${quantity}\nValue: ${value}\nPhone: ${phone}\nCompanyName: ${companyName}\nNetWeight: ${netWeight}`,
  };
  console.log(mailOptions,'mailOptions');
  console.log(transporter,'transporter');
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
