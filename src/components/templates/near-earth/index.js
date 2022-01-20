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

import RenderFlexCenter from "../../renderFlexCenter";
import Error from "../../error";
import ChartDisplay from "./components/chart";
import TableDisplay from "./components/table";

const NearEarthTemplate = ({ isLoading, data, isError, refetch }) => {
  const [filter, setFilter] = useState("");
  const [chartType, setChartType] = useState("");

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

  const dataFiltred = data.getAdaptedData(filter);

  return (
    <>
      <Flex>
        <Box p="2">
          <Heading size="md">Javascript Challenge</Heading>
        </Box>
        <Spacer />
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Text margin={5}>Type:</Text>
          <Select
            placeholder="Select type"
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value="bar">Bar</option>
            <option value="table">Table</option>
          </Select>
          <Text margin={5}>Filter:</Text>
          <Select
            placeholder="Select option"
            onChange={(e) => setFilter(e.target.value)}
          >
            {data.getOrbitingBodys().map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <div style={{ alignItems: "center" }}>
        {chartType === "table" ? (
          <TableDisplay data={dataFiltred} />
        ) : (
          <ChartDisplay data={dataFiltred} />
        )}
      </div>
    </>
  );
};

export default NearEarthTemplate;
