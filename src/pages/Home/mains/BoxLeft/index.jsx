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
import { loadListeningWhatToday, loadAlbumHot } from "../../../../redux/action/Home";
// others
import "./styles.scss";

const BoxLeft = ({ Home, defaultLanguage }) => {
  const [pageListen, setPageListen] = useState(1);
  const [pageAlbum, setPageAlbum] = useState(1);
  const filtersListen = {
    _limit: 5,
    _page: pageListen,
  };
  const filtersAlbum = {
    _limit: 10,
    _page: pageAlbum,
  };
  const totalPages = 3;
  const paramsStringListen = queryString.stringify(filtersListen);
  const paramsStringAlbum = queryString.stringify(filtersAlbum);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListeningWhatToday(paramsStringListen));
  }, [dispatch, paramsStringListen]);
  useEffect(() => {
    dispatch(loadAlbumHot(paramsStringAlbum));
  }, [dispatch, paramsStringAlbum]);
  const listeningWhatToday = useSelector((state) => state.Home.listen);
  const isLoading = useSelector((state) => state.Home.isLoading);
  const albumHot = useSelector((state) => state.Home.album);
  const loading = useSelector((state) => state.Home.loading);
  return (
    <div className="box-left-wrapper">
      <SlideDefault slideDefault={Home.slideDefault} />
      {isLoading && (
        <ListeningWhatToday
          listeningWhatToday={listeningWhatToday}
          page={pageListen}
          setPage={setPageListen}
          totalPages={totalPages}
          nameTitle={defaultLanguage.listeningWhatToday}
        />
      )}
      {loading && (
        <AlbumHot
          albumHot={albumHot}
          nameTitle={defaultLanguage.albumHot}
          page={pageAlbum}
          setPage={setPageAlbum}
          totalPages={totalPages}
        />
      )}
      <MvHot mvHot={Home.mvHot} nameTitle={defaultLanguage.mvHot} />
      <ListSong listSong={Home.song} nameTitle={defaultLanguage.listSong} />
      <Karaoke karaoke={Home.karaoke} nameTitle={defaultLanguage.karaoke} />
      <Entertainment entertainment={Home.entertainment} nameTitle={defaultLanguage.entertainment} />
    </div>
  );
};

export default BoxLeft;
