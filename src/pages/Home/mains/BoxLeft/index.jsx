// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
// components
import SlideDefault from "../../components/SlideDefault";
import ListeningWhatToday from "../../components/ListeningWhatToday";
import AlbumHot from "../../components/AlbumHot";
import MvHot from "../../components/MvHot";
import ListSong from "../../components/ListSong";
import Karaoke from "../../components/Karaoke";
import Entertainment from "../../components/Entertainment";
// actions
import { loadSlideDefault, loadListeningWhatToday } from "../../../../redux/action/Home";
// others
import "./styles.scss";

const BoxLeft = ({ Home, defaultLanguage }) => {
  const [page, setPage] = useState(1);
  const filters = {
    _limit: 5,
    _page: page,
  };
  const paramsString = queryString.stringify(filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSlideDefault());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadListeningWhatToday(paramsString));
  }, [dispatch, paramsString]);
  const slideDefault = useSelector((state) => state.Home.slide);
  const loading = useSelector((state) => state.Home.loading);
  const listeningWhatToday = useSelector((state) => state.Home.listen);
  const isLoading = useSelector((state) => state.Home.isLoading);
  return (
    <div className="box-left-wrapper">
      {loading && <SlideDefault slideDefault={slideDefault} />}
      {isLoading && (
        <ListeningWhatToday
          listeningWhatToday={listeningWhatToday}
          page={page}
          setPage={setPage}
          nameTitle={defaultLanguage.listeningWhatToday}
        />
      )}
      <AlbumHot albumHot={Home.albumHot} nameTitle={defaultLanguage.albumHot} />
      <MvHot mvHot={Home.mvHot} nameTitle={defaultLanguage.mvHot} />
      <ListSong listSong={Home.song} nameTitle={defaultLanguage.listSong} />
      <Karaoke karaoke={Home.karaoke} nameTitle={defaultLanguage.karaoke} />
      <Entertainment entertainment={Home.entertainment} nameTitle={defaultLanguage.entertainment} />
    </div>
  );
};

export default BoxLeft;
