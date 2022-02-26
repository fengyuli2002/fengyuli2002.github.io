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
            majoring in computer science and mathematics. My coursework focus on
            various aspects of machine learning models and systems and their
            application on natural language processing. This semester I'm
            working under the Cornell NLP group supervised by Prof. Claire
            Cardie. Details about my research will be updated soon.
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
            I'm looking for a summer research in the field of machine learning.
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
