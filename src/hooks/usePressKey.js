// libs
import { useCallback, useEffect, useRef } from "react";
// keyCode
import keyCode from "../constants/keyCode";

export default function usePressKey(page, setPage, totalPages, isHover) {
  const currentPage = useRef(null);
  const handlePage = useCallback(
    (e) => {
      if (e.keyCode === keyCode.ARROW_DOWN || e.keyCode === keyCode.PAGE_DOWN) {
        e.preventDefault();
        if (page === 1) {
          return page;
        }
        if (currentPage.current) {
          clearTimeout(currentPage.current);
        }
        currentPage.current = setTimeout(() => setPage(page - 1), 500);
      } else if (e.keyCode === keyCode.ARROW_UP || e.keyCode === keyCode.PAGE_UP) {
        e.preventDefault();
        if (page === totalPages) {
          return page;
        }
        if (currentPage.current) {
          clearTimeout(currentPage.current);
        }
        currentPage.current = setTimeout(() => setPage(page + 1), 500);
      }
      return page;
    },
    [page, setPage, totalPages]
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
