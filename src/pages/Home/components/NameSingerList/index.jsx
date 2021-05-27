// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const NameSingerList = ({ title }) => {
  const temp = title.split("-");
  const nameSingerList = temp[1].split(",");
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="name-singer-list">
      {nameSingerList.map((value) => {
        if (value === nameSingerList[nameSingerList.length - 1])
          return (
            <h4
              className="name-singer"
              title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}
              key={Math.random()}
              onClick={handleChangePage}
            >
              {`${value}`}
            </h4>
          );
        return (
          <React.Fragment key={Math.random()}>
            <h4
              className="name-singer"
              title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}
              onClick={handleChangePage}
            >
              {`${value}`}
            </h4>
            <span className="space">,</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NameSingerList;
