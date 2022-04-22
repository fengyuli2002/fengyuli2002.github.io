import "./news.css";
import { Container } from "react-bootstrap";

function News() {
  return (
    <Container fluid>
      <h2>
        <strong>News</strong>
      </h2>
      <ul>
        <li>
          <p>
            Feb 2022 : I'll be assisting the Cornell NLP group on their
            experiments for the rest of this semester.
          </p>
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
            Aug 2021 : I began my undergraduate studies at Cornell University.
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default News;
