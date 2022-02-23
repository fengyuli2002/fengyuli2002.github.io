import "./News.css";
import { Container } from "react-bootstrap";

function News() {
  return (
    <Container fluid>
      <h2>
        <strong>News</strong>
      </h2>
      <ul>
        <li>
          <p>Jan 2022 : I completed my first Kaggle competition.</p>
        </li>
        <li>
          <p>
            Oct 2021 : I joined{" "}
            <a href="https://www.cornelldti.org/">
              Cornell Design & Tech Initiative
            </a>{" "}
            and started building full-stack web projects.
          </p>
        </li>
        <li>
          <p>
            Aug 2021 : I began my undergraduate studies at Cornell University!
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default News;
