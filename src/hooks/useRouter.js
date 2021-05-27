// libs
import { useParams, useLocation, useHistory, useRouteMatch } from "react-router-dom";

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  return {
    params,
    location,
    history,
    match,
  };
};

export default useRouter;
