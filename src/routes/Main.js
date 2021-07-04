import React, { useEffect, useState } from "react";

//components
import List from "../components/List";
import LoadMore from "../components/LoadMore";
import Loading from "../components/Loading";
import Heading from "../components/Heading";

//css style
import styled from "styled-components";

//get Api
import { getLists } from "../components/Api";

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
    <div className="Main">
      <Heading setSearch={setSearch} />
      <Wrapper>
        {lists
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
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
        <LoadMore setPage={setPage} />
        {loading && <Loading />}
      </Wrapper>
    </div>
  );
}

export default Main;
