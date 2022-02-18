import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";

function Intro() {
  return (
    <div>
      <h1>Li Fengyu</h1>
      <p>
        I'm a first-year undergraduate student at Cornell University majoring in
        computer science and mathematics. This semester you can find me at the
        first row in the lectures of CS 4780 Intro to ML. I'm strongly
        interested in machine learning systems and deep learning. I'm
        actively looking for research opportunities in these fields.
      </p>
      <p>
        In my spare time, I build softwares on various tech stacks in a
        student-led project team and on my own. I sometimes participate in
        Kaggle competitions. I'm also a piano enthusiast. I mostly play the
        pieces by Chopin.
      </p>
      <p>
        <i>
          My office hours for CS 2110 is every Monday from 16:30 to 18:30 at
          Rhodes 405.
        </i>
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
        <Breadcrumb.Item active>[CV]</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Intro;
