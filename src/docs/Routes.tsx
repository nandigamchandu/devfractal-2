import React from 'react'
import { Route } from 'react-router-dom'
import {
  Container,
  SimpleRedirect,
  StepComponent,
  TableContentLoader,
} from '../devfractal'
import {
  BoxExample,
  BreadcrumbExample,
  ButtonExample,
  CardExample,
  CheckBoxExample,
  ColorHelpersExample,
  ColumnsLinks,
  ColumnsRoutes,
  ContainerExample,
  ContentExample,
  Counter,
  DeleteExample,
  DropdownExample,
  DropdownExampleRoutes,
  FieldsGeneralForm,
  FileExample,
  FooterExample,
  GeneralExample,
  HelpersExample,
  HeroExample,
  IconExample,
  ImageExample,
  InputExample,
  LevelExample,
  LoginFormVariants,
  LoginFormVariantsRoutes,
  MediaObjectExample,
  MenuExample,
  MessageExample,
  ModalExample,
  NavbarExample,
  NotificationExample,
  PaginationExample,
  PanelExample,
  ProgressBarExample,
  RadioExample,
  SectionExample,
  SelectExample,
  SimpleExamples,
  SimpleFormExample,
  SimpleTodo,
  TableExample,
  TabsExample,
  TagExample,
  TextAreaExample,
  TileExample,
  TitleExample,
  Todo,
  TreeViewStructure,
  TypographyHelpersExample,
} from './examples'
import { TodoRoutes } from './examples/crud/TodoRoutes'
import {
  BottomSection,
  ExploreUIComponents,
  FooterSection,
  IndexPageHeader,
  UIComponentsOverview,
} from './IndexPage'
import {
  ComponentsTab,
  CompositesTab,
  ElementsTab,
  FormTab,
  LayoutTab,
  ModifiersTab,
} from './Tabs'

export const FormRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/form" to="/form/general" />
    <Route path="/form/general" exact component={GeneralExample} />
    <Route path="/form/input" exact component={InputExample} />
    <Route path="/form/select" exact component={SelectExample} />
    <Route path="/form/checkbox" exact component={CheckBoxExample} />
    <Route path="/form/button" exact component={ButtonExample} />
    <Route path="/form/radio" exact component={RadioExample} />
    <Route path="/form/textarea" exact component={TextAreaExample} />
    <Route path="/form/file" exact component={FileExample} />
  </>
)

export const CompositesRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/composites" to="/composites/simple" />
    <Route path="/composites/simple" exact component={SimpleExamples} />
    <Route path="/composites/simple-form" exact component={SimpleFormExample} />
    <Route
      path="/composites/general-form"
      exact
      component={FieldsGeneralForm}
    />
    <Route path="/composites/counter" exact component={Counter} />
    <Route path="/composites/todo" exact component={Todo} />
    <Route path="/composites/treeview" exact component={TreeViewStructure} />
    <Route path="/composites/simple-todo" exact component={SimpleTodo} />
    <Route
      path="/composites/login-form-variants"
      exact
      component={LoginFormVariants}
    />
  </>
)

export const CrudRoutes: React.FC = () => <TodoRoutes />

export const LayoutRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/layout" to="/layout/container" />
    <Route path="/layout/container" exact component={ContainerExample} />
    <Route path="/layout/hero" exact component={HeroExample} />
    <Route path="/layout/footer" exact component={FooterExample} />
    <Route path="/layout/level" exact component={LevelExample} />
    <Route path="/layout/object" exact component={MediaObjectExample} />
    <Route path="/layout/section" exact component={SectionExample} />
    <Route path="/layout/tiles" exact component={TileExample} />
  </>
)

export const ElementsRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/elements" to="elements/box" />
    <Route path="/elements/box" exact component={BoxExample} />
    <Route
      path="/elements/notification"
      exact
      component={NotificationExample}
    />
    <Route path="/elements/content" exact component={ContentExample} />
    <Route path="/elements/title" exact component={TitleExample} />
    <Route path="/elements/delete" exact component={DeleteExample} />
    <Route path="/elements/icon" exact component={IconExample} />
    <Route path="/elements/image" exact component={ImageExample} />
    <Route path="/elements/bars" exact component={ProgressBarExample} />
    <Route path="/elements/tag" exact component={TagExample} />
    <Route path="/elements/table" exact component={TableExample} />
    <Route
      path="/elements/table-content"
      exact
      component={TableContentLoader}
    />
  </>
)

export const ComponentsRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/components" to="/components/card" />
    <Route path="/components/card" exact component={CardExample} />
    <Route path="/components/dropdown" exact component={DropdownExample} />
    <Route path="/components/message" exact component={MessageExample} />
    <Route path="/components/tabs" exact component={TabsExample} />
    <Route path="/components/panel" exact component={PanelExample} />
    <Route path="/components/modal" exact component={ModalExample} />
    <Route path="/components/navbar" exact component={NavbarExample} />
    <Route path="/components/menu" exact component={MenuExample} />
    <Route path="/components/pagination" exact component={PaginationExample} />
    <Route path="/components/breadcrumb" component={BreadcrumbExample} />
    <Route path="/components/step" component={StepComponent} />
  </>
)

export const ModifiersRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/modifiers" to="/modifiers/helpers" />
    <Route path="/modifiers/helpers" exact component={HelpersExample} />
    <Route path="/modifiers/colors" exact component={ColorHelpersExample} />
    <Route
      path="/modifiers/typography"
      exact
      component={TypographyHelpersExample}
    />
  </>
)

export const TabsRoutes: React.FC = () => (
  <>
    <Route path="/form" component={FormTab} />
    <Route path="/composites" component={CompositesTab} />
    <Route path="/components" component={ComponentsTab} />
    <Route path="/elements" component={ElementsTab} />
    <Route path="/modifiers" component={ModifiersTab} />
    <Route path="/layout" component={LayoutTab} />
    <Route path="/columns" component={ColumnsLinks} />
  </>
)

export const IndexRoutes: React.FC = () => (
  <>
    <Route path="/" component={IndexPageHeader} />
    <Route exact path="/" component={UIComponentsOverview} />
    <Route exact path="/" component={ExploreUIComponents} />
    <Route exact path="/" component={BottomSection} />
    <Route exact path="/" component={FooterSection} />
  </>
)

export const Routes: React.FC = () => (
  <Container>
    <IndexRoutes />
    <TabsRoutes />
    <FormRoutes />
    <CompositesRoutes />
    <TodoRoutes />
    <ElementsRoutes />
    <ComponentsRoutes />
    <LayoutRoutes />
    <ColumnsRoutes />
    <ModifiersRoutes />
    <DropdownExampleRoutes />
    <LoginFormVariantsRoutes />
  </Container>
)
