import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/layout/header/Header";
import image1 from "../../assets/images/ishant-mishra-napAS8Izafs-unsplash.jpg";
import image4 from "../../assets/images/nigel-tadyanehondo-GOD2mDNujuU-unsplash.jpg";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";
import slogo1 from "../../assets/images/slogo1.png";
import slogo2 from "../../assets/images/slogo2.png";
import slogo3 from "../../assets/images/slogo3.png";
import slogo4 from "../../assets/images/slogo4.png";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Footer from "../../layout/footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Badge, Col, Form, InputGroup, Row } from "react-bootstrap";
import Card from "@/components/Card";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import AboutUs from "./subcomponent/AboutUs";
import Scope from "./subcomponent/Scope";
import ImportAirFreight from "./subcomponent/ImportAirFreight";
import ImportOceanFreight from "./subcomponent/ImportOceanFreight";
import TransportationAndLogistics from "./subcomponent/TransportationAndLogistics";
import WarehousingAndDistribution from "./subcomponent/WarehousingAndDistribution";
import DtoDDelivery from "./subcomponent/DtoDDelivery";
const Home = () => {
  const [textPosition, setTextPosition] = useState<number>(0);
  const [validated, setValidated] = useState(false);
  const [isHovered, setIsHovered] = useState(-1);
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const images = [
    // Replace these with your actual image paths
    slider1,
    slider2,
    slider3,
    slider4,
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const FAST_DURATION = 10;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 4 - 8;
    // let finalPosition = -900;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    // return controls.stop;
  }, [xTranslation, width, duration, rerender]);
  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="section1">
        <div className="front-full-video front-full-story featured1">
          <div className="front-shade" style={{ zIndex: "1" }}>
            <Header />
          </div>
          <video autoPlay muted loop>
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="front-full-inner-video justify-content-center"
            style={{ marginTop: "15rem" }}
          >
            <div className="font-full-inner-content front-story">
              <img src="/shaher logo.png" width={700}/>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Scope />
      <ImportAirFreight />
      <ImportOceanFreight />
      <TransportationAndLogistics />
      <WarehousingAndDistribution />
      <DtoDDelivery />
      <div className="section6">
        <div
          className="front-full-quote front-full-story featured1"
        >
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
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used <br />
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
                          <Form.Label className="opposite-color">
                            Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            required
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
      <div
        style={{
          background: "#F0F5F9",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: "2rem",
          paddingTop: "2rem",
        }}
      >
        <p style={{ fontWeight: "bold" }}>
          Worked with leading industries and founders
        </p>
        <div className="d-flex justify-content-evenly">
          <img
            src={
              "https://cdn.icon-icons.com/icons2/2845/PNG/512/ikea_logo_icon_181297.png"
            }
            width={100}
            height={100}
          />
          <img
            className="mt-4"
            src={"https://simpleicon.com/wp-content/uploads/yahoo1.png"}
            width={50}
            height={45}
          />
          <img
            className="mt-4"
            src={"https://www.svgrepo.com/show/50809/google.svg"}
            width={40}
            height={40}
          />
          <img
            className="mt-4"
            src={
              "https://static-00.iconduck.com/assets.00/godaddy-icon-512x456-pjakb0ub.png"
            }
            width={50}
            height={40}
          />
        </div>
      </div>
      <div className="section7">
        <div
          className="front-full-slider front-full-story featured1"
          style={{ backgroundColor: "#1a2d2f" }}
        >
          <div className="front-shade-needed"></div>
          <Image
            width="3346"
            height="1878"
            alt="not found"
            src={image4}
            style={{ mixBlendMode: "multiply" }}
          />
          <div className="front-full-inner-slider">
            <div className="font-full-inner-content front-story">
              {/* <div
                className="py-5"
                style={{
                  overflow: "hidden",
                  backgroundColor: "#12151e",
                  textAlign: "center",
                  height: "100vh",
                }}
              > */}
              <div className="text-center">
                <div className="mb-2">
                  <h2 style={{ color: "white" }}>Maximize your results with</h2>
                  <h2 style={{ color: "white" }}>our core features</h2>
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{
                  // width: "100vw",
                  alignItems: "center",
                  overflow: "hidden",
                  // margin:"4rem"
                }}
              >
                <motion.div
                  style={{
                    // position: "absolute",
                    margin: "3rem",
                    left: 0,
                    display: "flex",
                    gap: 50,
                    x: xTranslation,
                    // cursor: "grab",
                    // overflow: "hidden",
                    justifyContent: "center",
                    borderTop: "1rem solid black",
                    borderBottom: "1rem solid black",

                    backgroundColor: "rgb(143 166 236)",
                    padding: "2rem",
                  }}
                  onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                  }}
                  onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                  }}
                  ref={ref}
                >
                  {[...images, ...images].map((item, idx) => (
                    <Card image={item} key={idx} />
                  ))}
                </motion.div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "rgb(240, 245, 249)",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: "1rem",
          paddingTop: "1rem",
        }}
      >
        {/* <h3 style={{ fontWeight: "bold" }}>
          Affiliations
        </h3> */}
        <div className="d-flex justify-content-evenly">
          <Image src={slogo1} alt="not found" width={110} height={110} />
          <Image src={slogo2} alt="not found" width={110} height={110} />
          <Image src={slogo3} alt="not found" width={130} height={100} />
          <Image src={slogo4} alt="not found" width={100} height={100} />
        </div>
      </div>
      <Footer handleClick={handleClick} />
    </div>
  );
};

export default Home;
