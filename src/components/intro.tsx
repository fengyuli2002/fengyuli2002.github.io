import React from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";
import photo from "../public/photo.jpg";
import cv from "../public/cv/aux/main.pdf";

function Intro() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8}>
          <h1>
            <strong>Fengyu Li</strong>
          </h1>
          <p>
            I'm a first-year undergraduate student at Cornell University
            studying computer science and mathematics. My coursework focuses on
            various aspects of machine learning models and systems. This summer,
            I will be advised by{" "}
            <a href="https://sdean.website/">Prof. Sarah Dean</a> on a project
            that studies the performance of recommender systems when there's
            bias in the dataset, e.g. under NMAR condition.
          </p>
          <p>I'm a teaching assistant of CS 2110 for Spring 2022.</p>
        </Col>
        <Col xs={6} md={4}>
          <img src={photo} alt="" className="photo" />
          <p className="photo">Tree hole and me, 2022</p>
        </Col>
      </Row>
      <Row>
        <p>
          <em>
            I'm looking for a research opportunity in machine learning for fall
            2022.
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
          <Breadcrumb.Item href={cv}>[CV]</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
    </Container>
  );
}

export default Intro;
