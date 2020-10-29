import React, { Fragment } from "react";
import Form from "./Form";

const Resume = ({ resume, data }) => {
  const { amount } = resume;
  const { brand, year, membership } = data;

  if (!amount) return null;

  return (
    <Fragment>
      <h2>Resume</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>Year: {year}</li>
        <li>Membership: {membership}</li>
      </ul>
    </Fragment>
  );
};

export default Resume;
