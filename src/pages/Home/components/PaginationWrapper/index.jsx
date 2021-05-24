// libs
import React from "react";
// components
import Pagination from "../Pagination";
// others
import "./styles.scss";

const PaginationWrapper = ({ page, setPage }) => (
  <div className="btn-control-page-wrapper">
    <Pagination page={page} setPage={setPage} />
  </div>
);

export default PaginationWrapper;
