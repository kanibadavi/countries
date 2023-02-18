import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Detail = ({ data }) => {
  const params = useParams();
  const [detail, setDetail] = useState("");
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/{name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, []);
  return;
};

export default Detail;
