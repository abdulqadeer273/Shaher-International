import Header from '@/layout/header/Header'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
const Quote = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className='qsection1' style={{ backgroundColor: "rgb(247 247 247)" }}>
                <Header />
                <div className='m-5 ' style={{ color: "ghostwhite" }}>
                    <div className='text-center'>
                        <h1>Free Duty Calculations</h1>
                        <p className='my-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used <br />to demonstrate the visual form of a document. </p>
                    </div>
                    <div className='container' >
                        <div className='card m-5 p-5'>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label className=''>HS Code</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="#########"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid HS Code.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Net Weight</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Net Weight"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Net Weight.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Pcs / Quantity</Form.Label>
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
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Value</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Value"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Value.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className='mb-3' as={Col} md="12" controlId="validationCustom02">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea" rows={3}
                                            placeholder="Description"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Description.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Phone" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Phone.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="text" placeholder="Company Name" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Company Name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <div className='text-center my-5'>
                                    <Button className='btn btn-dark' type="submit">Request a Quote</Button>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
                <div style={{ backgroundColor: "white", alignItems: 'center', textAlign: "center", paddingBottom: "2rem", paddingTop: "2rem" }}>
                    <h3 className='my-5' style={{ color: 'black' }}>Our Happy Clients</h3>
                    <div className='d-flex justify-content-evenly'>
                        <img src={"https://cdn.icon-icons.com/icons2/2845/PNG/512/ikea_logo_icon_181297.png"} width={130} height={130} />
                        <img className='mt-4' src={"https://simpleicon.com/wp-content/uploads/yahoo1.png"} width={70} height={70} />
                        <img className='mt-4' src={"https://www.svgrepo.com/show/50809/google.svg"} width={70} height={70} />
                        <img className='mt-4' src={"https://static-00.iconduck.com/assets.00/godaddy-icon-512x456-pjakb0ub.png"} width={70} height={70} />
                    </div>
                </div>
                <div className='row' style={{ alignItems: 'center', padding: "5rem", paddingBottom: "16rem", height: "50vh", color: "white", backgroundColor: "black" }}>
                    <div className='row' >
                        <div className='col-3'>
                            <div className='d-grid'>
                                <h5 className='mb-3'>Contact Us</h5>
                                <span className='mb-1'>+9233131233132</span>
                                <span className='mb-1'>info@gmail.com</span>
                                <span className='mb-4'>25 st multan road lahore</span>
                                <div>
                                    <span className='me-2'><BsFacebook /></span>
                                    <span className='me-2'><BsGithub /></span>
                                    <span className='me-2'><BsTwitter /></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 d-grid'>
                            <h5>Popular Services</h5>
                            <span className='mb-1'>service 1</span>
                            <hr />
                            <span className='mb-1'>service 2</span>
                            <hr />
                            <span className='mb-1'>service 3</span>
                            <hr />
                        </div>
                        <div className='col-3 d-grid'>
                            <h5>Emergency Tips</h5>
                            <span className='mb-1'>Emergency tip 1</span>
                            <hr />
                            <span className='mb-1'>Emergency tip 2</span>
                            <hr />
                            <span className='mb-1'>Emergency tip 3</span>
                            <hr />
                        </div>
                        <div className='col-3'>
                            <h5>Emergency Services</h5>
                            <span>+92331324234234</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quote
