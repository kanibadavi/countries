import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  // const location = useLocation();
  // const country = location.state;
  console.log();
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${name
        .split("-")
        .join(" ")}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);
  return (
    <>
      {country ? (
        <img
          src={country[0].flags.png}
          alt={country[0].flags.alt}
          // we give inline style by using two curly braces
          style={{ height: 150 }}
        />
      ) : null}
    </>
  );
};

export default Detail;
