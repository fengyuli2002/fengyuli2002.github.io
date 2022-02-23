import "./News.css";
import { Container } from "react-bootstrap";

type news = {
  content: string;
  date: Date;
  link?: string;
};

const content: news[] = [
  {
    content: "I began my undergraduate studies at Cornell University!",
    date: newDate(2021, 8),
  },
  {
    content:
      "I joined Cornell Design & Tech Initiative and started building full-stack web projects.",
    date: newDate(2021, 10),
    link: "https://www.cornelldti.org/",
  },
  {
    content: "I declared my CS major.",
    date: newDate(2022, 1),
  },
  {
    content: "I completed my first Kaggle competition.",
    date: newDate(2022, 1),
  },
];

function newDate(year: number, month: number) {
  return new Date(year, month - 1);
}

function NewsItem(props: news) {
  const formatDate = (date: Date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <div>
      {props.link ? (
        <p>
          <a className="news-link" href={props.link}>{`${formatDate(
            props.date
          )}  :  ${props.content}`}</a>
        </p>
      ) : (
        <p>{`${formatDate(props.date)}  :  ${props.content}`}</p>
      )}
    </div>
  );
}

function News() {
  const sorted_content = content
    .sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    })
    .reverse()
    .slice(0, 7);

  return (
      <Container fluid>
        <h2>
          <strong>News</strong>
        </h2>
        <ul>
          {sorted_content.map((item) => (
            <li>
              <NewsItem
                content={item.content}
                date={item.date}
                link={item.link}
              ></NewsItem>
            </li>
          ))}
        </ul>
      </Container>
  );
}

export default News;
