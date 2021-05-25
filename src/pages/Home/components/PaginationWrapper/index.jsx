// libs
import React from "react";
// components
import Pagination from "../Pagination";
// others
import "./styles.scss";

const PaginationWrapper = ({ page, setPage, totalPages }) => (
  <div className="btn-control-page-wrapper">
    <Pagination page={page} setPage={setPage} totalPages={totalPages} />
  </div>
);

export default PaginationWrapper;
