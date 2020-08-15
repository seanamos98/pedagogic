import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons/faBookReader";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";

import { Container, Button, Image, Carousel } from "react-bootstrap";

const Home = () => {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="students10.jpg"
            alt="showing pedagog "
          />
          <Carousel.Caption className="bg-dark">
            <p> extracurricular opportunities</p>
            <FontAwesomeIcon icon={faBook} className="icon" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="student11.jpg"
            alt="showing pedagog "
          />

          <Carousel.Caption className="bg-dark">
            <p> request for our prospectus</p>
            <FontAwesomeIcon icon={faBook} className="icon" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="carol.jpg"
            alt="showing pedagog "
          />

          <Carousel.Caption className="bg-dark">
            <p>meet the head of department, heather rhodes</p>
            <FontAwesomeIcon icon={faBook} className="icon" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <React.Fragment>
      <section className="showcase">
        <Container>
          <div>
            <div className="pedagog-logo">
              <FontAwesomeIcon icon={faBookReader} className="icon  " />
              <p className="text-light text-center font-weight-bold ">
                pedagog
              </p>
              <p className="text-light text-center font-weight-light">school</p>

              <p className="text-light text-center border-top border-light">
                <span> online </span>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <main>
        <section className="section-1">
          <Container>
            <h1 className="text-uppercase pt-4">
              an online school where tradition meets innovation
            </h1>
            <p className="lead">
              Pedagog School Online brings together the richnesss and heritage
              of Pedagog School education with leading online learning
              technology and teaching practices. We are fully online global
              sixth form, offering an A Level education to girls and boys aged
              15-21. Specially designed for effective full-time online learning.
            </p>
            <a className="text-capitalize btn " href="/about">
              Learn more today
            </a>
          </Container>
        </section>
        <section className="section-2">
          <Container>
            <div className="box-1">
              <Image
                className="img pt-4"
                src="students15.jpg"
                height="350px"
                width="100%"
                alt="pedagog online school"
              />
              <div className="overlay">
                <h2 className="text-center p-3 text-uppercase">
                  online learning
                </h2>
                <p className="text-center">
                  Our school programme is purpose-built for Students success.
                </p>
                <Button className="btn">read more</Button>
              </div>
            </div>
            <div className="box-1">
              <Image
                src="student9.jpg"
                className="img pt-4"
                height="350px"
                width="100%"
                alt="pedagog online school"
              />
              <div className="overlay">
                <h2 className="text-center pt-3 text-uppercase">
                  admissions advising
                </h2>
                <p className="text-center">
                  Explore Pedagog Online and what it promises for your future.
                </p>
                <Button className="btn">contact us</Button>
              </div>
            </div>

            <div className="box-1">
              <Image
                src="melisa.jpg"
                className="img pt-4"
                width="100%"
                height="350px"
                alt="pedagog online school"
              />
              <div className="overlay">
                <h2 className="text-center p-3 text-uppercase">
                  expert teachers
                </h2>
                <p className="text-center">
                  Experience a taster live lesson with pedagog School Online.
                </p>
                <Button className="btn">register</Button>
              </div>
            </div>
          </Container>
        </section>
        <section className="section-3">
          <Container>
            <h3 className=" text-uppercase pt-4">
              setting your child up for the future
            </h3>
            <p className="">
              Pedagog School Online{" "}
              <strong>
                prepares students for the world's top jobs and beyond,
              </strong>{" "}
              with rigorous academic studies combined with a diverse range of
              extracurricular activities to develop character and foster
              friendships with peers across the world
            </p>
          </Container>
        </section>
        <section className="section-4">
          <Container>
            <ControlledCarousel />
          </Container>
        </section>
        <section className="section-5 pb-4">
          <Container>
            <h4 className=" text-uppercase">
              join us as we set out to revolutionise education
            </h4>
            <p className=" text-capitalize ">
              Accepting Applications Now for Academic Year 2020-21
            </p>
            <Button>
              Go here <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </Button>
          </Container>
        </section>
      </main>
    </React.Fragment>
  );
};
export default Home;
