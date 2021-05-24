// libs
import { useCallback, useEffect } from "react";
// keyCode
import keyCode from "../constants/keyCode";

export default function usePressKey(page, setPage, isHover) {
  const handlePage = useCallback(
    (e) => {
      if (e.keyCode === keyCode.ARROW_DOWN || e.keyCode === keyCode.PAGE_DOWN) {
        e.preventDefault();
        if (page === 1) {
          return page;
        }
        setPage(page - 1);
      } else if (e.keyCode === keyCode.ARROW_UP || e.keyCode === keyCode.PAGE_UP) {
        e.preventDefault();
        if (page === 3) {
          return page;
        }
        setPage(page + 1);
      }
      return page;
    },
    [page, setPage]
  );
  useEffect(() => {
    if (isHover) {
      window.addEventListener("keydown", handlePage);
    } else if (isHover === false) {
      window.removeEventListener("keydown", handlePage);
    }
    return () => {
      window.removeEventListener("keydown", handlePage);
    };
  }, [isHover, handlePage]);
  return page;
}
