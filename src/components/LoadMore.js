import React, { useRef, useEffect } from "react";

const LoadMore = ({ setPage }) => {
  const loadMoreTrigger = useRef(null);

  const loadMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((prev) => prev + 1);
  });

  useEffect(() => {
    loadMoreObserver.observe(loadMoreTrigger.current);
  }, [setPage]);

  return <div ref={loadMoreTrigger} />;
};

export default LoadMore;
