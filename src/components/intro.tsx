import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";

function Intro() {
  return (
    <div>
      <h1>Li Fengyu</h1>
      <p>I am a first-year computer science student at Cornell University.</p>
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
