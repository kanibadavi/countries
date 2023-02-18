import { useState, useEffect } from "react";
import { Stack, Dropdown, Form, Row, Col } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Cards from "./Cards";

const Search = ({ theme }) => {
  ///////////////////////////useState/////////////////////////

  /* useState returns an array with exactly two values:
  1.The current state. During the first render, it will match the initialState you have passed.
  2.The set function that lets you update the state to a different value and trigger a re-render.
  */
  //const [state, setState] = useState(initialState)
  //"light" is our css
  /*how we use useState : 
  step1: ask yourself where you want to change.thats the place where you will use an event called eventHandler.
  step2:write a useState.
  step3:change your state by your setState in eventHandler.
  step4:now that data has changed you need to show that data on your DOM page with useEffect
  */

  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");

  ////////////////////useEffect////////////////////

  //cleaning up or applying the effect after every render might create a performance problem.so we will use dependency array at the end of useEffect.
  //If the array contains a state variable, the useEffect callback function gets triggered on 2 occasions. First, when the page renders and whenever the state variable is updated.
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        // console.log(data);
      });
  }, []); //dependency array is here!
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
          <Dropdown.Toggle id="dropdown-basic">
            Filter by region
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div>
              {/* {search?.map((item, index) => {
                return (
                  <DropdownItem key={index}>
                    <div href="#">{item.region}</div>
                  </DropdownItem>
                );
              })} */}
              <DropdownItem>
                <div>Europe</div>
                <div>Asia</div>
                <div>Americas</div>
                <div>Africa</div>
                <div>Australia</div>
                <div>Oceania</div>
              </DropdownItem>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <Cards theme={theme} data={search} />
    </>
  );
};

export default Search;
