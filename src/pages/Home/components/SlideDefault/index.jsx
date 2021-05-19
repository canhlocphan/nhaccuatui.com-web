// libs
import React, { useEffect, useState } from "react";
// components
import SlideDefaultMainSlide from "../SlideDefaultMainSlide";
import SlideDefaultOption from "../SlideDefaultOption";
// others
import "./styles.scss";

const SlideDefault = ({ slideDefault }) => {
  const [imageDefault, setImageDefault] = useState(slideDefault[0].large);
  const [id, setId] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      if (parseInt(id, 10) === 5) {
        setId(1);
      } else setId(parseInt(id, 10) + 1);
      setImageDefault(slideDefault[id - 1].large);
    }, 7000);
    return () => clearInterval(time);
  });
  return (
    <div className="slide-default-wrapper">
      <div className="slide-default">
        <SlideDefaultMainSlide imageDefault={imageDefault} />
        <SlideDefaultOption
          slideDefault={slideDefault}
          setId={setId}
          imageDefault={imageDefault}
          setImageDefault={setImageDefault}
        />
      </div>
    </div>
  );
};

export default SlideDefault;
