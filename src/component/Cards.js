import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ data, theme }) => {
  console.log(theme);
  return (
    <Container className={theme}>
      <Row>
        {data?.map((item, index) => {
          return (
            <Col key={index} className={theme}>
              <Card style={{ width: "15rem" }}>
                <Link to={`/country/${item.name.common}`}>
                  <Card.Img
                    variant="top"
                    src={item.flags.png}
                    alt={item.flags.alt}
                    style={{ height: 150 }}
                  />
                </Link>
                <Card.Body className={theme}>
                  <Card.Title>{item.name.common}</Card.Title>
                  <Card.Text>
                    <div>Population:{item.population}</div>
                    <div>Region:{item.region}</div>
                    <div>Capital:{item.capital}</div>
                  </Card.Text>
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
