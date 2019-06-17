import React from 'react'
import { Section } from 'technoidentity-devfractal'
import { Card } from './Card'
import { SearchForm } from './SearchForm'

export const CardApp: React.FC = () => {
  const [name, setName] = React.useState('')

  const handleSearch: (userName: string) => void = (userName: string) => {
    console.log(userName)
    setName(userName)
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <Section>
        <Card name={name} />
      </Section>
    </>
  )
}