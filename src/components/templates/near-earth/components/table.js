import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const TableDisplay = ({ data }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>NEO Name</Th>
          <Th isNumeric>Min Estimated Diameter (km)</Th>
          <Th isNumeric>Max Estimated Diameter</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr>
            <Td>{item[0]}</Td>
            <Td>{parseFloat(item[1]).toFixed(2)}</Td>
            <Td>{parseFloat(item[1]).toFixed(2)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableDisplay;
