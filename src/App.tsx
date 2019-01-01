import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Docs } from './docs'

export const App: React.SFC = () => (
  <HashRouter>
    <Docs />
  </HashRouter>
)

// tslint:disable-next-line:no-default-export
export default App
