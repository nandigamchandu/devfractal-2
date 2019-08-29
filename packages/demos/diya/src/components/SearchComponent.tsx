import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'devfractal-ui-core'
import { array, Mixed, TypeOf } from 'io-ts'
import React from 'react'
import Autosuggest from 'react-autosuggest'
import { http as httpAPI } from 'technoidentity-devfractal'
import { HasProps } from 'technoidentity-utils'

export const Search = <Spec extends Mixed & HasProps>({
  spec,
  resource,
  searchBy,
  onClick,
}: {
  readonly spec: Spec
  readonly resource: string
  readonly searchBy: string
  onClick(value: string): void
}) => {
  const [state, setState] = React.useState<{
    value: string
    suggestions: Array<TypeOf<typeof spec>>
  }>({
    value: '',
    suggestions: [],
  })

  const http: ReturnType<typeof httpAPI> = httpAPI({
    baseURL: 'http://localhost:9999',
  })

  const getSuggestions = async (value: string) => {
    const inputLength = value.length
    try {
      const suggestions = await http.get(
        {
          resource,
          query: `${searchBy}_like=^${value}`,
        },
        array(spec),
      )
      return inputLength === 0 ? [] : suggestions
    } catch (err) {
      throw new Error(err)
    }
  }

  const getSuggestionValue = (suggestion: TypeOf<typeof spec>) =>
    suggestion[searchBy]

  const renderSuggestion = (suggestion: TypeOf<typeof spec>) => (
    <div>{`${suggestion[searchBy]}`}</div>
  )

  const onChange = (
    _event: React.FormEvent<any>,
    { newValue }: { newValue: string },
  ) => {
    setState({ ...state, value: newValue })
  }

  const onSuggestionsFetchRequested = async ({ value }: { value: string }) => {
    setState({ value, suggestions: await getSuggestions(value) })
  }

  const inputProps = {
    placeholder: `Type a ${searchBy}`,
    value: state.value,
    onChange,
  }
  return (
    <>
      <Autosuggest
        suggestions={state.suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        alwaysRenderSuggestions={true}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button type="button" onClick={() => onClick(state.value)}>
        <Icon icon={faSearch} />
      </button>
    </>
  )
}
