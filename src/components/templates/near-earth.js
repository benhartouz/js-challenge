import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { Chart } from "react-google-charts";

import RenderFlexCenter from "../renderFlexCenter";
import Error from "../../components/error";

const NearEarthTemplate = ({ isLoading, data, isError, refetch }) => {
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
            ...data.getAdaptedData(),
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
          }}
        />
      </div>
    </>
  );
};

export default NearEarthTemplate;
