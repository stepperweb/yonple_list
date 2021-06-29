import React from "react";
import styled from "styled-components";

const Li = styled.div``;

function List(props) {
  return (
    <Li>
      <h3>
        <span>{props.id}. </span>
        {props.title}
      </h3>
      <p>{props.content}</p>
    </Li>
  );
}

export default List;
