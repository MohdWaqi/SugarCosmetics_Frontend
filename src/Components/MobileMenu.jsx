import { ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const MobileMenu = ({menuTitle}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" borderBottom="2px solid gray" py="1.5rem">
         <Text>{menuTitle}</Text>
         <ChevronRightIcon fontSize="1.5rem" />
        </Flex>
  )
}
