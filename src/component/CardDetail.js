import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Detail = ({ theme }) => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  console.log(country, name);

  // const location = useLocation();
  // const country = location.state;

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${name
        .split("-")
        .join(" ")}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => console.log(error));
  }, [name]);
  return (
    <>
      <Container className={theme}>
        <Link to="/">
          <Button style={{ marginBottom: "15px" }}>← back</Button>
        </Link>
        <Row>
          <Col>
            {country ? (
              <img
                src={country[0]?.flags.png}
                alt={country[0]?.flags.alt}
                // we give inline style by using two curly braces
                style={{ height: 250 }}
              />
            ) : null}
          </Col>
          <Col>
            <h2>{country[0]?.name.common}</h2>
            <br />
            <div>
              <Row>
                <Col>
                  <p>Native name:{country[0]?.name.official}</p>
                  <p>Population:{country[0]?.population}</p>
                  <p>Region:{country[0]?.region}</p>
                  <p>Sub region:{country[0]?.subregion}</p>
                  <p>Capital:{country[0]?.capital}</p>
                </Col>
                <Col>
                  <p>Top level domain:{country[0]?.tld[0]}</p>
                  <p>languages:{country[0]?.demonyms.eng.f}</p>
                  {/* {country[0].borders?.map((border) => {
                    console.log(border);
                    return <p>{border}</p>;
                  })} */}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
