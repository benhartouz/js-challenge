import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Text,
  Spacer,
} from "@chakra-ui/react";

const Error = ({ onClick, msg }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error occurred!</AlertTitle>
      <AlertDescription>An error occurred when getting data.</AlertDescription>
      <Button onClick={onClick} marginLeft={5}>
        <Text>Try again</Text>
      </Button>
    </Alert>
  );
};

export default Error;
