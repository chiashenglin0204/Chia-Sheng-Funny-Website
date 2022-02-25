import { Button, useColorModeValue } from "@chakra-ui/react";

interface SystemButtonProps {
  children: any;
  rightIcon?: any;
  //toggleOn: boolean;
}

export const SystemButton = (props: SystemButtonProps) => {
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      border="2px"
      color={useColorModeValue("black", "white")}
      borderColor={useColorModeValue("black", "white")}
      variant="outline"
      {...props}
    ></Button>
  );
};
