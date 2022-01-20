import { Chart } from "react-google-charts";
import { Spinner } from "@chakra-ui/react";
import RenderFlexCenter from "../../../renderFlexCenter";

const ChartDisplay = ({ data }) => {
  return (
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
        ["NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter"],
        ...data,
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
  );
};

export default ChartDisplay;
