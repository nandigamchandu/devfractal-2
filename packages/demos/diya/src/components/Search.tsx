import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'devfractal-ui-core'
import { Mixed, readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import Autosuggest from 'react-autosuggest'
import { http as httpAPI } from 'technoidentity-devfractal'

const http: ReturnType<typeof httpAPI> = httpAPI({
  baseURL: 'http://localhost:9999',
})

export interface SearchProps<Spec extends Mixed> {
  readonly spec: Spec
  readonly resource: string
  readonly searchBy: string
  onSearch(value: string): void
}

interface SearchState<T> {
  readonly value: string
  readonly suggestions: readonly T[]
}

export function Search<Spec extends Mixed>({
  spec,
  resource,
  searchBy,
  onSearch,
}: SearchProps<Spec>): JSX.Element {
  const [state, setState] = React.useState<SearchState<TypeOf<Spec>>>({
    value: '',
    suggestions: [],
  })

  async function fetchSuggestions(value: string): Promise<TypeOf<Spec>> {
    if (value.length === 0) {
      return []
    }

    return http.get(
      {
        resource,
        query: `${searchBy}_like=^${value}`,
      },
      readonlyArray(spec),
    )
  }

  return (
    <>
      <Autosuggest
        suggestions={state.suggestions}
        onSuggestionsFetchRequested={async ({ value }) => {
          const suggestions = await fetchSuggestions(value)
          setState({ value, suggestions })
        }}
        alwaysRenderSuggestions={true}
        getSuggestionValue={suggestion => suggestion[searchBy]}
        renderSuggestion={suggestion => <div>{`${suggestion[searchBy]}`}</div>}
        inputProps={{
          placeholder: `Type a ${searchBy}`,
          value: state.value,
          onChange: (_, { newValue }) =>
            setState({ ...state, value: newValue }),
        }}
      />

      <button type="button" onClick={() => onSearch(state.value)}>
        <Icon icon={faSearch} />
      </button>
    </>
  )
}
