import { URL } from "../../constants/config";
import { NearEarthAdapter } from "../../actions/near-earth/adapters";
const TEMP_API = "http://demo8747629.mockable.io/";
const fetchNearEarth = () => {
  return {
    route: TEMP_API,
    method: "get",
    adapter: NearEarthAdapter,
  };
};

export { fetchNearEarth };
