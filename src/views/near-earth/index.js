import { fetchNearEarth } from "../../actions/near-earth";
import AxiosHanlder from "../../lib/api";
import Error from "../../components/error";

import { useQuery } from "react-query";
import { Container, Spinner, Flex, Center, Text } from "@chakra-ui/react";
import { Chart } from "react-google-charts";
import RenderFlexCenter from "../../components/renderFlexCenter";
import NearEarthTemplate from "../../components/templates/near-earth";

const NearEarthView = () => {
  const queryResponse = useQuery("fetch-near-earth", () => {
    return AxiosHanlder(fetchNearEarth());
  });

  return <NearEarthTemplate {...queryResponse} />;
};

export default NearEarthView;
