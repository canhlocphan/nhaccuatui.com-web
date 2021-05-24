// libs
import React from "react";
// others
import "./styles.scss";
import { Button } from "antd";

const ButtonControlPage = ({ page, setPage }) => (
  <div className="btn-control-page">
    <Button
      disabled={page <= 1}
      onClick={() => {
        setPage(page - 1);
      }}
    >
      Prev
    </Button>
    <Button
      disabled={page >= 3}
      onClick={() => {
        setPage(page + 1);
      }}
    >
      Next
    </Button>
  </div>
);

export default ButtonControlPage;
