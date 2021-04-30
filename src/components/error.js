import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Text,
} from "@chakra-ui/react";

const Error = ({ onClick, msg }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error fetching data!</AlertTitle>
      <AlertDescription>
        There is an error when we fetching data try again.
      </AlertDescription>
      <Button onClick={onClick}>
        <Text>Try again</Text>
      </Button>
    </Alert>
  );
};

export default Error;
