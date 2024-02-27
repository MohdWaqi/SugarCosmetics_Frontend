import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const FilterOption = ({ optionData }) => {
  return optionData.map((option, index) => (
    <AccordionItem key={index} borderTop="2px solid #F3F3F3">
      <h2>
        <AccordionButton _hover={{ backgroundColor: "white" }}>
          <Box as="span" flex="1" textAlign="left" fontWeight="700">
            {option.name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Stack>
          {option.data.map((detail, index) => (
            <Checkbox key={index} gap="20px" colorScheme="pink">
              {detail}
            </Checkbox>
          ))}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  ));
};

export default FilterOption;
