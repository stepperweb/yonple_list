import React, { useRef, useEffect } from "react";

const FetchMore = ({ setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((prev) => prev + 1);
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.currentTarget);
    };
  }, []);

  return <div id="fetchMore" ref={fetchMoreTrigger} />;
};

export default FetchMore;
