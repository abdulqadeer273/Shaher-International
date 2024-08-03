"use client";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import logo from "../../assets/images/logo.png"; 
import Image from "next/image";
const HeaderNavbar = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navbarColor, setNavbarColor] = useState("black");
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [serviceNo, setServiceNo] = useState(1);
  const handleServiceChange = () => {
    if (serviceNo !== 5) {
      setServiceNo(serviceNo + 1);
    } else {
      setServiceNo(1);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBackground("#e6e9ea");
        setNavbarColor("black");
      } else {
        setNavbarBackground("transparent");
        setNavbarColor("black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ zIndex: 2 }}>
      <Navbar
        className={`navbar ${isScrollDown ? "scroll-down" : ""}`}
        style={{ backgroundColor: navbarBackground, color: navbarColor }}
      >
        <Container className="nav-items">
          {/* <Navbar.Brand>
                        <Link href="/home" className='brand'><Image src={logo} alt='not found' style={{ width: "5rem", height: "5rem" }} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle /> */}
          <Navbar.Collapse
          className="nav-font"
            style={{ justifyContent: "center" }}
          >
            <Link
              href="/home"
              className="nav-link mx-2"
              //   style={{ color: "#452228" }}
              style={{ color: "currentcolor" }}
            >
              Home
            </Link>
            <Link
              href={`#service${serviceNo}`}
              className="nav-link mx-2"
              //   style={{ color: "#452228" }}
              style={{ color: "currentcolor" }}
              onClick={handleServiceChange}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="nav-link mx-2"
              //   style={{ color: "#452228" }}
              style={{ color: "currentcolor" }}
            >
              Products
            </Link>
            <Link
              href="#quote"
              className="nav-link mx-2"
              style={{ color: "currentcolor" }}
            >
              Quote
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
