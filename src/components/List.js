import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Li = styled.div`
  p {
    line-height: 1.4rem;
  }

  a {
    text-decoration: none;
    color: #000;
    display: inline-block;
    padding: 10px;

    &:hover {
      border-radius: 5px;
      background: rgba(59, 130, 246, 0.7);
      color: #fff;
      transition: 0.2s;
    }
  }
  margin: 5px;
`;

function List({ id, title, content }) {
  return (
    <Li>
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: { id, title, content },
        }}
      >
        <h3>
          <span>{id}. </span>
          {title}
        </h3>
        <p>{content.slice(0, 350)}...</p>
      </Link>
    </Li>
  );
}

export default List;
