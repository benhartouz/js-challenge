import { Flex, Center } from "@chakra-ui/react";
const RenderFlexCenter = ({ children }) => {
  return (
    <Flex justify={"center"} h={500}>
      <Center>{children}</Center>
    </Flex>
  );
};

export default RenderFlexCenter;
