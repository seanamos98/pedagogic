import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock } from "@fortawesome/free-regular-svg-icons/faHandRock";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <section>
              <h5 className=" pt-4 text-uppercase">About Us</h5>
              <p>
                Our mission is to revolutionize the way people learn by creating
                an engaging contents and also make the learning process
                enjoyable.
              </p>
            </section>
          </Col>
          <Col md={3}>
            <section>
              <h5 className=" pt-4 text-uppercase">more information</h5>
              <ul className="list-group">
                <li className="list-group-item">Contact Us</li>
                <li className="list-group-item">News</li>
                <li className="list-group-item">Careers</li>
                <li className="list-group-item">
                  Harrow School Online Ownership
                </li>
                <li className="list-group-item">Harrow School</li>
                <li className="list-group-item">Harrow School Short Courses</li>
              </ul>
            </section>
          </Col>
          <Col md={3}>
            <section>
              <h5 className=" pt-4 text-uppercase">Key Policies</h5>
              <ul className="list-group">
                <li className="list-group-item">Private Policies</li>
                <li className="list-group-item">Cookies Policies</li>
                <li className="list-group-item">Terms of Use</li>
                <li className="list-group-item">Accessibility</li>
                <li className="list-group-item">Modern Slavery</li>
                <li className="list-group-item">Courses Update</li>
              </ul>
            </section>
          </Col>
          <Col md={3}>
            <section>
              <h5 className=" pt-4 text-uooercase">How To Apply</h5>
              <ul className="list-group">
                <li className="list-group-item">Admission Criteria</li>
                <li className="list-group-item">Application Process</li>
                <li className="list-group-item">Key Admissions Dates</li>
                <li className="list-group-item">Admission Guideline</li>
                <li className="list-group-item">Fees and Scholarship</li>
                <li className="list-group-item">Contact Us</li>
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark">
        <Container>
          <div className=" text-light d-flex justify-content-between">
            <p className="text-uppercase">connect with us</p>

            <div className=" ">
              <a href="https://facebook.com">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="icon-footer mr-4 "
                />
              </a>
              <a href="https://linkedin.com">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="icon-footer  mr-4"
                />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="icon-footer mr-4"
                />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon-footer mr-4 "
                />
              </a>
            </div>
          </div>

          <div className="pinnacle">
            <p className="text-light text-center font-weight-light pl-4 pt-3">
              powered by
            </p>
            <div className="d-flex ">
              <FontAwesomeIcon icon={faHandRock} className="icon" />
              <p className="text-light text-center font-weight-bold  px-1">
                pinnacle
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
