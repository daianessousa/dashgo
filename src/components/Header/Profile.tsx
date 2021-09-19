import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text> Daiane Sousa </Text>
        <Text color="gray.300" fontSize="small">
          daisousa.c@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Daiane Sousa"
        src="https://avatars.githubusercontent.com/u/52220304?v=4"
      />
    </Flex>
  );
}
