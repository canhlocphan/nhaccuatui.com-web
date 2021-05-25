// libs
import React, { useRef } from "react";
// others
import "./styles.scss";
import { Button } from "antd";

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePageUp = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const handlePageDown = () => {
    if (page > 1) setPage(page - 1);
  };
  const currentPageUp = useRef(null);
  const currentPageDown = useRef(null);
  const handlePageUpChange = () => {
    if (currentPageUp.current) {
      clearTimeout(currentPageUp.current);
    }
    currentPageUp.current = setTimeout(() => handlePageUp(), 500);
  };
  const handlePageDownChange = () => {
    if (currentPageDown.current) {
      clearTimeout(currentPageDown.current);
    }
    currentPageDown.current = setTimeout(() => handlePageDown(), 500);
  };
  return (
    <div className="btn-control-page">
      <Button disabled={page <= 1} onClick={handlePageDownChange}>
        Prev
      </Button>
      <Button disabled={page >= totalPages} onClick={handlePageUpChange}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
