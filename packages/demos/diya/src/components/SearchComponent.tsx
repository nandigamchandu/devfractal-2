import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'devfractal-ui-core'
import { array, TypeOf } from 'io-ts'
import React from 'react'
import Autosuggest from 'react-autosuggest'
import { http as httpAPI } from 'technoidentity-devfractal'
import { User } from '../common'

export const SearchComponent: React.FC<{ onClick(value: string): void }> = ({
  onClick,
}) => {
  const [state, setState] = React.useState<{
    value: string
    suggestions: Array<TypeOf<typeof User>>
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
      const users = await http.get(
        {
          resource: 'users',
          query: `userName_like=^${value}`,
        },
        array(User),
      )
      return inputLength === 0 ? [] : users
    } catch (err) {
      throw new Error(err)
    }
  }

  const getSuggestionValue = (suggestion: TypeOf<typeof User>) =>
    suggestion.userName

  const renderSuggestion = (suggestion: TypeOf<typeof User>) => (
    <div>{`${suggestion.userName}`}</div>
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
    placeholder: 'Type a User Name',
    value: state.value,
    onChange,
  }

  //  const renderInputComponent = (inputProps: any) => (
  //    <div>
  //      <Input {...inputProps} />

  //    </div>
  //  )

  return (
    <>
      <Autosuggest
        suggestions={state.suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        alwaysRenderSuggestions={true}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        // renderInputComponent={renderInputComponent}
      />
      <button type="button" onClick={() => onClick(state.value)}>
        <Icon icon={faSearch} />
      </button>
    </>
  )
}
