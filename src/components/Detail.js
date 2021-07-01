import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

const DetailView = styled.div`
  width: 60%;
  margin: 200px auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  h3 {
    font-size: 2rem;
  }

  p {
    line-height: 1.4rem;
  }

  button {
    margin-top: 10px;
    background: rgba(59, 130, 246, 1);
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

function Detail() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);

  const goBack = () => {
    history.push("/");
  };

  return (
    <DetailView>
      {location.state ? (
        <>
          <h3>
            <span>{location.state.id}. </span>
            {location.state.title}
          </h3>
          <p>{location.state.content}</p>
        </>
      ) : null}

      <button onClick={goBack}>뒤로가기</button>
    </DetailView>
  );
}

export default Detail;
