// libs
import React, { useEffect, useState } from "react";

// mocks
import Home from "../../../../mocks/Home";

import "./styles.scss";

const SlideDefault = () => {
  const [imageDefault, setImageDefault] = useState(Home.slideDefaultImage[0].large);
  const [id, setId] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      if (parseInt(id, 10) === 5) {
        setId(1);
      } else setId(parseInt(id, 10) + 1);
      setImageDefault(Home.slideDefaultImage[id - 1].large);
    }, 7000);
    return () => clearInterval(time);
  });
  return (
    <div className="slide-default">
      <div className="slide-default-container">
        <div className="main-slide" style={{ background: `url(${imageDefault})` }}></div>
        <div className="option-slide">
          <ul className="option-slide-container">
            {Home.slideDefaultImage.map(({ id, small, large, title }) => (
              <li
                key={id}
                className="option-slide-item"
                title={title}
                onMouseEnter={() => {
                  setImageDefault(large);
                  setId(parseInt(id, 10));
                }}
              >
                <span className={`${imageDefault === large ? "active" : "none"}`}></span>
                <img src={small} alt="option-slide-item" style={{ cursor: "pointer" }}></img>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideDefault;
