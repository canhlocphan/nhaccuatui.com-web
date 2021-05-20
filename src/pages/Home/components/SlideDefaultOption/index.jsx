// libs
import React, { memo, useEffect } from "react";
// components
import SlideDefaultOptionItem from "../SlideDefaultOptionItem";
// others
import "./styles.scss";

const SlideDefaultOption = ({ id, setId, setImageDefault, slideDefault, imageDefault, handleImageDefault }) => {
  useEffect(() => {
    const time = setInterval(() => {
      if (parseInt(id, 10) === 5) {
        setId(1);
      } else setId(parseInt(id, 10) + 1);
      setImageDefault(slideDefault[id - 1].large);
    }, 7000);
    return () => clearInterval(time);
  }, [id, slideDefault, setId, setImageDefault]);
  return (
    <div className="option-slide-wrapper">
      <ul className="option-slide">
        {slideDefault.map((item) => (
          <SlideDefaultOptionItem
            key={item.id}
            item={item}
            handleImageDefault={handleImageDefault}
            imageDefault={imageDefault}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(SlideDefaultOption);
