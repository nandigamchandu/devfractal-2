import React from 'react'
import { HashRouter, Link } from 'react-router-dom'
import {
  Container,
  Hero,
  HeroBody,
  SubTitle,
  Title,
  Section,
} from './devfractal'
import logo from './docs/logo.png'
import { Presentation } from './Presentation'

const PresentationApp: React.SFC = ({ children }) => (
  <>
    <Hero variant="light">
      <HeroBody>
        <Container className="has-text-centered">
          <Title>
            <Link to="/">
              <img src={logo} style={{ width: '512px' }} />
            </Link>
          </Title>
          <SubTitle>React Simplified</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Section>{children}</Section>
  </>
)

export const App: React.SFC = () => (
  <HashRouter>
    <PresentationApp>
      <Presentation />
    </PresentationApp>
  </HashRouter>
)

// tslint:disable-next-line:no-default-export
export default App
