import { useState } from "react";
import {
  Spinner,
  Select,
  Flex,
  Box,
  Heading,
  Spacer,
  Container,
  Text,
} from "@chakra-ui/react";
import { Chart } from "react-google-charts";

import RenderFlexCenter from "../renderFlexCenter";
import Error from "../../components/error";

const NearEarthTemplate = ({ isLoading, data, isError, refetch }) => {
  const [filter, setFilter] = useState("");

  if (isLoading) {
    return (
      <RenderFlexCenter>
        <Spinner />
      </RenderFlexCenter>
    );
  }

  if (isError) {
    return (
      <RenderFlexCenter>
        <Error onClick={refetch} />
      </RenderFlexCenter>
    );
  }

  return (
    <>
      <Flex>
        <Box p="2">
          <Heading size="md">Javascript Challenge</Heading>
        </Box>
        <Spacer />
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Text margin={5}>Filter:</Text>
          <Select
            placeholder="Select option"
            onChange={(e) => setFilter(e.target.value)}
          >
            {data.getOrbitingBods().map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <div style={{ alignItems: "center" }}>
        <Chart
          chartType="BarChart"
          width={"900px"}
          height={"500px"}
          style={{ alignItems: "center", margin: "0 auto" }}
          loader={
            <RenderFlexCenter>
              <Spinner />
            </RenderFlexCenter>
          }
          data={[
            [
              "NEO Name",
              "Min Estimated Diameter (km)",
              "Max Estimated Diameter",
            ],
            ...data.getAdaptedData(filter),
          ]}
          options={{
            title: "Near-Earth-Objects travelling around the earth",
            hAxis: {
              title: "Min Estimated Diameter (km)",
              minValue: 0,
            },
            vAxis: {
              title: "NEO Name",
            },
            //chartArea: { width: "50%", alignItems: "center" },
          }}
        />
      </div>
    </>
  );
};

export default NearEarthTemplate;
