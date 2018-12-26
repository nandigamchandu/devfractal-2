import React from 'react'
import { SubTitle, Title } from '../elements/Title'
import { Section } from '../layout'

export const TitleExample: React.SFC = () => (
  <Section>
    <Title className="is-size-1">Title 1</Title>
    <SubTitle size="3">Subtitle 3</SubTitle>
    <Title size="2" spaced>
      Title 2
    </Title>
    <SubTitle className="is-size-4">Subtitle 4</SubTitle>
    <Title size="3" spaced>
      Title 3
    </Title>
    <SubTitle size="5">Subtitle 5</SubTitle>
  </Section>
)
