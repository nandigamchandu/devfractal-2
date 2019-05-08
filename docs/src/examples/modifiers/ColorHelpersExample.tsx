import React from 'react'
import { Box, Section, Text, Title } from 'technoidentity-devfractal'

const TextColorExample: React.FC = () => (
  <Section>
    <Title>Text Color</Title>
    <Box>
      <Text color="black">black</Text>
      <Text color="primary">primary</Text>
      <Text color="success">success</Text>
      <Text color="warning">warning</Text>
      <Text color="link">link</Text>
      <Text color="dark">dark</Text>
      <Text color="info">info</Text>
      <Text color="white">white</Text>
      <Text color="danger">Danger</Text>
      <Text color="black-bis">black-bis</Text>
      <Text color="black-ter">black-ter</Text>
      <Text color="grey-darker">grey-darker</Text>
      <Text color="grey-dark">grey-dark</Text>
      <Text color="grey">grey</Text>
      <Text color="grey-light">grey-light</Text>
      <Text color="grey-lighter">grey-lighter</Text>
      <Text color="white-ter">white-ter</Text>
      <Text color="white-bis">White-bis</Text>
    </Box>
  </Section>
)

const TextBackgroundColorExample: React.FC = () => (
  <Section>
    <Title>Background Color</Title>
    <Box>
      <Text backgroundColor="black">black</Text>
      <Text backgroundColor="primary">primary</Text>
      <Text backgroundColor="success">success</Text>
      <Text backgroundColor="warning">warning</Text>
      <Text backgroundColor="link">link</Text>
      <Text backgroundColor="dark">dark</Text>
      <Text backgroundColor="info">info</Text>
      <Text backgroundColor="white">white</Text>
      <Text backgroundColor="danger">Danger</Text>
      <Text backgroundColor="black-bis">black-bis</Text>
      <Text backgroundColor="black-ter">black-ter</Text>
      <Text backgroundColor="grey-darker">grey-darker</Text>
      <Text backgroundColor="grey-dark">grey-dark</Text>
      <Text backgroundColor="grey">grey</Text>
      <Text backgroundColor="grey-light">grey-light</Text>
      <Text backgroundColor="grey-lighter">grey-lighter</Text>
      <Text backgroundColor="white-ter">white-ter</Text>
      <Text backgroundColor="white-bis">White-bis</Text>
    </Box>
  </Section>
)

export const Color: React.FC = () => (
  <>
    <TextColorExample />
    <TextBackgroundColorExample />
  </>
)
