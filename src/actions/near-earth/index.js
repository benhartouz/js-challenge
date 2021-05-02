import { URL } from "../../constants/config";
import { NearEarthAdapter } from "../../actions/near-earth/adapters";
const fetchNearEarth = () => {
  return {
    route: URL,
    method: "get",
    adapter: NearEarthAdapter,
  };
};

export { fetchNearEarth };
