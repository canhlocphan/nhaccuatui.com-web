// libs
import { useCallback, useRef } from "react";
// keyCode
import keyCode from "../constants/keyCode";
// hooks
import useEventListener from "./useEventListener";

export default function usePaginationKey(page, setPage, totalPages, isHover) {
  const currentPage = useRef(null);
  const handlePage = useCallback(
    (e) => {
      switch (e.keyCode) {
        case keyCode.PAGE_DOWN: {
          e.preventDefault();
          if (page === 1) {
            return page;
          }
          if (currentPage.current) {
            clearTimeout(currentPage.current);
          }
          currentPage.current = setTimeout(() => setPage(page - 1), 500);
          break;
        }
        case keyCode.PAGE_UP: {
          e.preventDefault();
          if (page === totalPages) {
            return page;
          }
          if (currentPage.current) {
            clearTimeout(currentPage.current);
          }
          currentPage.current = setTimeout(() => setPage(page + 1), 500);
          break;
        }
        default:
          return page;
      }
      return page;
    },
    [page, setPage, totalPages]
  );
  useEventListener(isHover, "keydown", handlePage);
  return page;
}
