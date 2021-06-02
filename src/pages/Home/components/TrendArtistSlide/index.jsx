// libs
import React from "react";
import classNames from "classnames";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const TrendArtistSlide = ({ trendArtist, imageDefault, setId, setImageDefault, setArtist }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <ul className="trend-artist-slide">
      {trendArtist.map(({ id, image, artist }) => {
        const className = classNames(`${imageDefault === image ? "active" : "none"}`);
        return (
          <div key={id} className="small-image" onClick={handleChangePage}>
            <img
              className={className}
              src={image}
              alt="smallImage"
              onMouseEnter={() => {
                setId(id);
                setImageDefault(image);
                setArtist(artist);
              }}
            ></img>
          </div>
        );
      })}
    </ul>
  );
};

export default TrendArtistSlide;
