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

  // const handleScroll = (event) => {
  //   const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

  //   console.log("scrollTop :", scrollTop);
  //   console.log("clientHeight :", clientHeight);
  //   console.log("scrollHeight :", scrollHeight);

  //   if (scrollHeight - scrollTop === clientHeight) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

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
      <GlobalStyle />

      {/* <div onScroll={handleScroll}>
        {lists &&
          lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              title={list.title}
              content={list.content}
            />
          ))}
      </div>
      {loading && <Loading />} */}
      <div id="app" className={page === 0 && loading ? <Loading /> : ""}>
        {lists &&
          lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              title={list.title}
              content={list.content}
            />
          ))}
        <FetchMore loading={page !== 0 && loading} setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
