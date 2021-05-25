// libs
import { useEffect } from "react";

const useEventListener = (isHover, event, callback) => {
  useEffect(() => {
    if (isHover) {
      window.addEventListener(event, callback);
    } else if (isHover === false) {
      window.removeEventListener(event, callback);
    }
    return () => {
      window.removeEventListener(event, callback);
    };
  }, [isHover, event, callback]);
};

export default useEventListener;
