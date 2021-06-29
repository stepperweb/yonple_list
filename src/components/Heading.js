import React from "react";
import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

function Heading() {
  return (
    <Header>
      <h1>솔리다리테 과제 전형</h1>
      <p>합격했으면 좋겠다...</p>
    </Header>
  );
}

export default Heading;
