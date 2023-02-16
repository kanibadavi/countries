import { Card, Row, Col, Container } from "react-bootstrap";

const Cards = ({ data }) => {
  return (
    <Container>
      <Row>
        {data?.map((item, index) => {
          return (
            <Col key={index}>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={item.flags.png}
                  alt={item.flags.alt}
                />
                <Card.Body>
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
