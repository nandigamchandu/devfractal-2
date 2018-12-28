import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Section } from './bulma/layout'
import { Routes } from './Routes'

export const App: React.SFC = () => (
  <BrowserRouter>
    <Section>
      <Routes />
    </Section>
  </BrowserRouter>
)

// tslint:disable-next-line:no-default-export
export default App
