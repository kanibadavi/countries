import { useState, useEffect } from "react";
import { Stack, Dropdown, Form, Row, Col } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Cards from "./Cards";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        // console.log(data);
      });
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      <Stack gap={3} direction="horizontal" className="container">
        <Form className="container">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Search Here..."
                value={input}
                onChange={searchHandler}
              />
            </Col>
          </Row>
        </Form>
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            Filter by country name
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div>
              {search?.map((item, index) => {
                return (
                  <DropdownItem>
                    <div href="#">{item.name.common}</div>
                  </DropdownItem>
                );
              })}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <Cards data={search} />
    </>
  );
};

export default Search;
