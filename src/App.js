import React, { useEffect, useState } from "react";
import List from "./components/List";
import FetchMore from "./components/FetchMore";
import Loading from "./components/Loading";
import Heading from "./components/Heading";

import { createGlobalStyle } from "styled-components";

import { getLists } from "./components/Api";

// 스타일
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none
  }
  a{
    text-decoration: none
  }
  
`;

function App() {
  const [page, setPage] = useState(0);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadLists = async () => {
      setLoading(true);
      const newLists = await getLists(page);
      setLists((prev) => [...prev, ...newLists]);
      setLoading(false);
    };

    loadLists();
  }, [page]);

  return (
    <div className="App">
      <Heading />
      <input
        type="text"
        placeholder="검색어를 입력하시오"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <GlobalStyle />
      <div>
        {lists &&
          lists
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((list) => (
              <List
                key={list.id}
                id={list.id}
                title={list.title}
                content={list.content}
              />
            ))}
        <FetchMore setPage={setPage} />
        {loading && <Loading />}
      </div>
    </div>
  );
}

export default App;
