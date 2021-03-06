import {
  faBook,
  faHome,
  faPuzzlePiece,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { Route, SimpleRedirect } from '@stp/router'
import { Breadcrumb, BreadcrumbItem } from '@stp/ui'
import { Container, Icon, Section } from '@stp/ui-core'
import React from 'react'

export const BreadcrumbAlignmentsExample: React.FC = () => (
  <>
    <Container>
      <Breadcrumb alignment="centered">
        <BreadcrumbItem>Bulma</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </Container>
    <Container>
      <Breadcrumb alignment="right">
        <BreadcrumbItem>Bulma</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </Container>
  </>
)

export const BreadcrumbIconsExample: React.FC = () => (
  <Container>
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon icon={faHome} />
        Bulma
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon icon={faBook} />
        Documentation
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Icon icon={faPuzzlePiece} />
        Components
      </BreadcrumbItem>

      <BreadcrumbItem active>
        <Icon icon={faThumbsUp} />
        Breadcrumb
      </BreadcrumbItem>
    </Breadcrumb>
  </Container>
)

export const BreadcrumbSizesExample: React.FC = () => (
  <Container>
    <Breadcrumb size="small">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="medium">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="large">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </Container>
)

export const BreadcrumbSeparatorsExample: React.FC = () => (
  <Container>
    <Breadcrumb separator="arrow">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="bullet">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="dot">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="succeeds">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </Container>
)

export const BreadcrumbExample: React.FC = () => (
  <>
    <Section>
      <Breadcrumb baseURL="/components/breadcrumb">
        <BreadcrumbItem value="alignments">Alignment</BreadcrumbItem>
        <BreadcrumbItem value="icons">Icons</BreadcrumbItem>
        <BreadcrumbItem value="separators">Separators</BreadcrumbItem>
        <BreadcrumbItem value="sizes">Sizes</BreadcrumbItem>
      </Breadcrumb>
    </Section>

    <Container>
      <SimpleRedirect
        exact
        from="/components/breadcrumb"
        to="/components/breadcrumb/alignments"
      />
      <Route
        path="/components/breadcrumb/alignments"
        exact
        component={BreadcrumbAlignmentsExample}
      />
      <Route
        path="/components/breadcrumb/icons"
        exact
        component={BreadcrumbIconsExample}
      />
      <Route
        path="/components/breadcrumb/separators"
        component={BreadcrumbSeparatorsExample}
        exact
      />
      <Route
        path="/components/breadcrumb/sizes"
        component={BreadcrumbSizesExample}
        exact
      />
    </Container>
  </>
)
