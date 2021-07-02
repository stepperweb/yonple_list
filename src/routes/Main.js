import React, { useEffect, useState } from "react";
import List from "../components/List";
import FetchMore from "../components/FetchMore";
import Loading from "../components/Loading";
import Heading from "../components/Heading";
import styled from "styled-components";

import { getLists } from "../components/Api";

const TabMenu = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;

  & .tabs {
    font-size: 1.5rem;
    margin: 5px;
    cursor: pointer;
  }

  & .tabs.active {
    font-weight: 700;
    color: red;
  }
`;

const Wrapper = styled.section`
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  & .content {
    display: none;
  }

  & .content.active-content {
    display: block;
  }
`;

function Main() {
  const [page, setPage] = useState(0);
  const [type, setTpye] = useState("a");
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    const loadLists = async () => {
      setLoading(true);
      const newLists = await getLists(page, type);
      setLists((prev) => [...prev, ...newLists]);
      setLoading(false);
    };

    loadLists();
  }, [page, type]);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="App">
      <Heading setSearch={setSearch} />

      <TabMenu>
        <div
          className={toggle === 1 ? "tabs active" : "tabs"}
          onClick={() => {
            toggleTab(1);
          }}
        >
          A-Type
        </div>
        <div
          className={toggle === 2 ? "tabs active" : "tabs"}
          onClick={() => {
            toggleTab(2);
          }}
        >
          B-Type
        </div>
      </TabMenu>
      <Wrapper>
        <div className={toggle === 1 ? "content active-content" : "content"}>
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
        <div className={toggle === 2 ? "content active-content" : "content"}>
          Type-B
        </div>
      </Wrapper>
    </div>
  );
}

export default Main;
