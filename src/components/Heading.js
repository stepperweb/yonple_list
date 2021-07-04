import React from "react";
import { FaSearch } from "react-icons/fa";

//css
import styled from "styled-components";

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

//검색어 입력시 150ms debounce 적용
const debounce = (func, delay) => {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(null, ...args), delay);
  };
};

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
            debounce(setSearch(e.target.value), 150);
          }}
        />
      </SearchBar>
    </>
  );
}

export default Heading;
