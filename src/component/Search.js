import { useState, useEffect } from "react";
import { Stack, Form, Row, Col } from "react-bootstrap";
import Cards from "./Cards";

const Search = ({ theme }) => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  const [copy, setCopy] = useState([]);
  const [select, setSelect] = useState("");

  ////////////////////useEffect////////////////////

  //after DOM mounts on page useEffect will come for getting data.because we can not wait till data comes and then our page mounts we use useEffect.
  //in useEffects we will use our setter to update
  //cleaning up or applying the effect after every render might create a performance problem.so we will use dependency array at the end of useEffect.
  //If the array contains a state variable, the useEffect callback function gets triggered on 2 occasions. First, when the page renders and whenever the state variable is updated.
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        setCopy(data);
        console.log(data);
      });
  }, []); //dependency array is here!
  useEffect(() => {
    const temp = search
      .filter((country) => {
        if (!select) {
          return true;
        } else {
          return country.region.includes(select);
        }
      })
      .filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(input.toLowerCase().trim());
      });
    setCopy(temp);
  }, [input, select, search]);
  const searchHandler = (e) => {
    setInput(e.target.value);
  };
  const optionList = [
    { title: "Africa", id: 1 },
    { title: "Americas", id: 2 },
    { title: "Asia", id: 3 },
    { title: "Europe", id: 4 },
    { title: "Australia", id: 5 },
    { title: "Oceania", id: 6 },
  ];
  return (
    <>
      <Stack gap={3} direction="horizontal" className="container">
        <Form className="container" onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Col>
              {/* In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. */}
              <Form.Control
                type="text"
                placeholder="Search Here..."
                value={input}
                onChange={searchHandler}
              />
            </Col>
          </Row>
        </Form>
        <select
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          className="select"
        >
          <option value="">filter by region</option>
          {optionList?.map((continent) => {
            return (
              <option value={continent.title} key={continent.id}>
                {continent.title}
              </option>
            );
          })}
        </select>
      </Stack>
      <Cards theme={theme} data={copy} />
    </>
  );
};

export default Search;
