import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import styled from "@emotion/styled";
import Resume from "./Components/Resume";
import Amount from "./Components/Amount";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    amount: 0,
    data: {
      brand: "",
      year: "",
      membership: "",
    },
  });

  const { brand, year, membership } = resume;

  return (
    <Container>
      <Header title="Insurance Quoter App" />

      <FormContainer>
        <Form setResume={setResume} />
        <Resume resume={resume} data={resume.data} />
        <Amount resume={resume} />
      </FormContainer>
    </Container>
  );
}

export default App;
