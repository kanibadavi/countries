import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ data, theme }) => {
  return (
    <Container className={theme} style={{ marginTop: "2rem" }}>
      <Row>
        {data?.map((item, index) => {
          return (
            <Col key={index} className={theme}>
              <Card style={{ width: "15rem" }}>
                {/* A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to.  */}
                <Link
                  to={`/country/${item.name.common.split(" ").join("-")}`}
                  state={item}
                >
                  <Card.Img
                    src={item.flags.png}
                    alt={item.flags.alt}
                    // we give inline style by using two curly braces
                    style={{ height: 150 }}
                  />
                </Link>
                <Card.Body className={theme}>
                  <Card.Title>{item.name.common}</Card.Title>
                  <div>
                    <p>Population:{item.population}</p>
                    <p>Region:{item.region}</p>
                    <p>Capital:{item.capital}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cards;
