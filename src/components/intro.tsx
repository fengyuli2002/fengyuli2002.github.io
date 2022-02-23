import React from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";
import photo from "../public/photo.jpg";

function Intro() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8}>
          <h1>
            <strong>Li Fengyu</strong>
          </h1>
          <p>
            I'm a first-year undergraduate student at Cornell University
            majoring in computer science and mathematics. My current semester
            coursework includes machine learning, analysis of algorithms,
            probability models, and functional programming. I'm strongly
            interested in machine learning systems and deep learning. I'm
            actively looking for research opportunities in these fields.
          </p>
          <p>
            In my spare time, I build softwares on various tech stacks in a
            student-led project team and on my own. I sometimes participate in
            Kaggle competitions. I'm also a piano enthusiast. I mostly play the
            pieces by Chopin.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <img src={photo} alt="" className="photo" />
        </Col>
      </Row>
      <Row>
        <p>
          <em>
            My office hours for CS 2110 is every Monday from 16:30 to 18:30 at
            Rhodes 405.
          </em>
        </p>
        <Breadcrumb>
          <Breadcrumb.Item href="mailto:fl334@cornell.edu">
            [Email: fl334@cornell.edu]
          </Breadcrumb.Item>
          {/* <Breadcrumb.Item href="#">Google Scholar</Breadcrumb.Item> */}
          <Breadcrumb.Item href="https://github.com/fengyuli2002">
            [GitHub]
          </Breadcrumb.Item>
          <Breadcrumb.Item href="https://www.linkedin.com/in/fengyuli">
            [LinkedIn]
          </Breadcrumb.Item>
          <Breadcrumb.Item active>[CV under construction]</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
    </Container>
  );
}

export default Intro;
