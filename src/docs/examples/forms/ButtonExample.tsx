import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faBold,
  faCheck,
  faItalic,
  faTimes,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import {
  Box,
  Button,
  ButtonsGroup,
  Field,
  Icon,
  Label,
  Section,
  Text,
  Title,
} from '../devfractal'

export const DynamicButtonExample: React.FunctionComponent = () => {
  const [click, setClick] = useState(false)
  return (
    <Section>
      <Title size="4">Dynamic Button</Title>
      <Button onClick={() => setClick(!click)}>
        {click ? 'Done' : 'Click Me!'}
      </Button>
    </Section>
  )
}

export const NormalButtonExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Normal button</Title>
    <Button>Button</Button>
  </Section>
)

export const TypesOfButtonExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Types of button</Title>
    <Field grouped>
      <Button>Anchor</Button>
      <Button>Button</Button>
      <Button>Submit input</Button>
      <Button>Reset input</Button>
    </Field>
  </Section>
)

export const ButtonColorsExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Colors</Title>
    <Field grouped>
      <Button variant="white">White</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="black">Black</Button>
      <Button variant="text">Text</Button>
    </Field>
    <Field grouped>
      <Button variant="primary">primary</Button>
      <Button variant="link">link</Button>
      <Button variant="info">info</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="danger">Danger</Button>
    </Field>
  </Section>
)

export const ButtonSizesExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <Field grouped>
      <Button size="small">Small</Button>
      <Button>Default</Button>
      <Button size="normal">Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Field>
  </Section>
)

export const ButtonStylesExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Styles</Title>
    <Label>Outlined</Label>
    <Field grouped>
      <Button outlined>Outlined</Button>
      <Button variant="primary" outlined>
        Outlined
      </Button>
      <Button variant="link" outlined>
        Outlined
      </Button>
      <Button variant="info" outlined>
        Outlined
      </Button>
      <Button variant="success" outlined>
        Outlined
      </Button>
      <Button variant="danger" outlined>
        Outlined
      </Button>
    </Field>

    <Label>Inverted</Label>
    <Field grouped>
      <Button inverted>inverted</Button>
      <Button variant="primary" inverted>
        inverted
      </Button>
      <Button variant="link" inverted>
        inverted
      </Button>
      <Button variant="info" inverted>
        inverted
      </Button>
      <Button variant="success" inverted>
        inverted
      </Button>
      <Button variant="danger" inverted>
        inverted
      </Button>
    </Field>

    <Label>Invert Outlined</Label>
    <Field grouped>
      <Button inverted outlined>
        inverted outlined
      </Button>
      <Button variant="primary" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="link" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="info" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="success" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="danger" inverted outlined>
        inverted outlined
      </Button>
    </Field>

    <Label>Rounded buttons</Label>
    <Field grouped>
      <Button>Rounded</Button>
      <Button variant="primary" rounded>
        Rounded
      </Button>
      <Button variant="link" rounded>
        Rounded
      </Button>
      <Button variant="dark" rounded>
        Rounded
      </Button>
      <Button variant="success" rounded>
        Rounded
      </Button>
      <Button variant="danger" rounded>
        Rounded
      </Button>
    </Field>
  </Section>
)

export const ButtonStatesExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">States</Title>
    <Label>Normal</Label>
    <Field grouped>
      <Button>Normal</Button>
      <Button variant="success">Normal</Button>
      <Button variant="primary">Normal</Button>
      <Button variant="success">Normal</Button>
      <Button variant="warning">Normal</Button>
    </Field>

    <Label>Hover</Label>
    <Field grouped>
      <Button state="hovered">Hover</Button>
      <Button variant="success" state="hovered">
        Hover
      </Button>
      <Button variant="primary" state="hovered">
        Hover
      </Button>
      <Button variant="success" state="hovered">
        Hover
      </Button>
      <Button variant="warning" state="hovered">
        Hover
      </Button>
    </Field>

    <Label>Focus</Label>

    <Field grouped>
      <Button state="focused">Focus</Button>
      <Button variant="success" state="focused">
        Focus
      </Button>
      <Button variant="primary" state="focused">
        Focus
      </Button>
      <Button variant="success" state="focused">
        Focus
      </Button>
      <Button variant="warning" state="focused">
        Focus
      </Button>
    </Field>

    <Label>Active</Label>
    <Field grouped>
      <Button variant="primary" state="active">
        active
      </Button>
      <Button variant="success" state="active">
        active
      </Button>
      <Button variant="link" state="active">
        active
      </Button>
      <Button variant="info" state="active">
        active
      </Button>
      <Button variant="warning" state="active">
        active
      </Button>
      <Button variant="danger" state="active">
        active
      </Button>
    </Field>

    <Label>Loading</Label>
    <Field grouped>
      <Button variant="primary" state="loading">
        loading
      </Button>
      <Button variant="success" state="loading">
        loading
      </Button>
      <Button variant="link" state="loading">
        loading
      </Button>
      <Button variant="info" state="loading">
        loading
      </Button>
      <Button variant="warning" state="loading">
        loading
      </Button>
      <Button variant="danger" state="loading">
        loading
      </Button>
    </Field>
  </Section>
)

export const StaticButtonExample: React.FunctionComponent = () => (
  <Section>
    <Label>Static</Label>
    <Button state="static">Static</Button>
  </Section>
)

export const DisabledButtonExample: React.FunctionComponent = () => (
  <Section>
    <Label>Disabled</Label>
    <Field grouped>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="info" disabled>
        Disabled
      </Button>
      <Button variant="success" disabled>
        Disabled
      </Button>
      <Button variant="link" disabled>
        Disabled
      </Button>
      <Button variant="black" disabled>
        Disabled
      </Button>
      <Button variant="dark" disabled>
        Disabled
      </Button>
    </Field>
  </Section>
)

export const ButtonWithFontAwesomeIconsExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">With Font Awesome icons</Title>
    <Field grouped>
      <Button>
        <Icon icon={faBold} />
      </Button>
      <Button>
        <Icon icon={faItalic} />
      </Button>
      <Button>
        <Icon icon={faUnderline} />
      </Button>
    </Field>

    <Field grouped>
      <Button>
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </Button>
      <Button variant="primary">
        <Icon icon={faTwitter} />
        <Text>Twitter</Text>
      </Button>
      <Button variant="success">
        <Icon icon={faCheck} />
        <Text>Save</Text>
      </Button>
      <Button outlined variant="danger">
        <Icon icon={faTimes} />
        <Text>Delete</Text>
      </Button>
    </Field>

    <Field grouped>
      <Button size="small">
        <Icon icon={faGithub} />
        <Text> GitHub</Text>
      </Button>
      <Button size="normal">
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </Button>
      <Button size="medium">
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </Button>
      <Button size="large">
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </Button>
    </Field>
  </Section>
)

export const ButtonGroupExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Button group</Title>
    <Field grouped>
      <Button variant="link">save changes</Button>
      <Button>Cancel</Button>
      <Button variant="danger">Delete Post</Button>
    </Field>
  </Section>
)

export const ButtonAddonsExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Button addons</Title>
    <Field addons>
      <Button>
        <Icon icon={faAlignLeft} />
        <Text> Left</Text>
      </Button>
      <Button>
        <Icon icon={faAlignCenter} />
        <Text>Center</Text>
      </Button>
      <Button>
        <Icon icon={faAlignRight} />
        <Text>Right</Text>
      </Button>
    </Field>
  </Section>
)

export const ButtonGroupWithAddonsExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Button group with addons</Title>
    <Field addons>
      <Button>
        <Icon icon={faBold} />
        <Text>Bold</Text>
      </Button>
      <Button>
        <Icon icon={faItalic} />
        <Text>Italic</Text>
      </Button>
      <Button>
        <Icon icon={faUnderline} />
        <Text>Underline</Text>
      </Button>
    </Field>
    <Field addons>
      <Button>
        <Icon icon={faAlignLeft} /> <Text>Left</Text>
      </Button>
      <Button>
        <Icon icon={faAlignCenter} />
        <Text>Center</Text>
      </Button>
      <Button>
        <Icon icon={faAlignRight} />
        <Text>Right</Text>
      </Button>
    </Field>
  </Section>
)

export const ListOfButtonsExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">List of buttons</Title>
    <ButtonsGroup>
      <Button variant="success">Save changes</Button>
      <Button variant="info">Save and continue</Button>
      <Button variant="danger">Cancel</Button>
    </ButtonsGroup>

    <ButtonsGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
      <Button>Five</Button>
      <Button>Six</Button>
      <Button>Seven</Button>
      <Button>Eight</Button>
      <Button>Nine</Button>
      <Button>Ten</Button>
      <Button>Eleven</Button>
      <Button>Twelve</Button>
      <Button>Thirteen</Button>
      <Button>Fourteen</Button>
      <Button>Fifteen</Button>
      <Button>Sixteen</Button>
      <Button>Seventeen</Button>
      <Button>Eighteen</Button>
      <Button>Nineteen</Button>
      <Button>Twenty</Button>
    </ButtonsGroup>

    <Box>
      <Label>Addons</Label>
      <ButtonsGroup addons>
        <Button>Yes</Button>
        <Button>Maybe</Button>
        <Button>No</Button>
      </ButtonsGroup>
      <Label>Addons centered</Label>
      <ButtonsGroup addons alignment="centered">
        <Button>Yes</Button>
        <Button>Maybe</Button>
        <Button>No</Button>
      </ButtonsGroup>
      <Label>Addons right</Label>
      <ButtonsGroup addons alignment="right">
        <Button>Yes</Button>
        <Button>Maybe</Button>
        <Button>No</Button>
      </ButtonsGroup>
    </Box>

    <Box>
      <ButtonsGroup addons>
        <Button variant="success" state="selected">
          Yes
        </Button>
        <Button>Maybe</Button>
        <Button>No</Button>
      </ButtonsGroup>

      <ButtonsGroup addons>
        <Button>Yes</Button>
        <Button variant="info" state="selected">
          Maybe
        </Button>
        <Button>No</Button>
      </ButtonsGroup>

      <ButtonsGroup addons>
        <Button>Yes</Button>
        <Button>Maybe</Button>
        <Button variant="danger" state="selected">
          No
        </Button>
      </ButtonsGroup>
    </Box>
  </Section>
)

export const ButtonExample: React.FunctionComponent = () => (
  <>
    <DynamicButtonExample />
    <NormalButtonExample />
    <TypesOfButtonExample />
    <ButtonColorsExample />
    <ButtonSizesExample />
    <ButtonStylesExample />
    <ButtonStatesExample />
    <StaticButtonExample />
    <DisabledButtonExample />
    <ButtonWithFontAwesomeIconsExample />
    <ButtonGroupExample />
    <ButtonAddonsExample />
    <ButtonGroupWithAddonsExample />
    <ListOfButtonsExample />
  </>
)
