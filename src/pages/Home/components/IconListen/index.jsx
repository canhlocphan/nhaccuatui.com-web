// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";
import { CustomerServiceOutlined, CaretRightOutlined, HeartOutlined } from "@ant-design/icons";

const IconListen = (props) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="icon-listen">
      {props.actionSong === false ? (
        <>
          <CustomerServiceOutlined className="icon" />
          {` ${props.view}`}
        </>
      ) : (
        <>
          <HeartOutlined className="icon-action" onClick={handleChangePage} />
          <CaretRightOutlined className="icon-action" onClick={handleChangePage} />
        </>
      )}
    </div>
  );
};

export default IconListen;
