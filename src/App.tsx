import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Presentation } from './Presentation'

export const App: React.SFC = () => (
  <HashRouter>
    <Presentation />
  </HashRouter>
)

// tslint:disable-next-line:no-default-export
export default App
