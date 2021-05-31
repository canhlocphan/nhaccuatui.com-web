// libs
import React from "react";
import styled from "styled-components";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const MainSlide = styled.div`
  background: url(${(props) => props.imageDefault});
`;

const SlideDefaultMainDefault = ({ imageDefault }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return <MainSlide className="main-slide" imageDefault={imageDefault} onClick={handleChangePage} />;
};

export default SlideDefaultMainDefault;
