import React, { useState } from "react";
import styled from "@emotion/styled";
import { yearDiff, brandRate, membershipRate } from "../Helper";

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setResume }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    membership: "",
  });

  const [error, setError] = useState(false);

  const { brand, year, membership } = data;

  const customerData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const quoteInsurance = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || membership.trim() === "") {
      setError(true);
      return;
    }

    let base = 2000;

    setError(false);

    const diff = yearDiff(year);

    base -= diff * 0.03 * base;

    base *= brandRate(brand);

    base *= membershipRate(membership);

    base = parseFloat(base).toFixed(2);

    setResume({
      amount: base,
      data,
    });
  };

  return (
    <form onSubmit={quoteInsurance}>
      {error ? <Error>All field are required</Error> : null}
      <Container>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={customerData}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="japanese">Japanese</option>
        </Select>
      </Container>

      <Container>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={customerData}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Container>

      <Container>
        <Label>Membership</Label>
        <InputRadio
          type="radio"
          name="membership"
          value="basic"
          checked={membership === "basic"}
          onChange={customerData}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="membership"
          value="gold"
          checked={membership === "gold"}
          onChange={customerData}
        />{" "}
        Gold
      </Container>

      <Button type="submit">Quote insurance</Button>
    </form>
  );
};

export default Form;
