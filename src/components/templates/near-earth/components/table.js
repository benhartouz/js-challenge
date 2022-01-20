import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Button,
} from "@chakra-ui/react";
import { CSVLink, CSVDownload } from "react-csv";

const TableDisplay = ({ data }) => {
  console.log("data", data);
  const csvData = [
    ["NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter"],
    ...data,
  ];

  return (
    <>
      <Stack spacing={5} direction="row" align="center" marginBottom={5}>
        <Button colorScheme="teal" size="lg">
          <CSVLink data={csvData}>Save as csv file</CSVLink>
        </Button>
      </Stack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>NEO Name</Th>
            <Th isNumeric>Min Estimated Diameter (km)</Th>
            <Th isNumeric>Max Estimated Diameter</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, key) => (
            <Tr key={`${item[0]}_${key}`}>
              <Td>{item[0]}</Td>
              <Td>{parseFloat(item[1]).toFixed(2)}</Td>
              <Td>{parseFloat(item[1]).toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default TableDisplay;
