import React, { useState } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import contacts from '../assests/img/gallery2/contact_form.png'
import './Contacts.css'

const Contacting = () => {
    const [contactData, setContactData] = useState({});
    const [errorMsg, setErrorMsg] = useState();
    const [successMsg, setSuccessMsg] = useState(false);

    const isValidEmail = (email) => {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    };

    const isValidMobile = (mobileno) => {
        return /^[6-9]\d{9}$/.test(mobileno);
    };

    const validateField = (field, value) => {
        if (value.length <= 0) {
            return (
                <>
                    <span className="text-capitalize">{field}</span> is required field.
                </>
            );
        } else {
            if (field === "email") {
                if (!isValidEmail(value)) return "Invalid Email.";
            } else if (field === "mobile") {
                if (!isValidMobile(value)) return "Invalid Mobile Number.";
            } else {
                return "";
            }
        }
    };

    const handleBlur = (event) => {
        setErrorMsg(validateField(event.target.name, event.target.value));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContactData({
            ...contactData,
            [name]: value
        });

        if (name === "mobile") {
            setContactData({
                ...contactData,
                mobile: value.replace(/\D/, "")
            });
        }
    };

    const handleSubmit = (e) => {
        let isValided = false;
        e.preventDefault();

        if (
            contactData.name === "" ||
            contactData.name === undefined ||
            contactData.mobile === "" ||
            contactData.mobile === undefined ||
            contactData.email === "" ||
            contactData.email === undefined ||
            contactData.company === "" ||
            contactData.company === undefined ||
            contactData.message === "" ||
            contactData.message === undefined
        ) {
            setSuccessMsg(false);
            isValided = false;
        } else {
            setSuccessMsg(true);
            isValided = true;
        }
        return isValided;
    };

    return (
        <>
            <Container fluid className="p-0 mb-3">
                <Row>
                    <Col md={6}>
                        <img className="contactpic" src={contacts}/>
                    </Col>
                    <Col md={6}>
                        <div id="contact">
                            <div className="form">
                                <form
                                    onSubmit={handleSubmit}
                                    encType="multipart/form-data"
                                    autoComplete="off"
                                >
                                    {!successMsg ? (
                                        <>
                                            <div id="errormessage" className={errorMsg ? "show" : ""}>
                                                {errorMsg}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control mb-3"
                                                    placeholder="Name"
                                                    value={contactData.name || ""}
                                                    onChange={(e) => handleChange(e)}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="mobile"
                                                    type="text"
                                                    maxLength={10}
                                                    className="form-control mb-3"
                                                    placeholder="Mobile"
                                                    onBlur={handleBlur}
                                                    value={contactData.mobile || ""}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="company"
                                                    type="text"
                                                    className="form-control mb-3"
                                                    placeholder="Company"
                                                    value={contactData.company || ""}
                                                    onChange={(e) => handleChange(e)}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control mb-3"
                                                    placeholder="Email"
                                                    value={contactData.email || ""}
                                                    onChange={(e) => handleChange(e)}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    type="text"
                                                    className="form-control mb-3"
                                                    placeholder="Message"
                                                    value={contactData.message || ""}
                                                    onChange={(e) => handleChange(e)}
                                                    onBlur={handleBlur}
                                                    rows="3"
                                                />
                                            </div>
                                            <p className="text-right mb-0">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    value="Submit Now"
                                                />
                                            </p>
                                        </>
                                    ) : (
                                        <div className="show" id="sendmessage">
                                            Thank for your message. We will contact you soon.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>

    );
};

export default Contacting;
