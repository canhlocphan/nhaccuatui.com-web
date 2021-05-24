// libs
import React, { memo, useCallback, useState } from "react";
// components
import SlideDefaultMainSlide from "../SlideDefaultMainSlide";
import SlideDefaultOption from "../SlideDefaultOption";
// others
import "./styles.scss";

const SlideDefault = ({ slideDefault }) => {
  const [imageDefault, setImageDefault] = useState(slideDefault[0].large);
  const [id, setId] = useState(1);
  const handleImageDefault = useCallback((id, large) => {
    setImageDefault(large);
    setId(parseInt(id, 10));
  }, []);
  return (
    <div className="slide-default-wrapper">
      <div className="slide-default">
        <SlideDefaultMainSlide imageDefault={imageDefault} />
        <SlideDefaultOption
          id={id}
          slideDefault={slideDefault}
          imageDefault={imageDefault}
          setId={setId}
          handleImageDefault={handleImageDefault}
          setImageDefault={setImageDefault}
        />
      </div>
    </div>
  );
};

export default memo(SlideDefault);
