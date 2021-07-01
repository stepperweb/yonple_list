import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;

  & h1 {
    font-size: 2.5rem;
  }
`;

const SearchBar = styled.div`
  width: 350px;
  margin: 30px auto;
  padding-left: 20px;
  border: 2px solid #333;
  border-radius: 25px;

  span {
    color: gray;
  }

  &:hover {
    border: 2px solid rgba(59, 130, 246, 0.5);
  }

  & input {
    height: 40px;
    width: 80%;
    font-size: 20px;
    border: none;
    padding-left: 10px;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

function Heading({ setSearch }) {
  return (
    <>
      <Header>
        <h1>솔리다리테 과제 전형</h1>
        <p>코드스테이츠 26기 수료생 김재우</p>
      </Header>
      <SearchBar>
        <span>
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </SearchBar>
    </>
  );
}

export default Heading;
